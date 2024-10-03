$(document).ready(function(){
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/1", //url a la que invoquemos
        method: "GET",
    }).done(function(data){
        debugger;
        var json = JSON.parse(data)
        //JSON.parse toma como entrada el texto en JSON 
        //que me llega del servidor y lo convierte en un objeto
        debugger;
        //Lo que se programa dentro de esta funcion será 
        //ejecutado cuando se haya resuelto la petición asíncrona
        //Es decir cuando me llegue la respuesta del servidor

    });

    
});

