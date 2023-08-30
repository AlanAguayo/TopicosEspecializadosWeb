<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact</title>
</head>

<body>
    <table class="navbar">
        <tr>
            <td><a href="/services">Services</td>
            <td><a href="/contact">Contact Us</a></td>
            <td><a href="/faq">FAQ</a></td>
            <td><a href="/products">Products</a></td>
        </tr>
    </table>
    <h1>Contact Us</h1>
    <div class="contact-form">
        <form action="#" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    </div>
</body>

</html>
