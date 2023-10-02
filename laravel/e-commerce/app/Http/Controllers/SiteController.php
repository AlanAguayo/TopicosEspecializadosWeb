<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use App\Models\Categories;
use App\Models\Contact;
use App\Models\Products;
use App\Models\Reviews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;

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

    public function apiProducts(){
        return view('api-products');
    }

    public function adminEmployees(){
        $response = Http::get("http://127.0.0.1:3000/api/v1/employees");
        $employees = $response->object();
        return view('e-commerce.admin-employees',compact('employees'));
    }

    public function about(){
        $about_message = "Hola, somos una empresa deddicada al desarrollo de sistemas en la web.";
        return view('about',["about_message" => $about_message]);
    }

    public function productDetail($product_id, Request $request){
        if($request->isMethod('POST')){
            $request->validate([
                'name' => 'required|max:255',
                'email' => 'required|email|max:255',
                'review' => 'required|min:5',
            ],[
                'name.required' => 'Please type your name.',
                'name.max' => '50 characters maximum.',
                'email.required' => 'Please type your email.',
                'email.email' => 'Please enter a valid email address.',
                'email.max' => '50 characters maximum.',
                'review.required' => 'Please type your review.',
            ]);
            $review = new Reviews();
            $review->name = $request->input('name');
            $review->email = $request->input('email');
            $review->review = $request->input('review');
            $review->star = random_int(1,5);
            $review->product_id = $product_id;
            $review->save();
            return redirect()->route("productDetail",$product_id)->with('success', 'Your review has been sent.');
        }
        $reviews = Reviews::where('product_id',$product_id)->get();
        $product = Products::where('id',$product_id)->get();
        return view('e-commerce.product-detail', compact('product', 'reviews'));
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
            $data = new \stdClass();
            $data->message= $request->message;
            $data->email=$request->email;
            $data->subject=$request->subject;
            $data->name=$request->name;
            Mail::to('19030034@itcelaya.edu.mx')->send(new ContactMail($data));
            $contact->save();
            return redirect()->route("contact")->with('success', 'Your contact messsage has been sent.');
        }
        return view('contact');
    }
}
