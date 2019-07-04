$(document).ready(function() {

  // slider
  var prevBtn = $('#prevBtn');
  var nextBtn = $('#nextBtn');
  var list = $('#list');
  var carouselTrackWidth = $('.carousel__track').width() + 30;

  var itemWidth = 300;
  var currentLeftValue = 0;
  var itemCount = list.width();
  var minOffset = - itemCount;
  var maxOffset = 0;

  prevBtn.on('click', function () {
    if (currentLeftValue != maxOffset) {
      currentLeftValue += 300;
      carouselTrackWidth = $('.carousel__track').width() + 30;
      list.animate({ left : currentLeftValue + "px"}, 500);
    }
  });

  nextBtn.on('click', function () {
    if (minOffset < -carouselTrackWidth) {
      currentLeftValue -= 300;
      list.animate({ left : currentLeftValue + "px"}, 500);
      carouselTrackWidth += 300;
      }
  });
  // slider-end


  var burger = $('.header__burger');
  var menuList = $('.header__nav');
  var body = $('body');

  burger.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(menuList).toggleClass('active');
    $(body).toggleClass('menu-opened');
  });

});
