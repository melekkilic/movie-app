import {MovieComponent} from './movie/movie.component';
import {DetailMovieComponent} from './detail-movie/detail-movie.component';
import {AboutComponent} from './about/about.component';
import {Routes} from '@angular/router';

export const appRoutes: Routes=[
  {path:"movie",component:MovieComponent},
  {path:"detail/:id",component:DetailMovieComponent},
  {path:"about",component:AboutComponent},
  {path:"**",redirectTo:"movie",pathMatch:"full"},


]
