<?php

namespace App\Http\Controllers;

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
        return view('products');
    }

    public function about(){
        $about_message = "Hola, somos una empresa deddicada al desarrollo de sistemas en la web.";
        return view('about',["about_message" => $about_message]);
    }
}
