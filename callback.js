/*const posts=[
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post two'}

];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;

        });
        document.body.innerHTML=output;


        
        

    },1000);
}
function createPosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error=false;
            if(!error){
                resolve()

            }
            else{
                reject('error:something went worng');
            }
            
    
        },2000);

    });
    
}
//createPosts({title:'Post Three',body:'This is post three'}).then(getPosts);


//Promis.all
const promise1=Promise.resolve('Hello World');
const promise2=10;
const promise3 =new Promise((resolve,reject)=>
    setTimeout(resolve,2000,'goodbye'));


Promise.all([promise1,promise2,promise3]).then((values)=>console.log(values));
*/
//simulating a database to stire posts and user data
const db={
    posts:[],
    user:{
        lastActivityTime:null,
    },
};
//fucntion to create post
function createPost(post){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            db.posts.push(post);
            resolve(post);
        },1000);
    });
}
//
// Function to delete the last post
function deleteLastPost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        db.posts.pop();
        resolve();
      }, 1000); // Simulating a delay of 1 second for post deletion
    });
  }
//fucntion to upadate user activity time
function upadateLastUserActivityTime(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            db.user.lastActivityTime=new Date();
            resolve();
        },1000);
    });
}
//main fucntion that creates the post and update user activity time
function createPostAndUpdateActivity(post){
    return Promise.all([createPost(post),upadateLastUserActivityTime()]);

}
//fucntion to get all posts and last user activity time
function getAllPostsAndActivity(){
    return Promise.all([db.posts,db.user.lastActivityTime]);
}


createPostAndUpdateActivity({ title: 'Post 1', content: 'Content of post 1' })
  .then(() => getAllPostsAndActivity())
  .then(([posts, lastActivityTime]) => {
    console.log('Posts:', posts);
    console.log('Last Activity Time:', lastActivityTime);

    return deleteLastPost();
  })
  .then(() => getAllPostsAndActivity())
  .then(([posts, lastActivityTime]) => {
    console.log('New set of Posts:', posts);
    console.log('Last Activity Time after post deletion:', lastActivityTime);
  })
  .catch((error) => {
    console.error('Error:', error);
  });





