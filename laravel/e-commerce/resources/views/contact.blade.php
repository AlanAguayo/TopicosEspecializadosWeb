@extends('layout.e-commerce')

@section('title', 'Contact Us')

@section('content')

    <body>
        <h1>Contact Us</h1>
        <div class="contact-form">

            <form action="{{ route('contact_post') }}" method="post" class="mx-auto w-75">
                @csrf
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" value="{{old("name")}}" required>
                </div>

                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" value="{{old("email")}}" required>
                </div>

                <div class="form-group">
                    <label for="subject">Subject:</label>
                    <input type="subject" class="form-control" id="subject" name="subject" value="{{old("subject")}}" required>
                </div>

                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea class="form-control" id="message" name="message" rows="4" required>{{old("name")}}</textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
            @if (session()->get('success'))
                <div class="alert alert-success text-center">
                    {{ session()->get('success') }}
                </div>
            @endif
            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>

    </body>

@endSection
