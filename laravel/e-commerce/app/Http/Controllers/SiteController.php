<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    //

    public function services(){
        return view('services');
    }

    public function contact(){
        return view('contact');
    }

    public function faq(){
        return view('faq');
    }

    public function products(){
        $products = Product::all();
        //return view('products', ['products'=>$products]);
        return view('e-commerce.product-list', compact('products'));
    }

    public function about(){
        $about_message = "Hola, somos una empresa deddicada al desarrollo de sistemas en la web.";
        return view('about',["about_message" => $about_message]);
    }
}
