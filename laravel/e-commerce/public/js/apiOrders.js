let table = new DataTable('#tblOrders');

$(document).ready(function () {

    var selectOptions = [
        { text: 'All', value: '' },
        { text: 'Approved', value: 'approved' },
        { text: 'Not Approved', value: 'not%20approved' }
    ];

    $('#selectStatus').select2({
        width: '50%'
    });

    for (var i = 0; i < selectOptions.length; i++) {
        var option = new Option(selectOptions[i].text, selectOptions[i].value);
        $('#selectStatus').append(option);
    }

    $('#btnSend').on('click', function () {
        let selected = $('#selectStatus').select2('data');

        api = "http://127.0.0.1:3000/api/v1/orders/" + selected[0].id;

        $.ajax({
            dataType: 'json',
            url: api,
            type: 'GET',
            success: function (response) {
                table.clear().destroy();
                orders = response;
                $.each(orders, function (i) {
                    $('#tblOrders tbody').append(`
            <tr>
                <td>
                    ${orders[i].order_no}
                </td>
                <td>
                    ${orders[i].product_name}
                </td>
                <td>
                    ${orders[i].created_at}
                </td>
                <td>
                    ${orders[i].price}
                </td>
                <td>
                    ${orders[i].status}
                </td>
       </tr>`);
                });
                table = new DataTable('#tblOrders', {
                    footerCallback: function (row, data, start, end, display) {
                        let api = this.api();

                        let intVal = function (i) {
                            return typeof i === 'string'
                                ? i.replace(/[\$,]/g, '') * 1
                                : typeof i === 'number'
                                    ? i
                                    : 0;
                        };

                        let total = 0;
                        let pageTotal = 0;

                        api.column(3, { search: 'applied' }).data().each(function (value, index) {
                            let column4Value = api.column(4, { search: 'applied' }).data()[index]; // Obtener el valor de la columna 4 correspondiente

                            if (column4Value === 'approved') {
                                total += intVal(value);
                            }
                        });

                        api.column(3, { page: 'current' }).data().each(function (value, index) {
                            let info = api.page.info();
                            let displayedIndex = index + info.start; // Calcular el índice mostrado en la página actual
                            let column4Value = api.column(4, { search: 'applied' }).data()[displayedIndex]; // Obtener el valor de la columna 4 correspondiente

                            if (column4Value === 'approved') {
                                pageTotal += intVal(value);
                            }
                        });

                        api.column(3).footer().innerHTML =
                            'Total de la pagina: $' + pageTotal.toFixed(2) + ' ( Total: $' + total.toFixed(2) + ').';
                    }
                });
            },
            error: function () {
                console.log('error');
            }
        });


    });

})
