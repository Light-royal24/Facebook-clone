const notifications = [
    {
        avatarImage: "https://api.sololearn.com/Uploads/Avatars/9027227.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg",
        time: "10 hours ago",
        notificationName : "james underma",
        notificationContent : "birthday today. Wish him the best!",
        typeofNoti: "cake-icon"
    },
    {
        avatarImage: "https://api.sololearn.com/Uploads/Avatars/9027227.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg",
        time: "10 hours ago",
        notificationName : "eduado adamu",
        notificationContent : "birthday today. Wish him the best!",
        typeofNoti: "new-post-icon",
    },
    {
        avatarImage: "https://api.sololearn.com/Uploads/Avatars/9027227.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg",
        time: "10 hours ago",
        notificationName : "james adams",
        notificationContent : "birthday today. Wish him the best!",
        typeofNoti: "new-post-icon",
    },
    {
        avatarImage: "https://api.sololearn.com/Uploads/Avatars/9027227.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg",
        time: "10 hours ago",
        notificationName : "solomon williams",
        notificationContent : "birthday today. Wish him the best!",
        typeofNoti: "new-post-icon",
    },
]

function getNotificationsDisplay(notifications) {
    return notifications.map(notification => {
        return `
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(${notification.avatarImage})">
                <div class="noti-badge">
                    <div class=${notification.typeofNoti}></div>
                </div>
            </div>
            <div class="noti-details">
                <div class="notiDetails">
                    <p><strong>${notification.notificationName}</strong> ${notification.notificationContent}.</p>

                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                </div>
                <span>${notification.time}</span> 
            </div>
            <i class="more-options-icon"></i> 
        </div>
        `
    }).join(" ")
}

notificationsDisplay = getNotificationsDisplay(notifications)
document.querySelector('.notifications').innerHTML = `
    <div class="noti-tab">
        <div class="notis-container">
            <span class="noti-sort-by">New</span> 
            ${notificationsDisplay}
        </div>
    </div>
`