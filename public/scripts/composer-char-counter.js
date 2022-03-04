$(document).ready( () => {

  const $textArea = $("#tweet-text");
  
  $textArea.on("input", function() {
    const textLength = $(this).val().length;
    /* Compass specifically asked that we find $counter using traversal
    instead of a selector. I've left this syntax in for that reason. */
    const $counter = $(this).siblings().children().last();
    if (textLength < 140) {
      $counter[0].innerHTML = 140 - textLength;
      $($counter).removeClass("red");
    } else if (textLength >= 140) {
      $counter[0].innerHTML = -textLength + 140;
      $($counter).addClass("red");
    }
  });

});