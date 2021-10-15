function guardar(){
    console.log("ejecutando funcion para guardar");

    let gato = {
        id: +$("#id").val(),
        nombre: $("#nombre").val(),
        edad: +$("#edad").val(),
        color: $("#color").val()
    };

    console.log(gato);

    $.ajax({
        url: "https://g142e26c7fbb1b8-animalitos.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/animales/gatos",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(gato),
        statusCode:{
            201:function(){
                alert('Se ha registrado el gato');
            }
        },
    });

}