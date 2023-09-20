const notifications = [
    {
        heading: "<p>It's <strong>solomon Williams</strong>'s birthday today. Wish him the best!</p>",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        avatarImage: "https://api.sololearn.com/Uploads/Avatars/9027227.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg",
        time: "10 hours ago"
    }
]

function notification() {
    const newNoti = `
    <div class="noti-tab">
    
    <div class="notis-container">
        <span class="noti-sort-by">New</span> 
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/9027227.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="birthday-badge">
                    <div class="cake-icon"></div>
                </div>
            </div>
            <div class="noti-details">
            <div class="notiDetails">
                    <p>It's <strong>solomon Williams</strong>'s birthday today. Wish him the best!</p>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                </div> 
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/8797547.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="new-post-icon"></div>
                </div>
            </div>
            <div class="noti-details">
            
                <div class="notiDetails">
                    <p><strong>usman dembelle</strong> added a new photo.</p>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                </div>
            
                <span>10 hours ago</span> 
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/18669173.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="new-post-icon"></div>
                </div>
            </div>
            <div class="noti-details">
            <div class="notiDetails">
                    <p><strong>julian alvarez</strong> shared a photo.</p>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                </div>
        
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/5600732.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="new-post-icon"></div>
                </div>
            </div>
            <div class="noti-details">
                    <div class="notiDetails">
                        <p><strong>jennifer lopez</strong> liked a post of you.</p>
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                    </div>
    
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/5371585.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="new-post-icon"></div>
                </div>
            </div>
            <div class="noti-details">
            <div class="notiDetails">
                    <p><strong>Sick line Bro</strong> shared <strong>liked your</strong> post.</p>
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                </div>
        
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/16871300.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="friend-sugg-icon"></div>
                </div>
            </div>
            <div class="noti-details">
                        <div class="notiDetails">
                            <p>You have a new friend suggestion: <strong>real lifer jasin blood.</strong></p>
                            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                        </div>
    
                <span>Oct 20 at 11:54 AM</span> 
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/19034561.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="new-post-icon"></div>
                </div>
            </div>
            <div class="noti-details">
                    <div class="notiDetails">
                        <p><strong>diVin</strong> commented on <strong>simon</strong>'s post.</p>
                        <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                    </div>
                <span>Oct 15 at 08:54 PM</span> 
            </div>
            <i class="more-options-icon"></i> 
        </div>
        <div class="noti-container">
            <div class="user-avatar-large" style="background-image:url(https://api.sololearn.com/Uploads/Avatars/14676348.jpg),url(https://res.cloudinary.com/dxcivu5kp/image/upload/v1606050969/facebook-default-no-profile-pic1-800x800_pz1mam.jpg)">
                <div class="noti-badge">
                    <div class="new-post-icon"></div>
                </div>
            </div>
            <div class="noti-details">

                <div class="notiDetails">
                <p><strong>iAmboy</strong> shared a link.</p>
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
                </div>
                <span>Oct 2 at 11:00 AM</span> 
            </div>
            <i class="more-options-icon"></i> 
        </div>
    </div>
</div>
    `;

    const notifications = document.querySelector('.notifications');

    notifications.innerHTML = newNoti

}

notification()