<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Product;
use App\Models\Products;
use Illuminate\Http\Request;

use function PHPUnit\Framework\isNull;

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

    public function products($categories_id=null){
        $categories = Categories::all();
        //return view('products', ['products'=>$products]);
        $products = is_null($categories_id)?Products::all():Products::where('categories_id',$categories_id)->get();
        return view('e-commerce.product-list', compact('products','categories'));
    }

    public function about(){
        $about_message = "Hola, somos una empresa deddicada al desarrollo de sistemas en la web.";
        return view('about',["about_message" => $about_message]);
    }
}
