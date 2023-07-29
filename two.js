// user data
const db = {
    posts: [],
    user: {
      lastActivityTime: null,
    },
  };
  
  // Function to create a post 
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.posts.push(post);
        resolve(post);
      }, 1000); // 
    });
  }
  
  // Function to update last user activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.user.lastActivityTime = new Date();
        resolve();
      }, 1000); 
    });
  }
  
  // Function to delete the last post
  function deleteLastPost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.posts.pop();
        resolve();
      }, 1000); 
    });
  }
  
  // Main function that creates a post and updates user activity time (using async/await)
  async function createPostAndUpdateActivity(post) {
    await Promise.all([createPost(post), updateLastUserActivityTime()]);
  }
  
  // Function to get all posts and last user activity time (using async/await)
  async function getAllPostsAndActivity() {
    return Promise.all([db.posts, db.user.lastActivityTime]);
  }
  
  // Example usage with async/await:
  async function main() {
    try {
      await createPostAndUpdateActivity({ title: 'Post 1', content: 'Content of post 1' });
  
      const [posts, lastActivityTime] = await getAllPostsAndActivity();
      console.log('Posts:', posts);
      console.log('Last Activity Time:', lastActivityTime);
  
      await deleteLastPost();
  
      const [newPosts, updatedLastActivityTime] = await getAllPostsAndActivity();
      console.log('New set of Posts:', newPosts);
      console.log('Last Activity Time after post deletion:', updatedLastActivityTime);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  main();
  