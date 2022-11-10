// dumy data 
// const posts = [
//     {
//         title: "post 1",
//         body: "description 1"
//     },
//     {
//         title: "post 2",
//         body: "description 2"
//     },
//     {
//         title: "post 3",
//         body: "description 3"
//     },
//     {
//         title: "post 4",
//         body: "description 4"
//     },
//     {
//         title: "post 5",
//         body: "description 5"
//     },
//     {
//         title: "post 6",
//         body: "description 6"
//     },
//     {
//         title: "post 8",
//         body: "description 8"
//     },
//     {
//         title: "post 9",
//         body: "description 9"
//     },
//     {
//         title: "post 10",
//         body: "description 10"
//     },
//     {
//         title: "post 11",
//         body: "description 11"
//     }
// ]

const fechData = async (config) => {
  try{
    const res =  await axios(config)
    return res.data;
  }catch(err){
    throw Error ("data is not feched")
  }
}

const loadAllData = async () => {
    const posts = await fechData("https://jsonplaceholder.typicode.com/posts");
    posts.map(post => {
        const postElement = document.createElement("div")
        postElement.innerHTML = `<h3>${post.id}</h3><h4>${post.title}</h4>
        <p class="post-descriotion">
            ${post.body}
        </p>`
        postElement.classList.add("post")
        const postsElement = document.querySelector(".posts")
        postsElement.appendChild(postElement)
    });
}
loadAllData();