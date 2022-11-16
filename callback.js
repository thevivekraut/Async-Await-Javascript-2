// let element = document.getElementById("total");
// let timerElement  = document.getElementById("timer");


const posts=[
    {title:"Post One", body:"This is post one",createdAt:Date.now()},
    {title:"Post two", body:"This is post two",createdAt:Date.now()}
];

function getPosts(){
    setTimeout(() => {
       let output = "";
       posts.forEach((post)=>{
            output += `<li>${post.title} created ${(Date.now()-post.createdAt)/1000}sec ago</li>`;
        });        
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){
    setTimeout(() => {
        posts.push(post);
    }, 2000);
}

getPosts();

createPost({ title:'post Three', body: 'this is Post Three'});

