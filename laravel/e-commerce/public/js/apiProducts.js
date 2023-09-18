
$(document).ready(function () {
    $('#btnSend').on('click', function () {
        $.ajax({
            dataType: 'json',
            url: "http://127.0.0.1:8000/api/products",
            type: 'GET',
            success: function (response) {
                $("#message").empty();
                products = response;
                $.each(products, function (i) {
                    $('#tbody').append(`
            <tr>
                <td>
                    ${products[i].id}
                </td>
                <td>
                    ${products[i].name}
                </td>
                <td>
                    ${products[i].description}
                </td>
                <td>
                    ${products[i].ratting}
                </td>
                <td>
                    ${products[i].original_price}
                </td>
                <td>
                    ${products[i].sale_price}
                </td>
                <td>
                    ${products[i].size}
                </td>
                <td>
                    ${products[i].color}
                </td>
                <td>
                    ${products[i].image}
                </td>
                <td>
                    ${products[i].categories_id}
                </td>
                <td>
                    ${products[i].created_at}
                </td>
                <td>
                    ${products[i].updated_at}
                </td>
       </tr>`);
                });
            },
            error: function () {
                console.log('error');
            }
        });


    });

})
