document.addEventListener("DOMContentLoaded", function () {
  const POSTS_URL = "https://dummyjson.com/posts?limit=500";
  const USERS_URL = "https://dummyjson.com/users";
  const COMMENTS_URL = "https://dummyjson.com/comments";
  const POSTS_LIMIT = 500;

  const logData = (label, data, style) => {
    console.log(`%c${label}`, style);
    console.log(data);
  };

  const fetchData = (url, label, style) =>
    fetch(url)
      .then((response) => response.json())
      .then((data) => logData(label, data, style))
      .catch((error) =>
        console.error(`Error fetching ${label.toLowerCase()}:`, error)
      );

  fetch(POSTS_URL)
    .then((response) => response.json())
    .then((data) => {
      displayPosts(data.posts);
      logData("POSTS", data.posts, "color: red;");
    })
    .catch((error) => console.error("Error fetching posts:", error));

  fetchData(COMMENTS_URL, "COMMENTS", "background: #222; color: #d23a8b");
  fetchData(USERS_URL, "USERS", "background: #222; color: #bada55");
});

function displayPosts(posts) {
  const postsContainer = document.querySelector("#posts");
  postsContainer.innerHTML = "";

  const cleanPosts = posts
    .map(({ title, body, reactions, views, id }) => ({
      title,
      body,
      reactions,
      views,
      id,
    }))
    .filter((post) => post.id < 500)
    .sort((a, b) => b.reactions.likes - a.reactions.likes);

  cleanPosts.forEach((post) => createPostEntry(post, postsContainer));
}

function createPostEntry(post, postsContainer) {
  const postElement = document.createElement("article");
  postElement.classList.add("post");

  postElement.innerHTML = `
    <img src="./img/happy-mac.webp" alt="Marcus" class="avatar-image" />
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <p>Likes: ${post.reactions.likes}</p>
    <p>Views: ${post.views}</p>
  `;

  postsContainer.appendChild(postElement);
}
