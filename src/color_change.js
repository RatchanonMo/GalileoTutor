componentDidMount = () => {
    $(window).scroll(function () {
      /* get current scroll-position within window */
      var scroll = $(window).scrollTop();

      $(".mainLeft li a").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackText");
          $(this).addClass("blackDecorated");
        } else {
          $(this).removeClass("blackText");
          $(this).removeClass("blackDecorated");
        }
      });
      $(".mainLeft").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackBorder");
        } else {
          $(this).removeClass("blackBorder");
        }
      });

      $(".logo").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackText");
        } else {
          $(this).removeClass("blackText");
        }
      });
      $("nav a").each(function () {
        var elementPositionTop =
          parseFloat($(this).offset().top) + parseFloat($(this).height() / 2);

        /* change color for each background-change */
        if (
          (elementPositionTop >= 3000 && elementPositionTop <= 4550) ||
          (elementPositionTop >= 5500 && elementPositionTop <= 6450)
        ) {
          $(this).addClass("blackText");
        } else {
          $(this).removeClass("blackText");
        }
      });
    });
  };