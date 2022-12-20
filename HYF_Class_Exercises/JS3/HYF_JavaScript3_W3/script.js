/*
const BASE_URL = `https://crudcrud.com/api/${API_KEY}`;

const createNewPostFrom = document.querySelector("#create-new-post-form");
const addPostTitleInput = document.querySelector("#add-post-title");
const addPostImgInput = document.querySelector("#add-post-img");
const addPostContentTextarea = document.querySelector("#add-post-content");
const container = document.querySelector("#blog-container");

const getBlogPosts = async () => {
  const response = await fetch(`${BASE_URL}/blog`);

  const data = await response.json();
};

const handleCreatePost = async () => {
  event.preventDefault();
  const body = {
    title: addPostTitleInput.value,
    content: addPostContentTextarea.value,
    image_url: addPostImgInput.value,
  };

  const handleDeletePost = async (postId) => {
    const response = await fetch(`${BASE_URL}/blog/${postId}`, {
      method: "DELETE",
    });

    container.removeChild(postId);
  };

  const response = await fetch(`${BASE_URL}/blog`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  container.innerHTML += createBlogPostDiv(data);

  console.log("data", data);
};
const createBlogPostDiv = (blogPost) => {
  return `<h1>${blogPost.title}</h1>
  <img src="${blogPost.image_url}" width="480px">
  <p>${blogPost.content}</p>
  <button type="button"id="deleteBtn">DELETE</button>`;
  document
    .querySelector("#deleteBtn")
    .addEventListener("click", handleDeletePost(blogPost.postId));
};
getBlogPosts();

createNewPostFrom.addEventListener("submit", (event) => {
  handleCreatePost(event);
});
*/
// configuration variables
const BASE_URI = `https://crudcrud.com/api/${API_KEY}`;

// DOM Elements
const blogContainerElement = document.getElementById("blog-container");
const newPostFormElement = document.getElementById("create-new-post-form");

// App variables
let blogPosts = [];

// Update DOM function/s
const createBlogPostElement = (blogPost) => {
  return `
       <div class="blog-post">
            <h3 class="blog-post-heading">
                ${blogPost.title}
            </h3>
            <p class="blog-post-body">
               ${blogPost.content}
            </p>
            <img alt=""
                 class="blog-post-img"
                 src="${blogPost.image_url}">
            <button class="button" onClick="handleReadPost('${blogPost._id}')">Read more</button>
            <button class="button delete" onClick="deletePost('${blogPost._id}')">Delete</button>
            <button class="button update" onClick="updatePost('${blogPost._id}')">Update</button>

        </div>
    `;
};

const updatePost = async (blogPostId) => {};

// Handle routing to single post
const handleReadPost = (blogPostId) => {
  alert("feature coming soon");
  console.log("blogPostId", blogPostId);
};

const getBlogPosts = async () => {
  // show loading?

  const response = await fetch(`${BASE_URI}/blog`);

  const data = await response.json();

  blogPosts.push(...data);

  blogPosts.forEach((blogPost) => {
    const blogPostDiv = createBlogPostElement(blogPost);

    blogContainerElement.innerHTML += blogPostDiv;
  });
};

const createBlogPost = async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageUrl = document.getElementById("image_url").value;

  const body = {
    title,
    content,
    image_url: imageUrl,
  };

  const res = await fetch(`${BASE_URI}/blog/`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  blogContainerElement.innerHTML += createBlogPostElement(data);

  // reset form
  newPostFormElement.reset();
};

const deletePost = async (blogPostId) => {
  await fetch(`${BASE_URI}/blog/${blogPostId}`, {
    method: "DELETE",
  });

  blogPosts = blogPosts.filter((blogPost) => {
    if (blogPost._id !== blogPostId) {
      return blogPost;
    }
  });

  blogContainerElement.innerHTML = "";

  blogPosts.forEach((blogPost) => {
    const blogPostDiv = createBlogPostElement(blogPost);

    blogContainerElement.innerHTML += blogPostDiv;
  });
};

getBlogPosts();

// event listeners
newPostFormElement.addEventListener("submit", (event) => createBlogPost(event));
