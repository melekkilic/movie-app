import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MoviesService} from '../movie.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  providers:[MoviesService]
})
export class MovieComponent implements OnInit {

  constructor( private moviesService: MoviesService,
               private router: Router) {  }
  movies: Observable<Movie[]>;
  ngOnInit() {
    this.getMovies();
  }
//popüler filmleri çekmek için kullanılan method
  getMovies() {
    this.movies = this.moviesService.getMovies();
  }
}
