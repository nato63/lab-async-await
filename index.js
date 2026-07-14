// Write your code here!
// Function to display posts on the page
function displayPosts(posts) {
  // Get the ul element with id 'post-list'
  const postList = document.getElementById('post-list');
  
  // Loop through each post in the array
  for (let i = 0; i < posts.length; i++) {
    // Create li element
    const li = document.createElement('li');
    
    // Create h1 element for the title
    const h1 = document.createElement('h1');
    h1.textContent = posts[i].title;
    
    // Create p element for the body
    const p = document.createElement('p');
    p.textContent = posts[i].body;
    
    // Append h1 and p to li
    li.appendChild(h1);
    li.appendChild(p);
    
    // Append li to the ul
    postList.appendChild(li);
  }
}

// Async function to fetch posts from the API
async function fetchPosts() {
  try {
    // Fetch data from the API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // Parse the response as JSON
    const posts = await response.json();
    
    // Call displayPosts with the fetched data
    displayPosts(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the async function to fetch and display posts
fetchPosts();