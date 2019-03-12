var menuHeight = undefined;
function setMenuHeight(){
  menuHeight = $("#menu").height();
  if(menuHeight === undefined){
    window.setTimeout(function(){setMenuHeight();}, 200);
  }
}
function setMenuClick() {
  $(".nav-link").on("click", function(){
    if($(window).width() < 600) {
      toggleMenu();
    }
  });
}
function handleScroll(){
  var y = ($(window).scrollTop()/95);
  $("[data-behavior~=\"parallax-bg\"]").css("background-position-y", y + "px");
}
function toggleMenu(){
  $("#menu-toggler").click();
}
$(document).ready(function(){
  setMenuHeight();
  $(window).on("scroll", function(){
    handleScroll();
  });
  setMenuClick();
});