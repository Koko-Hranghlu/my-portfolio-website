// back to top button
$('.top-btn').click(function () {
  $(window).scrollTop(0);
});

// modal
$(".mail-btn").click(function(e) {
  e.preventDefault();
  $(".modal").css("display", "grid")
});

$(".modal-close-btn").click(() => {
  $(".modal").css("display", "none")
})

// faq
$(".item__btn").click((e) => {
  const item = e.target.closest(".item");
  const item_body = $(item).find(".item__body");
  item_body.slideToggle();
});
