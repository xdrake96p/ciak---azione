package com.example.Movie.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Movie.entita.AllMovies;
import com.example.Movie.entita.Genres;
import com.example.Movie.entita.MovieDetails;
import com.example.Movie.servizi.AllMoviesService;
import com.example.Movie.servizi.MovieDetailsService;


@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*",methods = {RequestMethod.POST,RequestMethod.DELETE,RequestMethod.GET,RequestMethod.PUT})
public class TheMovieDBController {
    @Autowired
    private AllMoviesService moviesService;

    @Autowired
    private MovieDetailsService detailsService;

    @PostMapping("/moviesTypes/{name}")//http://localhost:8080/moviesTypes/top_rated      /now_playing  /popular   /top_rated  /upcoming
    public AllMovies Type(@PathVariable String name) throws Exception { 
        return moviesService.movies(name);
    }

    @PostMapping("/movieDetails/{id}")//http://localhost:8080/movieDetails/550  restituisce i dettagli del film tramite id
    public MovieDetails details(@PathVariable long id) {
        return detailsService.movieDetails(id);
        
    }

    @PostMapping("/search/{name}")//http://localhost:8080/search/street   //restituisce una lista di film con quel nome iniziale
    public AllMovies SearchingMovie(@PathVariable String name){
        return moviesService.searchingMovies(name);
    }
    
   
    
}
