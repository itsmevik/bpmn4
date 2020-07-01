$(document).ready(function() {
  // For sliding
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });
  // For toggle menu

  $(".toggle-menu").click(function() {
    $("html").toggleClass("hidden-class");
    $(this).toggleClass("show");
    $(".side-menu").toggleClass("open");
  });
  $(".close-icon").click(function() {
    $("html").removeClass("hidden-class");
    $(".toggle-menu").removeClass("show");
    $(".side-menu").removeClass("open");
  });
  // For close the div after press the esc key
  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      $("html").removeClass("hidden-class");
      $(".toggle-menu, .close-icon").removeClass("show");
      $(".side-menu").removeClass("open");
    }
  });
  // For masonry script
  // $(function() {
  //   var m = new Masonry($(".grid").get()[0], {
  //     itemSelector: ".grid-item"
  //   });
  // });
  $(".carousel").carousel({
    interval: 2000,
    pause: "false"
  });

  // For header scroll bg
  var scrollValue = $(document).scrollTop();
  $(window).scroll(function() {
    var currentScroll = $(document).scrollTop();
    if ($(window).innerWidth() >= 0) {
      if (
        $("header.site-header .header-inner").css("transform") == undefined ||
        $("header.site-header .header-inner").css("transform") == "none" ||
        $("header.site-header .header-inner").css("transform") == null
      ) {
        $("header.site-header .header-inner").css({
          transform: "translate3d(0px,0px,0px)",
          "-webkit-transform": "translate3d(0px,0px,0px)",
          "-moz-transform": "translate3d(0px,0px,0px)",
          "-ms-transform": "translate3d(0px,0px,0px)",
          "-o-transform": "translate3d(0px,0px,0px)",
          position: "absolute"
        });
      }
      $("header.site-header .header-inner").css({
        "will-change": "transform"
      });
      if ($(document).scrollTop() <= 0) {
        $("header.site-header .header-inner").css({
          transform: "translate3d(0px,0px,0px)",
          "-webkit-transform": "translate3d(0px,0px,0px)",
          "-moz-transform": "translate3d(0px,0px,0px)",
          "-ms-transform": "translate3d(0px,0px,0px)",
          "-o-transform": "translate3d(0px,0px,0px)",
          position: "absolute"
        });
      } else {
        if (GetIEVersion() == 11) {
          var ie_purpose = $("header.site-header .header-inner")
            .css("transform")
            .split("(")[1]
            .split(",")[13];
        } else if (GetIEVersion() == 10) {
          var ie_purpose = $("header.site-header .header-inner")
            .css("transform")
            .split("(")[1]
            .split(",")[13];
        } else {
          var ie_purpose = $("header.site-header .header-inner")
            .css("transform")
            .split("(")[1]
            .split(",")[5];
        }

        if (parseFloat(ie_purpose) - (currentScroll - scrollValue) > 0) {
          $("header.site-header .header-inner").css({
            transform: "translate3d(0px,0px,0px)",
            "-webkit-transform": "translate3d(0px,0px,0px)",
            "-moz-transform": "translate3d(0px,0px,0px)",
            "-ms-transform": "translate3d(0px,0px,0px)",
            "-o-transform": "translate3d(0px,0px,0px)",
            position: "fixed"
          });
        } else if (
          parseFloat(ie_purpose) - (currentScroll - scrollValue) <
          -180
        ) {
          $("header.site-header .header-inner").css({
            transform: "translate3d(0px,-180px,0px)",
            "-webkit-transform": "translate3d(0px,-180px,0px)",
            "-moz-transform": "translate3d(0px,-180px,0px)",
            "-ms-transform": "translate3d(0px,-180px,0px)",
            "-o-transform": "translate3d(0px,-180px,0px)",
            position: "fixed"
          });
        } else {
          if (GetIEVersion() == 11) {
            var chage =
              parseFloat(
                $("header.site-header .header-inner")
                  .css("transform")
                  .split("(")[1]
                  .split(",")[13]
              ) -
              (currentScroll - scrollValue) +
              "px";
          } else if (GetIEVersion() == 10) {
            var chage =
              parseFloat(
                $("header.site-header .header-inner")
                  .css("transform")
                  .split("(")[1]
                  .split(",")[13]
              ) -
              (currentScroll - scrollValue) +
              "px";
          } else {
            var chage =
              parseFloat(
                $("header.site-header .header-inner")
                  .css("transform")
                  .split("(")[1]
                  .split(",")[5]
              ) -
              (currentScroll - scrollValue) +
              "px";
          }
          $("header.site-header .header-inner").css({
            transform: "translate3d(0px," + chage + ",0px)",
            "-webkit-transform": "translate3d(0px," + chage + ",0px)",
            "-moz-transform": "translate3d(0px," + chage + ",0px)",
            "-ms-transform": "translate3d(0px," + chage + ",0px)",
            "-o-transform": "translate3d(0px," + chage + ",0px)",
            position: "fixed"
          });
        }
      }
    } else {
      if ($(document).scrollTop() <= 0) {
        $("header.site-header .header-inner").removeClass("sticky-menu");
      } else {
        if (currentScroll - scrollValue < 0) {
          $("header.site-header .header-inner").removeClass("sticky-menu");
        } else {
          $("header.site-header .header-inner").addClass("sticky-menu");
        }
      }
    }
    scrollValue = currentScroll;
    function GetIEVersion() {
      var sAgent = window.navigator.userAgent;
      var Idx = sAgent.indexOf("MSIE");

      // If IE, return version number.
      if (Idx > 0)
        return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
      // If IE 11 then look for Updated user agent string.
      else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;
      else if (!!navigator.userAgent.match(/Trident\/7\./)) return 10;
      else return 0; //It is not IE
    }
    $(document).ready(function(e) {
      if (/MSIE 10/i.test(navigator.userAgent)) {
        $("html,body").addClass("ie10");
      }
      if (navigator.userAgent.match(/Trident.*rv:11\./)) {
        $("html,body").addClass("ie11");
      }
      if (/Edge\/\d./i.test(navigator.userAgent)) {
        // This is Microsoft Edge
        $("html,body").addClass("ieedge");
      }
    });
    // Resize Header on scroll
    var head = $(".header-inner");
    $(window).on("scroll", function() {
      head.toggleClass("header-small", $(this).scrollTop() >= 100);
    });
  });

  $(function() {
    $("#accordion > li").hover(
      function() {
        var $this = $(this);
        $this.stop().addClass("selected");
        $(".heading", $this)
          .stop(true, true)
          .fadeOut();
        $(".bgDescription", $this)
          .stop(true, true)
          .slideDown(500);
        $(".description", $this)
          .stop(true, true)
          .fadeIn(1500);
        $("#accordion .bg").addClass("on");
        $("#accordion .bg").removeClass("set-on");
        // $("#accordion .bg").addClass("set-on");
      },
      function() {
        var $this = $(this);
        $this.stop().removeClass("selected");
        $("#accordion .on").addClass("set-on");
        $(".heading", $this)
          .stop(true, true)
          .fadeIn();
        $(".description", $this)
          .stop(true, true)
          .fadeOut(100);
        $(".bgDescription", $this)
          .stop(true, true)
          .slideUp(700);
        //$("#accordion > .bg").addClass("on");
      }
    );
  });
  $(window).resize(function() {
    $(function() {
      $("#accordion > li").hover(
        function() {
          var $this = $(this);
          $this.stop().addClass("selected");
          $(".heading", $this)
            .stop(true, true)
            .fadeOut();
          $(".bgDescription", $this)
            .stop(true, true)
            .slideDown(500);
          $(".description", $this)
            .stop(true, true)
            .fadeIn(1500);
          $("#accordion .bg").addClass("on");
          $("#accordion .bg").removeClass("set-on");
          // $("#accordion .bg").addClass("set-on");
        },
        function() {
          var $this = $(this);
          $this.stop().removeClass("selected");
          $("#accordion .on").addClass("set-on");
          $(".heading", $this)
            .stop(true, true)
            .fadeIn();
          $(".description", $this)
            .stop(true, true)
            .fadeOut(100);
          $(".bgDescription", $this)
            .stop(true, true)
            .slideUp(700);
          //$("#accordion > .bg").addClass("on");
        }
      );
    });
  });
});
