$('.top-btn').click(function () {
  $(window).scrollTop(0);
});
// add contact modal (done)
// design the modal better
$(".mail-btn").click(function(e) {
  e.preventDefault();
  $(".modal").css("display", "block")
});

$(".modal-close-btn").click(() => {
  $(".modal").css("display", "none")
})