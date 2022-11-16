
const posts=[];

function getPosts() {
    setTimeout(() => {
       let output = '';
       posts.forEach((post) => {
            output += `<li>${post.title} created ${(Date.now()-post.createdAt)/1000}sec ago</li>`;
        });        
        document.body.innerHTML = output;
    }, 1000);
}
getPosts();


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const err = false;
            if(!err) {
                resolve();
            } else {
              reject('Error: Something Went Wrong');
            }
        }, 1000);
    }); 
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length>=0){
                resolve(posts.pop());
            } else {
                reject('Error : Array Is Empty');
            }
        }, 1000);
    });
}

    const cretdel = async () => {

    await createPost({title:'Post One', body: 'this is Post One',createdAt:Date.now()});
    getPosts();
    await createPost({title:'Post Two', body: 'this is Post Two',createdAt:Date.now()});
    getPosts();
    await createPost({title:'Post Three', body: 'this is Post Three',createdAt:Date.now()});
    getPosts();
 
    await deletePost();
    getPosts();
    await deletePost();
    getPosts();
    await deletePost();
    getPosts();
   }
    cretdel();
    
