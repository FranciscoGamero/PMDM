$(document).ready(function(){

  $(document).on("click", "#AgregarFila", function () {
      $("#tabla").append("<tr><td><button class='btn-delete-row'>Eliminar Fila</button>Fila</td><td></td></tr>");
  });

  $(document).on("click", "#AgregarColumna", function () {
      $("#tabla tr").each(function() {
          $(this).append("<td>Columna</td>");
      });
  });

  $(document).on("click", ".btn-delete-row", function () {
    $(this).closest("tr").remove();
});

  $(document).on("click", "#BorrarColumna", function () {
      $("#tabla tr").each(function() {
          $(this).children().last().remove();
      });
  });
});