@extends('layout.e-commerce')

@section('title', 'Product by category')

@section('content')

<nav class="nav">
    <ul class="nav nav-tabs">
        @foreach ($categories as $c)
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#collapse{{$c->id}}">
                    {{ $c->name }}
                </a>
            </li>
        @endforeach
    </ul>
</nav>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="accordion" id="accordionCategories">
                @foreach ($categories as $c)
                    <div class="card">
                        <div id="collapse{{$c->id}}" class="collapse" data-parent="#accordionCategories">
                            <div class="card-body">
                                <ul>
                                    @foreach ($c->products as $p)
                                        <li>{{ $p->name }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>

@endSection
