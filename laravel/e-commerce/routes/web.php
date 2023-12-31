<?php

use App\Http\Controllers\ApiEcommerceController;
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

Route::get('/productsByCat', [SiteController::class,'productsByCat'])->name('productsByCat');

Route::get('/contact', [SiteController::class,'contact'])->name('contact');

Route::post('/contact', [SiteController::class,'contact'])->name('contact_post');

Route::get('/productDetail/{products_id}', [SiteController::class,'productDetail'])->name('productDetail');

Route::post('/productDetail/{products_id}', [SiteController::class,'productDetail'])->name('review_post');

Route::post('/mail', [SiteController::class,'mail'])->name('mail');

Route::get('/admin/products', [SiteController::class,'apiProducts'])->name('api-products');

Route::get('/admin/employees', [SiteController::class,'adminEmployees'])->name('admin-employees');

Route::get('/categories', [ApiEcommerceController::class,'categories'])->name('api-categories');

Route::get('/register', [SiteController::class,'register'])->name('register');

Route::get('/admin/orders', [SiteController::class,'adminOrders'])->name('admin-orders');
/*
Route::get('/', function () {
    return view('welcome');
});

Route::get('/greeting', function () {
    return 'Hello World';
});

Route::get('/services', [SiteController::class, 'services']);

Route::get('/faq', [SiteController::class, 'faq']);
Route::get('/products', [SiteController::class, 'products']);
Route::get('/about', [SiteController::class, 'about']);
*/