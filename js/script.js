$(function() {
  $(".menu_btn").click(function() {
    $(this).toggleClass('open');
  });

  setTimeout(() => {
    $("#menu").show();
  }, 100);

  $(window).resize(function() {
    convertToOffcanvas();
  }).trigger('resize');

  printAlphabets();

  // $("#coupon").modal("show");

  $(".copy_wrapper .btn").click(function() {
    var couponCode = $('.copy_wrapper input').val();
    var $button = $(this);

    navigator.clipboard.writeText(couponCode).then(function() {
      $button.text('Code Copied!');
      setTimeout(function() {
        $button.text('Copy Code');
      }, 3000);
    }).catch(function(err) {
      console.error('Could not copy text: ', err);
    });
  });

});


const convertToOffcanvas = () => {
  const menu = $("#menu");
  $(window).width() < 992 ? $("#menu").hide() : $("#menu").show();

  setTimeout(() => {
    $("#menu").show();
  }, 100);
  $(window).width() < 992 ? menu.addClass('offcanvas offcanvas-start') : menu.removeClass('offcanvas offcanvas-start');
}

const printAlphabets = () => {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0-9"];
  alphabet.forEach(function(el, index) {
    $(".alphabets").append(`<a class="btn alphabet" href="#store-${el}"><span>${el}</span></a>`);
    $(".all_stores").append(`
      <section class="store_a ${index % 2 == 0 ? "bg-light" : ""}" id="store-${el}" data-aos="fade-up">
        <div class="container-xl">
          <div class="row gy-4 align-items-center">
            <div class="col-lg-12 d-flex align-items-center justify-content-between">
              <h4 class="heading">Store Form ${el}</h4>
              <a href="#" class="btn btn-secondary pills">see all store ${el}</a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_1.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Design & Development</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_2.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Content Writing & Affiliate</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_3.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Media & Digital Advertising</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_4.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">SEO & Social Marketing</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_5.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Pay-Per-Click Marketing</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_6.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Search Engine Optimization</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_7.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Email Marketing Services</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_8.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Social Media Management</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_9.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Graphic Design Services</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_10.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">E-commerce Solutions</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_7.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Email Marketing Services</h5>
              </a>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-4 col-6">
              <a href="single_store.html" class="store_card">
                <figure class="store_img">
                  <img src="images/stores/store_1.webp" alt="Icon">
                </figure>
                <div class="offers">
                  <span>Offers 12</span>
                </div>
                <h5 class="store_title webkit_box">Design & Development</h5>
              </a>
            </div>
          </div>
        </div>
      </section>
    `)
  });

  $('.alphabet').first().addClass("active");
}