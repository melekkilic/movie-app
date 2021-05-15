import { Movie } from './movie';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable}  from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable()
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  private language;
  constructor(public httpClient:HttpClient){
    if (localStorage.getItem('lang') == 'pl') this.language = 'pl';
    else this.language = 'en';
  }
//db den popüler filmleri çektiğimiz method
  getMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.url}popular?api_key=${this.apiKey}&language=${this.language}`;
    return this.httpClient.get(moviesUrl).pipe(map(this.extractDataMovies));
    //return this.httpClient.get(moviesUrl).map(this.extractData)
  }
  //db den film id sine göre detayları çektiğimiz method
  getDetails(id : number) {
    let detailsUrl = `${this.url}${id}?api_key=${this.apiKey}&language=${this.language}`;
    return this.httpClient.get(detailsUrl)
      .pipe(map(this.extractDatDetails));

  }
  private extractDataMovies(res) {
    return res.results;
  }
  private extractDatDetails(res) {
    res.release_date=res.release_date.replace(/-/g, '/'); //release date i formatlamak için
    return res;
  }


}
