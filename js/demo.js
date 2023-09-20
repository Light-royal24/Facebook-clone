const post = [
  {
    user: "david",
    text: "working",
    img: "post-1.png",
  },
];

// 1. Page loads
document.addEventListener("DOMContentLoaded", async () => {
  const movieUrl = "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming";

  // 2. Fetch upcoming movies and series
  // const upcomingMovies = await fetchMoviesAPI(movieUrl);
  const upcomingMovies = await fetchMoviesAPI(movieUrl);
  // 3. Save the results of the fetch request in movies variable
  const movies = upcomingMovies.results;

  // 4. Display the movies in our HTML
  displayMovies(movies);

  const mainGenres = await fetchGenres();

  const genries = mainGenres.results;

  displayGenres(genries);
  // Saving our next button in variable
  const nextPage = document.querySelector("#next");

  // Listening for click event on our next button
  nextPage.addEventListener("click", getNextPage);

  // saving our previous button in variable
  const previousBtn = document.querySelector("#Previous");

  // listening for click event o previous page
  previousBtn.addEventListener("click", getPreviousPage);

  // get the search field
  const search = document.getElementById("search");
  search.addEventListener("keyup", async (e) => {
    if (e.target.value.trim() === "") {
      // 2. Fetch upcoming movies and series
      // const upcomingMovies = await fetchMoviesAPI(movieUrl);
      const upcomingMovies = await fetchMoviesAPI(movieUrl);
      // 3. Save the results of the fetch request in movies variable
      const movies = upcomingMovies.results;

      // 4. Display the movies in our HTML
      displayMovies(movies);
    }
  });

  // add event listener to the search field
  search.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("input");
    const inputValue = input.value;

    if (inputValue.trim() !== "") {
      try {
        const searchPageURL = `https://moviesdatabase.p.rapidapi.com/titles/search/title/${inputValue}`;

        // 2. Fetch upcoming movies and series
        const upcomingMovies = await fetchMoviesAPI(searchPageURL);
        // 3. Save the results of the fetch request in movies variable
        const movies = upcomingMovies.results;

        // 4. Display the movies in our HTML
        displayMovies(movies);
      } catch (e) {
        console.log(e);
      }
    }
  });
});

const getMovieDetails = (movie) => {
  const { originalTitleText, primaryImage, releaseYear, titleType } = movie;

  const movieDetails = {
    title: originalTitleText.text,
    image: primaryImage.url,
    releaseYear: releaseYear.year,
    type: titleType.text,
  };

  return movieDetails;
};

function displayMovies(movies) {
  const moviesHTML = movies
    .filter((movie) => movie.primaryImage)
    .map((movie) => {
      const { title, image, releaseYear, type } = getMovieDetails(movie);

      return `
  
          <div class="movie" >
            <div>
              <img src="${image}" />
            </div>
  
            <h4 >
              ${title}
            </h4>
  
            
            <div class="dateTime">
            <span>${releaseYear}</span>
            <span>${type}</span>
            </div>
    
          </div>
        `;
    })
    .join(" ");

  document.getElementById("movies").innerHTML = moviesHTML;
}

function toggleLoading(loading) {
  // Getting the overlay
  let overlay = document.getElementsByClassName("loading-overlay")[0];

  setTimeout(
    () => {
      // console.log(loading);

      // Toggling is active on the overlay
      overlay.classList.toggle("is-active");
    },
    loading ? 0 : 1500
  );
}
