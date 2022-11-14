// Obsługa menu
$("nav a").on("click", function() {
  const goToSection = "#" + $(this).attr("class");

  // console.log(typeof goToSection);
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top - 50
  });
});

function changeMenu() {
  const scrollValue = $(window).scrollTop();
  console.log("działa");
  const heightS2 = $(".s2").offset().top;
  const heightS3 = $(".s3").offset().top;
  const heightS4 = $(".s4").offset().top;

  // console.log(scrollValue, heightS2, heightS3);

  // $('nav li').removeClass('active');

  if (scrollValue < heightS2 - 55) {
    $("nav a")
      .not(".me")
      .removeClass("iam");
    $(".me").addClass("iam");
  } else if (scrollValue < heightS3 - 55) {
    $("nav a")
      .not(".offer")
      .removeClass("iam");
    $(".offer").addClass("iam");
  } else if (scrollValue < heightS4 - 55) {
    $("nav a")
      .not(".portfolio")
      .removeClass("iam");
    $(".portfolio").addClass("iam");
  } else {
    $("nav a")
      .not(".contact")
      .removeClass("iam");
    $(".contact").addClass("iam");
  }
}
$(window).on("scroll", changeMenu);
