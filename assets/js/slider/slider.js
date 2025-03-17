/*  
  Edit here but MINIFY TO ANOTHER DOCUMENT slider-min.js
  import minified version to html for fast load time
*/

$(function () {
  // OWL carousel
  var t = $(".owl-carousel");
  t.owlCarousel({
    items: true,
    loop: true,
    center: true,
    autoWidth: true,
    autoplay: true,
    autoplayHoverPause: true,
  }),
    t.on("changed.owl.carousel", function (t) {
      const a = $(".owl-item")[t.item.index]?.firstChild?.getAttribute("data-hash");
      $(".tab-pane.active.show").removeClass("active show"), $(`#${a}-tab`).addClass("active show");
    });
  var a,
    o = $("#card-container");
  $(".arrow").click(function () {
    $(this).hasClass("right")
      ? ((a = o.outerWidth() / 2 + o.scrollLeft()), o.animate({ scrollLeft: a }))
      : ((a = o.outerWidth() / 2 - o.scrollLeft()), o.animate({ scrollLeft: -a }));
  });

  // custom slider
  const slider = $(".badge-card-slider");
  const slides = $(".badge-card-slider > div");
  let counter = 0;
  function restartTimeout(maxCount) {
    setInterval(function () {
      if (counter === maxCount - 1) {
        counter = 0;
        slider[0].scrollLeft = 0;
        return;
      }
      counter++;
      slider[0].scrollBy(slides.first().outerWidth(), 0); // speed
    }, 4000); // duration
  }
  restartTimeout(slides.length);
});
