<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Contact;
use App\Models\Products;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function services(){
        return view('services');
    }

    public function faq(){
        return view('faq');
    }

    public function products($categories_id=null){
        $categories = Categories::all();
        //return view('products', ['products'=>$products]);
        $products = is_null($categories_id)?Products::all():Products::where('categories_id',$categories_id)->get();
        return view('e-commerce.product-list', compact('products','categories'));
    }

    public function productsByCat(){
        $categories = Categories::all();
        return view('e-commerce.products-by-cat', compact('categories'));
    }

    public function about(){
        $about_message = "Hola, somos una empresa deddicada al desarrollo de sistemas en la web.";
        return view('about',["about_message" => $about_message]);
    }

    public function contact(Request $request){

        if($request->isMethod('POST')){
            $request->validate([
                'name' => 'required|max:255',
                'email' => 'required|email|max:255',
                'subject' => 'required|max:255',
                'message' => 'required|min:5',
            ],[
                'name.required' => 'Please type your name.',
                'name.max' => '50 characters maximum.',
                'email.required' => 'Please type your email.',
                'email.email' => 'Please enter a valid email address.',
                'email.max' => '50 characters maximum.',
                'subject.required' => 'Please type your subject.',
                'subject.max' => '100 characters maximum.',
                'message.required' => 'Please type your message.',

            ]);
            $contact = new Contact();
            $contact->name = $request->input('name');
            $contact->email = $request->input('email');
            $contact->subject = $request->input('subject');
            $contact->message = $request->input('message');
            $contact->save();
            return redirect()->route("contact")->with('success', 'Your contact messsage has been sent.');
        }
        return view('contact');
    }
}
