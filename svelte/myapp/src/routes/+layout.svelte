<script>
    import Navbar from './navbar.svelte'
</script>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body class="fondo">

    <Navbar />

    <div class="father">
        <slot />
    </div>
</body>

</html>

<style>
.navigation-bar{
    margin-bottom: 5%;
}
.father {
  display: grid;
  place-items: center;
}

body{
background-color: yellow;
}

</style>