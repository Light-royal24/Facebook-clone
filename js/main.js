
window.addEventListener("DOMContentLoaded", async function() {
    const preScreen = document.getElementById("preScreen");
    const loginPage = document.querySelector(".login-page");
    const appContainer = document.querySelector(".app-container");
    const form = document.querySelector(".login-form");
    const notifications = document.querySelectorAll(".noti-container");
    const posts = document.querySelectorAll(".post-container");
    
   await    setTimeout(() => {
        preScreen.style.display = "none";
        loginPage.classList.replace("hide", "show-flex");
      }, 2500);


    form.addEventListener("submit", function(e) {
        e.preventDefault();
        loginPage.classList.replace("show-flex", "hide");
        appContainer.classList.replace("hide", "show-flex");
    });
   

    Array.prototype.forEach.call(posts, function(post) {
        var likeBtn = post.querySelector(".post-btns").childNodes[0];
        
        var liked = false;
        var count = "";
        likeBtn.addEventListener("click", function() {
            var el = post.querySelector(".likesCount");
            var postReactions = el.textContent;
            if (!liked) {
                el.textContent = "You and " + postReactions + " others";
                likeBtn.style.color = "var(--blue)";
                likeBtn.querySelector("img").style.filter = "invert(55%) sepia(65%) saturate(6809%) hue-rotate(201deg) brightness(97%) contrast(96%)";
                liked = true;
                count = postReactions;
            } else {
                el.textContent = count;
                likeBtn.style.color = "var(--grey)";
                likeBtn.querySelector("img").style.filter = "invert(47%) sepia(8%) saturate(160%) hue-rotate(182deg) brightness(90%) contrast(90%)";
                liked = false;
            }
        });
    });
    Array.prototype.forEach.call(notifications, function(notification) {
        notification.addEventListener("click", function handleClick() {
            notification.style.backgroundColor = "var(--dark-grey)";
            notification.removeEventListener("click", handleClick);
        }, false);
    });
});


