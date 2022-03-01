$(document).ready( () => {
  console.log("Document Ready!")

  const $textArea = $("#tweet-text");
  const $counter = $(".counter");
  
  $textArea.on("input", function() {
    const textLength = $(this).val().length;
    textLength <= 140 ? console.log(140 - textLength) : console.log(-textLength + 140);
  })

  
})