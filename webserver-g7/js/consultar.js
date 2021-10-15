function consultar(){
    $.ajax({
        url: "https://g142e26c7fbb1b8-animalitos.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/animales/gatos",
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta.items);
            mostrarRespuesta(respuesta.items);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function mostrarRespuesta(items){
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>EDAD</th>
                    <th>COLOR</th>
                    <th>ACCIONES</th>
                  </tr>`;


    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].id}</td>
                   <td>${items[i].nombre}</td>
                   <td>${items[i].edad}</td>
                   <td>${items[i].color}</td>
                   <td>
                   <button onclick="eliminar(${items[i].id})">Eliminar</button>
                   <a href="detalle.html?id=${items[i].id}">Editar</a>
                   </td>
                </tr>`;
    }
    tabla +=`</table>`;

    $("#tabla").html(tabla);
}
