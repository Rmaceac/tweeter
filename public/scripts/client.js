/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/
$(document).ready(function() {

  // DRIVER CODE

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  const createTweetElement = () => {

    const tweetElement = `<article>
    <header class="tweet">
      <div class="name">
        <img src="${tweetData.user.avatars}"/>
        <strong>"${tweetData.user.name}"</strong>
      </div>
      <i class="handle">"${tweetData.user.handle}"</i>
    </header>

    <p>"${tweetData.content.text}"</p>

    <footer>
      <small>${timeago.format(tweetData.created_at)}</small>
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


  const $tweet = createTweetElement(tweetData);
  console.log("🚀 ~ file: client.js ~ line 51 ~ $tweet", $tweet);
  $("#tweets-container").append($tweet);

});
