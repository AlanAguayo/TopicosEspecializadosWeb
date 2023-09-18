<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="{{asset("js/apiProducts.js")}}"></script>
    <style>
        .center {
            text-align: center;
        }
        table, th, td {
  border: 1px solid black;
}
    </style>
</head>

<body>
    <h1 class="center">API Products</h1>
    <div class="center">
        <button id="btnSend">Send Rquest</button>
    </div>
    <table>
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
                <th>Category Id</th>
                <th>Created At</th>
                <th>updated At</th>
            </tr>
        </thead>
        <tbody id="tbody">

        </tbody>
    </table>
</body>

</html>
