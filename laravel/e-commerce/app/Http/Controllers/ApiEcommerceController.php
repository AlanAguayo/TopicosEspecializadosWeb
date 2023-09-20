<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Products;
use Illuminate\Http\Request;

class ApiEcommerceController extends Controller
{
    public function products(Request $req)
    {
        $products = (is_null($req->input("category")) ?
            Products::with('categories')->get() :
            Products::where('categories_id', $req->input("category"))->with('categories')->get());
        return response()->json($products);
    }

    public function categories(Request $req)
    {
        $categories = (is_null($req->input("term"))?
            Categories::select('name as text', 'id')->get():
            Categories::where("name", "LIKE", '%'.$req->input("term").'%')->select('name as text', 'id')->get()
        );
        return response()->json(["results"=>$categories]);
    }
}
