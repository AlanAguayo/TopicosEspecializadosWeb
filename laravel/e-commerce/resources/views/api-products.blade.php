@extends('layout.e-commerce')

@section('title', 'Contact Us')

@section('content')
    <div class="container">
        <button id="btnSend" class="btn btn-primary">Send Request</button>
        <select id="selectCategories"></select>
    </div> 

    <table id="tblProducts">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Ratting</th>
                <th>OriginalPrice</th>
                <th>SalePrice</th>
                <th>Size</th>
                <th>Color</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
        <tfoot>
        </tfoot>
    </table>
    
@endSection

@section('scripts')
<script src="{{asset("js/apiProducts.js")}}"></script>
@endSection
