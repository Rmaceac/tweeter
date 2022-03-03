/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {
  
  $(".error").hide();

  $(".input-area").submit(function(event) {
    event.preventDefault();
    let inputValue = this.text.value;
    
    if (inputValue === "") {
      $("#error-msg").text("You cannot submit an empty tweet!");
      $(".error").show(300);
      return;
    } else if (inputValue.length > 140) {
      $("#error-msg").text("Your tweet has too many characters!");
      $(".error").show(300);
      return;
    }

    $(".error").hide(300);
    
    
    const serializedForm = $(this).serialize();
    $.post("/tweets", serializedForm, (response) => {
      console.log("Successful post", response);
      $("#tweet-text").val('');
      loadTweets();
    });

  });
  
  const loadTweets = function() {
    $.get("tweets",  { method: "GET" }, (response) => {
      console.log("Tweet posted");
      return renderTweets(response);
    });
  };
    
  loadTweets();

  // DRIVER CODE

  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ];

  // for escaping problematic user input
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (tweet) => {

    const safeHTML = `<p>${escape(tweet.content.text)}</p>`;

    const tweetElement = `<article>
    <header class="tweet">
      <div class="name">
        <img src="${tweet.user.avatars}"/>
        <strong>"${tweet.user.name}"</strong>
      </div>
      <i class="handle">${tweet.user.handle}</i>
    </header>

    ${safeHTML}

    <footer>
      <small>${timeago.format(tweet.created_at)}</small>
      <div class="social-icons">
        <figure>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </figure>
      </div>
    </footer>
    </article>`;

    return tweetElement;

  };

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      const newTweet = createTweetElement(tweet);
      $("#tweets-container").prepend(newTweet);
    }

  };

});
