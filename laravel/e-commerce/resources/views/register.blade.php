@extends('layout.e-commerce')

@section('title', 'Contact Us')

@section('content')

        <!-- Breadcrumb Start -->
        <div class="breadcrumb-wrap">
            <div class="container-fluid">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Products</a></li>
                    <li class="breadcrumb-item active">Login & Register</li>
                </ul>
            </div>
        </div>
        <!-- Breadcrumb End -->
        
        <!-- Login Start -->
        <div class="login">
            <div class="container-fluid">
                        <div class="register-form">
                            <div class="row">
                                <div class="col-md-6">
                                    <label>First Name</label>
                                    <input class="form-control" type="text" placeholder="First Name" id="first_name" name="first_name" required>
                                </div>
                                <div class="col-md-6">
                                    <label>Last Name</label>
                                    <input class="form-control" type="text" placeholder="Last Name" id="last_name" name="last_name" required>
                                </div>
                                <div class="col-md-6">
                                    <label>E-mail</label>
                                    <input class="form-control" type="email" placeholder="E-mail" id="email" name="email" required>
                                </div>
                                <div class="col-md-6">
                                    <label>Mobile No</label>
                                    <input class="form-control" type="tel" placeholder="Mobile No" id="phone" name="phone" required>
                                </div>
                                <div class="col-md-6">
                                    <label>Address</label>
                                    <input class="form-control" type="text" placeholder="Address" id="address" name="address" required>
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input class="form-control" type="password" placeholder="Password" id="passwd" name="passwd" required>
                                </div>
                                <div class="col-md-6">
                                    <label>Retype Password</label>
                                    <input class="form-control" type="password" placeholder="Password" id="passwd_conf" name="passwd_conf" required>
                                </div>
                                <div class="col-md-12">
                                    <button class="btn" id="btnRegister">Register</button>
                                </div>
                            </div>
                        </div>

            </div>
        </div>
        <!-- Login End -->
        
@endSection

@section('scripts')
<script src="{{asset("js/apiUsers.js")}}"></script>
@endSection

