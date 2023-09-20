const posts = [
  {
      user: 'De Lord Royal',
      postDetails: '',
      postLike: "1m",
      userImg: "./img/profile.png",
      postHour : "5 m",
      postComment: '300k',
      postShare: "20k",
      postImg: "https://res.cloudinary.com/dxcivu5kp/image/upload/v1606390230/Screenshot_2020-11-19-07-49-54-32_2_bdtae7.jpg"
  },
  {
    user: 'micheal jonathan',
    postDetails: 'you need to see this',
    postImg: 'post-1.png',
    postLike: "500k",
    userImg: "https://blob.sololearn.com/avatars/49832450-49aa-4209-8d6d-5acb6d758cd7.jpg",
    postHour : "2h",
    postComment: "40k",
    postShare: "10k",
    postImg: "https://res.cloudinary.com/dxcivu5kp/image/upload/v1606390001/Screenshot_2020-11-18-17-48-48-93_2_kceify.jpg"

},
{
  user: 'John Anthony',
  postDetails: 'just felling like posting.',
  postLike: "800",
  postHour : '1day',
  postComment: '300',
  userImg: "https://blob.sololearn.com/avatars/fd754fee-e1fc-4a5f-954a-15ee92afa7fc.jpg",
  postShare: "70",
  postImg: "https://source.unsplash.com/random/?mountain"

},
{
  user: 'adams grey',
  postDetails: 'montain',
  postLike: "780",
  userImg: "https://blob.sololearn.com/avatars/fd754fee-e1fc-4a5f-954a-15ee92afa7fc.jpg",
  postHour : '3days',
  postComment: '400',
  postShare: "89",
  postImg: "https://source.unsplash.com/random/?mountain"

},
{
  user: 'anthony simon',
  postDetails: 'the love of nature is so wonderful ',
  postLike: "14k",
  userImg: "https://blob.sololearn.com/avatars/0d424a6c-f8a3-45ea-9a31-793bdf8ae316.jpg",
  postHour : '17m',
  postComment: '300',
  postShare: "12",
  postImg: "https://source.unsplash.com/random/?nature"

},
{
  user: 'daniel david',
  postDetails: 'The space world look so beatiful',
  postLike: "380k",
  userImg: "https://blob.sololearn.com/avatars/a70e7041-e892-4a05-bb15-88c4182fa8f2.jpg",
  postHour : '14h',
  postComment: '12k',
  postShare: "20",
  postImg: "https://source.unsplash.com/random/?space,galaxy"

},
{
  user: 'emmanuel markus',
  postDetails: 'say something. cool right?.',
  postLike: "900k",
  userImg: "https://blob.sololearn.com/avatars/fe6e2779-0931-494c-9324-0c98778250cd.jpg",
  postHour : '17h',
  postComment: '16k',
  postShare: "2k",
  postImg: "https://source.unsplash.com/random"

},
{
  user: 'De Lord Royal',
  postDetails: 'how much do you love coding?',
  postLike: "9.8m",
  userImg: "./img/profile.png",
  postHour : '7days',
  postComment: '1m',
  postShare: "549k",
  postImg: "https://source.unsplash.com/random/?programming"

},
{
  user: 'De Lord Royal',
  postDetails: 'just be happy en get y',
  postLike: "9.8m",
  userImg: "./img/profile.png",
  postHour : '7days',
  postComment: '1m',
  postShare: "549k",
},
{
  user: 'De Lord Royal',
  postDetails: 'how much do you love coding?',
  postLike: "9.8m",
  userImg: "./img/profile.png",
  postHour : '7days',
  postComment: '1m',
  postShare: "549k",
},
{
  user: 'De Lord Royal',
  postDetails: 'how much do you love coding?',
  postLike: "9.8m",
  userImg: "./img/profile.png",
  postHour : '7days',
  postComment: '1m',
  postShare: "549k",
},
{
  user: 'De Lord Royal',
  postDetails: 'how much do you love coding?',
  postLike: "9.8m",
  userImg: "./img/profile.png",
  postHour : '7days',
  postComment: '1m',
  postShare: "549k",
},
]


const profile = [
  {
    profilePic: './img/profile.png',
    userName: 'De Lord Royal',
    password: 'helloworld344',
    phoneNumber: '09087234524',
    fellowers: '900k',
    fellowing: '983',
    details: [],
  }
]

const storys = [
  {
    user: 'zuang abituah',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'zothang linuah',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'dailang wang',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'zum zum',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'lili supremo',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'jinuah nunu',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'headoch emmanuel',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'simon joshua',
    minites: 2,
    img: './img/post-1.jpg'
  },
  {
    user: 'jonathan boy',
    minites: 2,
    img: './img/img-1.jpg'
  },
]

function displayFirstStory(profiles) {
  const firstStory = profiles.map((profile) => {
    const {profilePic} = profile;

    return `
      <div class="img" >
            <img src="${profilePic}" />
        </div>
    `;
  }).join(" ")
  const pp = document.querySelector('.homeProfile');

  pp.innerHTML = firstStory
}

function displaystorys(storys) {
  const storysHTML = storys
    .filter((story) => story.img)
    .map((story) => {
      const { user, minites,  img } = story;

      return `

        <div class="story" style="
        background-image: url('${img}'); ">
          <div class="minutes">
          <span>${minites}</span>
          </div>


          <div class="userText">
            <p>
            ${user}
            </p>
          </div>
          
        </div>
      `;
    })
    .join(" ");

    const newStories = document.querySelector('.stories')

    newStories.innerHTML = storysHTML
  };

  displaystorys(storys)
  displayFirstStory(profile)

  function displayAddStory(profiles) {
    const firstStory = profiles.map((profile) => {
      const {profilePic} = profile;
  
      return `
        <div class="img" >
              <div class="my-story">
                <img class="story-banner-avatar" src="${profilePic}" alt="Profile avatar"/>
                <div class="add-story"></div>
                <div class="addToStoryText2">
                  <p> Add to Story </p>
                </div>
              </div>
              
          </div>
      `;
    }).join(" ")
    const pp = document.querySelector('.addToStory');
  
    pp.innerHTML = firstStory
  }

  displayAddStory(profile)

  function displayPost(posts) {
    const newPost = posts.map(post => {
      return `
      <div class="post-container">
        <div class="post-header">
          <div class="post-header-content1">
            <img src=${post.userImg} />
          </div>
          <div class="post-header-content2">
            <div class='nameContent'>
              <p>${post.user}</p>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='1em' height='1em' fill='%236d6f73' viewBox='0 0 375.636 375.635' style='enable-background:new 0 0 375.636 375.635;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M41.013,228.825C18.396,228.825,0,210.438,0,187.818c0-22.608,18.396-41.007,41.013-41.007 c22.617,0,41.013,18.398,41.013,41.007C82.025,210.438,63.63,228.825,41.013,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M185.513,228.825c-22.617,0-41.013-18.387-41.013-41.007c0-22.608,18.396-41.007,41.013-41.007 c22.613,0,41.013,18.398,41.013,41.007C226.525,210.438,208.126,228.825,185.513,228.825z'/%3E%3C/g%3E%3Cg%3E%3Cpath d='M334.623,228.825c-22.613,0-41.013-18.387-41.013-41.007c0-22.608,18.399-41.007,41.013-41.007 c22.614,0,41.013,18.398,41.013,41.007C375.636,210.438,357.237,228.825,334.623,228.825z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="more options icon"/> 
            </div>
            <div class="hoursContent">
              <h4>${post.postHour}</h4>
              <span>.</span>
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='0.8em' height='0.8em' fill='%236d6f73' viewBox='0 0 31.416 31.416' style='enable-background:new 0 0 31.416 31.416;' xml:space='preserve'%3E%3Cpath d='M28.755,6.968l-0.47,0.149L25.782,7.34l-0.707,1.129l-0.513-0.163L22.57,6.51l-0.289-0.934L21.894,4.58l-1.252-1.123 l-1.477-0.289l-0.034,0.676l1.447,1.412l0.708,0.834L20.49,6.506l-0.648-0.191L18.871,5.91l0.033-0.783l-1.274-0.524l-0.423,1.841 l-1.284,0.291l0.127,1.027l1.673,0.322l0.289-1.641l1.381,0.204l0.642,0.376h1.03l0.705,1.412l1.869,1.896l-0.137,0.737 l-1.507-0.192l-2.604,1.315l-1.875,2.249l-0.244,0.996h-0.673l-1.254-0.578l-1.218,0.578l0.303,1.285l0.53-0.611l0.932-0.029 l-0.065,1.154l0.772,0.226l0.771,0.866l1.259-0.354l1.438,0.227l1.67,0.449l0.834,0.098l1.414,1.605l2.729,1.605l-1.765,3.372 l-1.863,0.866l-0.707,1.927l-2.696,1.8l-0.287,1.038c6.892-1.66,12.019-7.851,12.019-15.253 C31.413,12.474,30.433,9.465,28.755,6.968z'/%3E%3Cpath d='M17.515,23.917l-1.144-2.121l1.05-2.188l-1.05-0.314l-1.179-1.184l-2.612-0.586l-0.867-1.814v1.077h-0.382l-2.251-3.052 v-2.507L7.43,8.545L4.81,9.012H3.045L2.157,8.43L3.29,7.532L2.16,7.793c-1.362,2.326-2.156,5.025-2.156,7.916 c0,8.673,7.031,15.707,15.705,15.707c0.668,0,1.323-0.059,1.971-0.137l-0.164-1.903c0,0,0.721-2.826,0.721-2.922 C18.236,26.357,17.515,23.917,17.515,23.917z'/%3E%3Cpath d='M5.84,5.065l2.79-0.389l1.286-0.705l1.447,0.417l2.312-0.128l0.792-1.245l1.155,0.19l2.805-0.263L19.2,2.09l1.09-0.728 l1.542,0.232l0.562-0.085C20.363,0.553,18.103,0,15.708,0C10.833,0,6.474,2.222,3.596,5.711h0.008L5.84,5.065z M16.372,1.562 l1.604-0.883l1.03,0.595l-1.491,1.135l-1.424,0.143l-0.641-0.416L16.372,1.562z M11.621,1.691l0.708,0.295l0.927-0.295 l0.505,0.875l-2.14,0.562l-1.029-0.602C10.591,2.526,11.598,1.878,11.621,1.691z'/%3E%3C/svg%3E" alt="public icon"/></small> </div>
            </div>
          </div>
        </div>
        <div class="post-content">
          <p>${post.postDetails}</p>
        </div>
          <img class="post-img" src=${post.postImg} onerror='this.style.display = "none"'/> 
        <div class="post-stats">
          <span class="post-reactions">
          <i class="react-like">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' height='0.6em' width='0.6em' fill='%23fff' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath d='M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z'/%3E%3Cpath d='M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z' /%3E%3C/svg%3E" alt="Like icon"/></i>
          <span class="likesCount">${post.postLike}</span></span>
          <span class="post-details"></span> 
        </div>
        <div class="post-btns">
          <span>
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' height='1em' width='1em' fill='%236d6f73' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath d='M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64 c12.011,0,23.061-4.053,32-10.795V224H53.333z'/%3E%3Cpath d='M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725 c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333 c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651 C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043 c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z' /%3E%3C/svg%3E" alt="Like icon"/>&nbsp; ${post.postLike}</span><span><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' height='1em' width='1em' viewBox='0 0 60 60' style='enable-background:new 0 0 60 60;' xml:space='preserve'%3E%3Cpath fill='%236d6f73' d='M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.639,0.933C14.757,57.978,14.879,58,15,58 c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M58,41c0,2.168-1.832,4-4,4H27.179 l3.579-4.161c0.36-0.418,0.313-1.05-0.106-1.41c-0.418-0.36-1.051-0.312-1.411,0.106l-4.998,5.811L16,54.414V46c0-0.552-0.448-1-1-1 H6c-2.168,0-4-1.832-4-4V8c0-2.168,1.832-4,4-4h48c2.168,0,4,1.832,4,4V41z'/%3E%3C/svg%3E" alt="comment icon"/>&nbsp; ${post.postComment}</span>
          <span>
          <img src="data:image/svg+xml,%3Csvg height='1em' width='1em' viewBox='0 0 512 512.00004' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%236d6f73' d='m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0'/%3E%3C/svg%3E" alt="Share icon"/>&nbsp; ${post.postShare}</span>
        </div>
    </div> 
    `;
  }).join(" ")

    const mainPost = document.querySelector(".posts-container");
    mainPost.innerHTML = newPost
  }

  displayPost(posts);

