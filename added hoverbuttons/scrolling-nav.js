(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

})(jQuery); // End of use strict



const ref = [


  "<h2>Hofer Biatorbágy Raktárbázis építése: </h2><table><tr><th>Térkő építés</th><th>5.000 m2</th></tr><tr><th>Kiemelt szegély építése</th><th>3.000 fm</th></tr><tr><th>Járdaépítés</th><th>800 m2</th></tr><tr><th>Zöldterület rendezés</th><th>10.4000 m2</th></tr></table><br/><i>Magyar Aszfalt Kft. 2007 . </i>"
  ,
  "<h2>Budapest XII. kerület Kútvölgyi út felújítási munkái:  </h2><table><tr><th>Kiemelt szegély bontása és építése hasított szegélykőből</th><th>2.500 fm</th></tr><tr><th>Közműszerelvények és akna fedlapok szintbe helyezése</th><th>280 db</th></tr></table><br/><i>Magyar Aszfalt Kft. 2007 . </i>"

  ,
  "<h2>Budapest XII. kerület Ráth György utca útfelújítási munkái:  </h2><table><tr><th>Kiemelt szegély bontása és építése hasított szegélykőből </th><th>1.500 fm</th></tr><tr><th>Közműszerelvények helyezése</th><th>60 db</th></tr></table><br/><i>Magyar Aszfalt Kft. 2007 . </i>"
  ,
  "<h2>Budaörs Árok, Pipacs és Patkó utca munkái: </h2><table><tr><th>Térkövezés</th><th>5.200 m2 </th></tr><tr><th>Szegélykőépítés</th><th>4.700 fm </th></tr><tr><th>Földmunka</th><th>2.800 m3</th></tr><tr><th>Fagyvédő réteg építése</th><th>2.200 m3</th></tr><tr><th>Ckt beton bedolgozás</th><th>1.850 m3</th></tr></table><br/><i>Magyar Aszfalt Kft. 2008 . </i>"
  ,

  "<h2>1108 j. út Szentendre- Üröm között 3+109- 4+840 közötti szakasz munkái: </h2><table><tr><th>Bontási munkák</th><th>2.500 m3 </th></tr><tr><th>Szegélykőépítés</th><th>3.200 fm</th></tr><tr><th>Fagyvédő réteg építése</th><th>750 m3</th></tr><tr><th>Ckt beton bedolgozás</th><th> 600 m3</th></tr><tr><th>Fagyvédő réteg építése</th><th>2.200 m3</th></tr><tr><th>Ckt beton bedolgozás</th><th>1.850 m3</th></tr></table><br/><i>Magyar Aszfalt Kft. 2008 . </i>"
]

const body = document.querySelector('body');



let hoverbuttons = document.getElementById("hoverbuttons");
let text = document.getElementById("text");


for (let i = 0; i < ref.length; i++) {
  const button = document.createElement('button');
  button.setAttribute("id", "button" + i)
  button.setAttribute("class", "shadow-sm")
  button.addEventListener("mouseenter", event => {
      text.innerHTML = ref[i]
  })

  hoverbuttons.appendChild(button);

}



