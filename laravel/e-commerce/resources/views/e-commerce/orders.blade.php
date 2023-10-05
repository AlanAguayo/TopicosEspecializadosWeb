@extends('layout.e-commerce')

@section('title', 'Orders')

@section('content')
    <div class="container">
        <button id="btnSend" class="btn btn-primary">Send Request</button>
        <select id="selectStatus"></select>
    </div> 

    <table id="tblOrders">
        <thead>
            <tr>
                <th>Order.No.</th>
                <th>Product Name</th>
                <th>Created At</th>
                <th>Price</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
        <tfoot>
            <tr>
                <th colspan="4" style="text-align:right"></th>
                <th></th>
            </tr>
        </tfoot>
    </table>
    
@endSection

@section('scripts')
<script src="{{asset("js/apiOrders.js")}}"></script>
@endSection