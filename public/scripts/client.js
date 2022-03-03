/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
$(document).ready(function() {

  $(".input-area").submit(function(event) {
    event.preventDefault();
    const inputValue = this.text.value;
    if (inputValue === "") {
      alert("You cannot submit an empty tweet!");
      return;
    }
    if (inputValue.length > 140) {
      alert("Your tweet has too many characters!");
      return;
    }

    const serializedForm = $(this).serialize();
    $.post("/tweets", serializedForm, (response) => {
      console.log("Success", response);
      loadTweets();
    });

  });
  
  const loadTweets = function() {
    $.get("tweets",  { method: "GET" }, (response) => {
      console.log("Tweet posted");
      return renderTweets(response);
    });
  };
  
  // $.ajax("/tweets", { method: 'GET' })
  // .then(function (morePostsHtml) {
  // console.log('Success: ', morePostsHtml);
  //   $button.replaceWith(morePostsHtml);
    
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

  const createTweetElement = (tweet) => {

    const tweetElement = `<article>
    <header class="tweet">
      <div class="name">
        <img src="${tweet.user.avatars}"/>
        <strong>"${tweet.user.name}"</strong>
      </div>
      <i class="handle">${tweet.user.handle}</i>
    </header>

    <p>"${tweet.content.text}"</p>

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
