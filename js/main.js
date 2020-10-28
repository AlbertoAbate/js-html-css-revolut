$(document).ready(function() {

  var dropLinks = $(".with-dropdown > a");
  var dropMenu = $(".with-dropdown > dropdown-menu");

  dropLinks.click( function(){

    var actualMenu = $(this).next(".dropdown-menu")

    dropMenu.not(actualMenu).hide();

    actualMenu.toggle();

    // $(this).next(".dropdown-menu").toggle();

  });




}); //fine document
