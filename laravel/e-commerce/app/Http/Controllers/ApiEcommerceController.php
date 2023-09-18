<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ApiEcommerceController extends Controller
{
    public function products()
    {
        $products = Products::all();
        return response()->json($products);
    }
}
