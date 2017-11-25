import {Component, OnDestroy, OnInit} from '@angular/core';
import { VideoService } from '../videos/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [VideoService]

})
export class HomeComponent implements OnInit, OnDestroy {
  private moviereq: any;
  private tvreq: any;
  tvList: [any];
  movieList: [any];

  constructor(private _video: VideoService) { }

  ngOnInit() {
    this.moviereq = this._video.shortPopular().subscribe(data => {
      console.log(data);
      this.movieList = data.shows;
    });
    this.tvreq = this._video.shortPopularTV().subscribe(data => {
      console.log(data);
      this.tvList = data.shows;
    });


  }
  ngOnDestroy() {
    this.moviereq.unsubscribe();
    this.tvreq.unsubscribe();

  }
  preventNormal(event: MouseEvent) {
    event.preventDefault();
  }
}
