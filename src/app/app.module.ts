import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { Angulartics2Module } from 'angulartics2';
import {Angulartics2Clicky} from 'angulartics2/clicky';


import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {TabsModule} from 'ngx-bootstrap/tabs';


import {AppComponent} from './app.component';
import {VideoListComponent} from './video-list/video-list.component';
import {VideoDetailComponent} from './video-detail/video-detail.component';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {SearchResultComponent} from './search-result/search-result.component';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import {AppRoutingModule} from './app.routing';
import {SafePipe} from './utility/safe.pipe';
import {VideoPlayComponent} from './video-play/video-play.component';
import {CustomPlayerComponent} from './custom-player/custom-player.component';
import {GoogleFileComponent} from './google-file/google-file.component';
import {LoginComponent} from './login/login.component';

import {AuthGuard} from './_guard/index';
import {AuthenticationService, UserService} from './_services/index';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    HomeComponent,
    SearchComponent,
    SearchResultComponent,
    VideoPlayComponent,
    CustomPlayerComponent,
    GoogleFileComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    Angulartics2Module.forRoot([Angulartics2Clicky]),
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
