$(document).ready( () => {
  console.log("Document Ready!")

  const $textArea = $("#tweet-text");
  
  $textArea.on("input", function() {
    const textLength = $(this).val().length;
    const $counter = $(this).siblings().children().last();
    console.log($counter);
    textLength <= 140 ? $counter[0].innerHTML = 140 - textLength : $counter[0].innerHTML = -textLength + 140;
  })

  
})