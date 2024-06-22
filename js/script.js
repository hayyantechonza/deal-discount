$(function() {
  $(".menu_btn").click(function() {
    $(this).toggleClass('open');
  });
  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');
});

const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-start') : menu.removeClass('offcanvas offcanvas-start');
}