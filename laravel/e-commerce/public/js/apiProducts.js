
let table = new DataTable('#tblProducts');

$(document).ready(function () {

    $('#selectCategories').select2({
        width: '50%',
        ajax: {
          url: 'http://127.0.0.1:8000/api/categories',
          dataType: 'json'
        }
      }); 

    $('#btnSend').on('click', function () {
        let selected = $('#selectCategories').select2('data');
        
        let api = "http://127.0.0.1:8000/api/products";
        if (selected.length > 0){
            api = "http://127.0.0.1:8000/api/products?category="+selected[0].id;
        }

        $.ajax({
            dataType: 'json',
            url: api,
            type: 'GET',
            success: function (response) {
                table.clear().destroy();
                products = response;
                $.each(products, function (i) {
                    $('#tblProducts tbody').append(`
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
       </tr>`);
                });
                table = new DataTable('#tblProducts');
            },
            error: function () {
                console.log('error');
            }
        });


    });

})
