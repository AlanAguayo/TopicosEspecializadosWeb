$(document).ready(function () {

    $('#btnRegister').on('click', function () {

        var firstName = $('#first_name').val();
        var lastName = $('#last_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();
        var password = $('#passwd').val();
        var confirmPassword = $('#passwd_conf').val();
    
        if (firstName.trim() === '' || lastName.trim() === ''|| email.trim() === ''|| phone.trim() === ''|| password.trim() === '') {
            alert('Please enter all data.');
            return;
        }
    
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid Email.');
            return;
        }

        var phonePattern = /^\d+$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid Mobile No.');
            return;
        }
    
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        
        var data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            address: address,
            password: password
        };

        $.ajax({
            dataType: 'json',
            url: "http://127.0.0.1:3000/api/v1/users",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function (response) {
                alert(JSON.stringify(response.responseText));
                },
            error: function (response) {
                alert(JSON.stringify(response.responseText));
            }
        });
    });
})

