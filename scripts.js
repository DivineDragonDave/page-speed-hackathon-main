function run() {
  document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dummyjson.com/posts?limit=800")
      .then((response) => response.json())
      .then((data) => {
        displayPosts(data.posts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  });
}

function displayPosts(posts) {
  const postsContainer = document.createElement("section");
  postsContainer.classList.add("posts");
  postsContainer.setAttribute("id", "posts");
  postsContainer.innerHTML = "";
  const body = document.querySelector(".body");
  body.appendChild(postsContainer);

  const cleanPosts = posts
    .map(({ title, body, reactions, views, id }) => {
      return {
        title,
        body,
        reactions,
        views,
        id,
      };
    })
    .filter((post) => post.id < 500)
    .sort((a, b) => b.reactions.likes - a.reactions.likes);

  cleanPosts.forEach((post) => {
    createPostEntry(post, postsContainer);
  });
}

function createPostEntry(post, postsContainer) {
  const postElement = document.createElement("article");
  postElement.classList.add("post");

  const avatar = document.createElement("img");
  avatar.src = "./img/happy-mac.webp";
  avatar.alt = "Marcus";
  avatar.classList.add("avatar-image");
  postElement.appendChild(avatar);

  const postTitle = document.createElement("h2");
  postTitle.textContent = post.title;
  postElement.appendChild(postTitle);

  const postBody = document.createElement("p");
  postBody.textContent = post.body;
  postElement.appendChild(postBody);

  const postLikes = document.createElement("p");
  postLikes.textContent = `Likes: ${post.reactions.likes}`;
  postElement.appendChild(postLikes);

  const postViews = document.createElement("p");
  postViews.textContent = `Views: ${post.views}`;
  postElement.appendChild(postViews);

  postsContainer.appendChild(postElement);
}

run();
