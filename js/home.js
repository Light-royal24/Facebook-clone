const post = [
    {
        user: 'david',
        text: 'working',
        img: 'post-1.png',
        like: 1000,
        comment: [],

    }
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
      console.log(profilePic)
  
      return `
        <div class="img" >
              <div class="storyPic" style="background-image: url('${profilePic}');">
                <div class="addToStoryImg2">
                  <div class="addToStory3">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              
              <div class="addToStoryText2">
                <p> Add to Story </p>
              </div>
          </div>
      `;
    }).join(" ")
    const pp = document.querySelector('.addToStory');
  
    pp.innerHTML = firstStory
  }

  displayAddStory(profile)