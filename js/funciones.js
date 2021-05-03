$(document).ready(function () {
    //ELIMINAR DE PRODUCTO
    $("tr #btnDelete").click(function () {
        var idp=$(this).parent().find("#idp").val();
//        eliminar(idp);
        swal({
            title: "Estas seguro de Eliminar el producto?",
            text: "Once deleted, Ud puede agregar de nuevo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
                    if (willDelete) {
                        eliminar(idp);
                        swal("El producto se elimino correctamente!", {
                            icon: "success",
                        }).then((willDelete)=>{
                            if (willDelete){
                                parent.location.href="Controlador?accion=Carrito";
                            }
                        });
                    } else {
                        swal("Registro no Eliminado!");
                    }
                });

    });

//CANTIDAD DE PRODUCTOS REDUCIR O AGREGAR
    $("tr #Cantidad").click(function () {
        var idp=$(this).parent().find("#idpro").val();
        var cantidad=$(this).parent().find("#Cantidad").val();
        var url = "Controlador?accion=ActualizarCantidad";
        $.ajax({
            type: 'POST',
            url: url,
            data: "idp=" + idp+"&Cantidad="+cantidad,
            success: function (data, textStatus, jqXHR) {
                location.href="Controlador?accion=Carrito";
            }
        });

    });
     /**FUNCION PARA ELIMINAR PRODUCTO**/
    function eliminar(idp) {
        var url = "Controlador?accion=Delete";
        $.ajax({
            type: 'POST',
            url: url,
            data: "idp=" + idp,
            success: function (data, textStatus, jqXHR) {
//                alert("Registro Eliminado!");
//                location.href="Controlador?accion=Carrito";
            }
        });
    }
    /**FUNCION PARA GENERAR LA IMPRESION DE UNA HOJA**/
    function imprimir(idp) {
	window.print(idp);
    }
});

