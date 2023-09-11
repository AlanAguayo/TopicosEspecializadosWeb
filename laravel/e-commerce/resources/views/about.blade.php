@extends('layout.e-commerce')

@section('title', 'Contact Us')

@section('content')

<body>
    <table class="navbar">
        <tr>
            <td><a href="/services">Services</td>
            <td><a href="/contact">Contact Us</a></td>
            <td><a href="/faq">FAQ</a></td>
            <td><a href="/products">Products</a></td>
        </tr>
    </table>
    <p>{{$about_message}}</p>
</body>

@endSection