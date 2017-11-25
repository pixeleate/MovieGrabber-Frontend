import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {VideoListComponent} from './video-list/video-list.component';
import {VideoDetailComponent} from './video-detail/video-detail.component';
import {HomeComponent} from './home/home.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {VideoPlayComponent} from './video-play/video-play.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './_guard/index';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    component: SearchResultComponent,
  },
  {
    path: 'videos',
    component: VideoListComponent,
  },
  {
    path: 'videos/:slug',
    component: VideoDetailComponent,
  },
  {
    path: 'videos/play/:slug',
    component: VideoPlayComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
