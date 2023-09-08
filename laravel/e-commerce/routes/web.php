<?php

use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('e-commerce.index');
});

Route::get('/product-list/{categories_id?}', [SiteController::class,'products'])->name('products');

Route::get('/productsByCat', [SiteController::class,'productsByCat']);

/*
Route::get('/', function () {
    return view('welcome');
});

Route::get('/greeting', function () {
    return 'Hello World';
});

Route::get('/services', [SiteController::class, 'services']);
Route::get('/contact', [SiteController::class, 'contact']);
Route::get('/faq', [SiteController::class, 'faq']);
Route::get('/products', [SiteController::class, 'products']);
Route::get('/about', [SiteController::class, 'about']);
*/
