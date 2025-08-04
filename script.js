$(document).ready(function () {
  function animateSections() {
    $('.section').each(function () {
      const top = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const height = $(window).height();

      if (scroll + height - 100 > top) {
        $(this).addClass('visible');
      }
    });
  }

  animateSections(); // on load
  $(window).on('scroll', animateSections);

  // Smooth scroll for nav links
  $('nav a').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
    }
  });
});
