<!DOCTYPE html>

<head>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
</head>

<body>
    <p>Nombre: {{ $data->name }}</p>
    <p>Correo: {{ $data->email }}</p>
    <p>Asunto: {{ $data->subject }}</p>
    <p>Mensaje{{ $data->message }}</p>
</body>

</html>
