// TASK 5
// a) Constructor for the class Movie
class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// b) Constructor with default rating
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

// c) Method getPG
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// d) Creating an instance of the class Movie

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// COMPLETE CODE 

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the class Movie with the specified title, studio, and rating
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG method
const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG-13"),
    new Movie("Movie 4", "Studio 4", "PG")
];

const pgMovies = Movie.getPG(movies);
pgMovies.forEach(movie => {
    console.log(`Title: ${movie.title}, Studio: ${movie.studio}, Rating: ${movie.rating}`);
});
