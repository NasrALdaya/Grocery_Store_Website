// Header Script Start //

// Show Search Start //
let search_form = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = () => {
    shopping_cart.classList.remove("active");
    login_form.classList.remove("active");
    navbar.classList.remove("active");

    search_form.classList.toggle("active");
}
// Show Search End //


// Show Cart Start //
let shopping_cart = document.querySelector(".header .shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
    search_form.classList.remove("active");
    login_form.classList.remove("active");
    navbar.classList.remove("active");

    shopping_cart.classList.toggle("active");
}
// Show Cart End //


// Show Login Start //
let login_form = document.querySelector(".header .login-form");

document.querySelector("#login-btn").onclick = () => {
    search_form.classList.remove("active");
    shopping_cart.classList.remove("active");
    navbar.classList.remove("active");

    login_form.classList.toggle("active");
}
// Show login End //

// Show Navbar Start //
let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
    search_form.classList.remove("active");
    shopping_cart.classList.remove("active");
    login_form.classList.remove("active");

    navbar.classList.toggle("active");
}
// Show Navbar End //

// Remove All when window scroll
window.onscroll = () => {
    search_form.classList.remove("active");
    shopping_cart.classList.remove("active");
    login_form.classList.remove("active");
    navbar.classList.remove("active");
}

// Header Script End //


// Swiperjs //
var swiper = new Swiper(".product-slider", {
    loop: true,
    slidesPerView: 20,
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,
    slidesPerView: 20,
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
// Swiperjs //
