import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movie.service';
import {Movie} from '../movie';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  selectedMovie: Movie;
  errorMessage: string;
  language: string;
  constructor( private moviesService: MoviesService,
               private route: ActivatedRoute,
               private location: Location) {

  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        if (id) this.getDetails(id);
      });

  }
  //film detaylarını getiren method
  getDetails(id: number) {
    this.moviesService.getDetails(id)
      .subscribe(
        response => this.selectedMovie = response,
        error => this.errorMessage = <any>error);

  }
//listeleme ekranına geri dönmek için yazılmış method
  back() {
    this.location.back();

  }

}
