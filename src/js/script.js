//const onlineJSON = "https://api.npoint.io/98ff24d49257beb13309";
    const localJSON = "res/json/posts.json";
// used jsonlint to validate the json file
// when fetching from online website, use the onlineJSON instead of localJSON, everything else stays the same
    fetch(localJSON)
        .then((responce) => responce.json())
        .then(json => {
            console.log(json);
            displayPosts(json);

        })
        .catch(err => {
            let errDiv = document.createElement("div");
            const main = document.querySelector("main");
            errDiv.className = "post";
            errDiv.innerText = err;
            main.appendChild(errDiv);
        })
    //puts the time in the footer of page
    /*
    .finally(() => {
        let footer = document.querySelector("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
    });
    */

function displayPosts(posts) {
    posts.forEach(post => {
        //since the posts are in the main in html
        const main = document.querySelector("main");

        const postDiv = document.createElement("article");
        postDiv.classList.add("post");

        const headerDiv = document.createElement("div");
        headerDiv.classList.add("post-header");

        const userImg = document.createElement("img");
        userImg.src = "res/images/icon.jpg";
        userImg.alt = post.author;
        userImg.classList.add("user");

        const dateTime = document.createElement("p");
        dateTime.classList.add("date");
        dateTime.textContent = post.date;

        headerDiv.appendChild(userImg);
        headerDiv.appendChild(dateTime);
        postDiv.appendChild(headerDiv);

        // if the post has an image then add that as well
        let imagePost = null;
        if (post.image.trim() != "") {
            const imagePost = document.createElement("img");
            imagePost.src = post.image;
            imagePost.alt = "picture";
            imagePost.classList.add("image");
            postDiv.appendChild(imagePost);
        }

        const messagePost = document.createElement("p");
        messagePost.textContent = post.message;
        messagePost.classList.add("message");

        const likePost = document.createElement("img");
        likePost.src = "res/images/like.svg";
        likePost.alt = "like";

        postDiv.appendChild(messagePost);
        postDiv.appendChild(likePost);

        main.appendChild(postDiv);
    });
}
