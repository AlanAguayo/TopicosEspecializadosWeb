@extends('layout.e-commerce')

@section('title', 'Employees List')

@section('content')
    <div class="container">
        <button id="btnSend" class="btn btn-primary">Send Request</button>
    </div>

    <table id="tblEmployees">
        <thead>
            <tr>
                <th>EMP. NO.</th>
                <th>FULL NAME</th>
                <th>E-MAIL</th>
                <th>GENDER</th>
                <th>SALARY</th>
                <th>DEPARTMENT</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($employees as $e)
                <tr>
                    <td>{{$e->emp_no ?? ''}}</td>
                    <td>{{$e->first_name ?? ''}} {{$e->last_name ?? ''}}</td>
                    <td>{{$e->email ?? ''}}</td>
                    <td>{{$e->gender ?? ''}}</td>
                    <td>{{$e->salary ?? ''}}</td>
                    <td>{{$e->department ?? ''}}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

@endSection
