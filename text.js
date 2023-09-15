// Created by Vinay_GB

window.addEventListener("DOMContentLoaded", function() {
    const preScreen = document.getElementById("preScreen");
    const loginPage = document.querySelector(".login-page");
    const appContainer = document.querySelector(".app-container");
    const stickyNav = document.querySelector(".sticky-nav");
    const form = document.querySelector(".login-form");
    const navBar = document.querySelectorAll("[data-showTab]");
    const notifications = document.querySelectorAll(".noti-container");
    const posts = document.querySelectorAll(".post-container");
    var activeNavOption = navBar[0];
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        loginPage.classList.replace("show-flex", "hide");
        appContainer.classList.replace("hide", "show-flex");
    });
    Array.prototype.forEach.call(navBar, function(tab) {
        tab.addEventListener("click", function() {
            var newTab = document.getElementsByClassName(tab.getAttribute("data-showTab"))[0];
            if (newTab.classList.contains("noti-tab")) {
                appContainer.style.backgroundColor = "#232527";
                
             } else {
                appContainer.style.backgroundColor = "#18191b";
            }
            var currentTab = document.getElementsByClassName(activeNavOption.getAttribute("data-showTab"))[0];
            if (newTab.classList.contains("noti-tab") || newTab.classList.contains("menu-tab")) {
                stickyNav.classList.add("fix-nav");
            } else {
                stickyNav.classList.remove("fix-nav");
            }
            activeNavOption.classList.remove("active");
            tab.classList.add("active");
            currentTab.classList.replace("show-flex", "hide");
            activeNavOption = tab;
            newTab.classList.replace("hide", "show-flex");
        });
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
    window.addEventListener("load", function() {
        preScreen.style.display = "none";
        loginPage.classList.replace("hide", "show-flex");
    });
});