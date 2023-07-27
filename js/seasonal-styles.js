$(document).ready(function () {
  $('.seasons a').click(function (e) {
    e.preventDefault();
    let season = $(this).attr("href");
    season = season.toLowerCase();

    switch (season) {
      case "spring":
        $("html").css("background-color", "#2B7129");
        $("#slogan").text("Spring into our Spring wear!");
        $("#wear").attr("src", "images/spring-wear.jpg");
        $("#logo").attr("src", "images/spring.gif");
        break;

      case "summer":
        $("html").css("background-color", "#EBA52B");
        $("#slogan").text("Summer fits!");
        $("#wear").attr("src", "images/summer-wear.jpg");
        $("#logo").attr("src", "images/summer.gif");
        break;

      case "winter":
        $("html").css("background-color", "#005393");
        $("#slogan").text("Walk into Winter wear!");
        $("#wear").attr("src", "images/winter-wear.jpg");
        $("#logo").attr("src", "images/winter.gif");
        break;

      case "fall":
        $("html").css("background-color", "#A81124");
        $("#slogan").text("Fall into the best fit!");
        $("#wear").attr("src", "images/fall-wear.jpg");
        $("#logo").attr("src", "images/fall.gif");
        break;
    }
  });
});
