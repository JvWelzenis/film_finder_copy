

const galleryUl = document.getElementById("movie-gallery");

let addMoviesToDom = (movies) => {
return movies.map(movie => {
    const galleryLi = document.createElement("li");
    const img = document.createElement('img');
    const a = document.createElement('a')
     a.href = "https://www.imdb.com/title/" + movie.imdbID + "/";
    img.src = movie.poster
    galleryUl.appendChild(galleryLi);
    galleryLi.appendChild(a);
    a.appendChild(img);
    return galleryLi;
});
filterMovies("avenger");
filterLatestMovies();
}

addMoviesToDom(movies, galleryUl); 

const filteredList = document.getElementById('film-finder');

  function handleOnChangeEvent(event) {
    const filteredList = event.target.value;
  
//functie werkt wel maar hoe krijg ik de goede posters op het scherm?
function filterMovies(selectFilms) {
    console.log("Selected filter: ", selectFilms);
    const filterMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(`${selectFilms}`)
    );
    console.log(filterMovies);
    // moet de returnstatement anders? 
    return movies.poster;
};

//deze functie werkt niet
function filterLatestMovies() {
  const newMovies = movies.filter(function (obj) {
    return obj.year >= "2014";
  });
  console.log(newMovies); 
}; 


  switch (filteredList) {
    case "latest-movies":
      console.log("These are all films from 2014 or newer");
      filterLatestMovies();
      break;
    case "x-men":
      filterMovies(filteredList);
      break;
    case "avenger":
      filterMovies(filteredList);
      break;
    case "princess":
      filterMovies(filteredList);
      break;
    case "batman":
      filterMovies(filteredList);
      break;
    }
  };


  const radioBtns = document.querySelectorAll('[name= "movies"]');
radioBtns.forEach((btn) =>
  btn.addEventListener("change", (event) => handleOnChangeEvent(event))
);

