$(document).on("click", ".bi-sun", function () {
    $("body").addClass("bg-dark");
    $(".navbar").addClass("bg-light");
    $(".navbar").removeClass("bg-dark");
    $(".bi-sun").removeClass("bi-sun");
    $(".bi").addClass("bi-moon");
    $("h1").addClass("text-white")
    $("h1").removeClass("text-dark")
  });

  $(document).on("click", ".bi-moon", function () {
    $("body").removeClass("bg-dark");
    $(".navbar").removeClass("bg-light");
    $(".navbar").addClass("bg-dark");
    $(".bi-moon").removeClass("bi-moon");
    $(".bi").addClass("bi-sun");
    $("h1").removeClass("text-white")
    $("h1").addClass("text-dark")
  });