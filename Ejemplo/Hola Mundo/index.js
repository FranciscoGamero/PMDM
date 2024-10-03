$(document).ready(function(){

    //Selector de etiqueta
    $("h1").html("Adios Mundo");

    // Selector de ID
    $("#page-title").html("Titulo Hola mundo");

    //Selector de clase (.)
    $(".red").attr("style", "color:#FF0000");

    //Evento click
    $(document).on("click", "#btn-clear", function (){
        $("h1").html("");
    });

    $(document).on("click", "#btn-restore", function (){
        $("h1").html("Adios Mundo");
        $("#page-title").html("Titulo Hola mundo"); 
        $(".red").attr("style", "color:#FF0000");
    });

    $(document).on("click", "#add-yellow", function(){
        $("page-title").
    })
})