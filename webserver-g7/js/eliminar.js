function eliminar(identificador){
  console.log("ejecutando función para eliminar");

  let gato= {
    id: +identificador
  };
  console.log(gato);

    $.ajax({
        url: "https://g142e26c7fbb1b8-animalitos.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/animales/gatos",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(gato),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el gato');
            }
        },
    });
}
