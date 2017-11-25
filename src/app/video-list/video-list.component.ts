import {Component, OnInit, OnDestroy} from '@angular/core';
import {VideoService} from '../videos/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  providers: [VideoService]
})
export class VideoListComponent implements OnInit, OnDestroy {
  private req: any;
  title = 'Video List';
  todayDate;
  videoList: [any];

  constructor(private _video: VideoService) {
  }

  ngOnInit() {
    this.todayDate = new Date();
    this.req = this._video.shortPopular().subscribe(data => {
      console.log(data);
      this.videoList = data.shows;
    });


  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

  getEmbedUrl(item) {
    return 'https://www.youtube.com/embed/' + item.embed;
  }

  showLogout(index, count) {
    if (((index + 1)  % 4 === 0)) {
      return true;
    } else {
      return false;
    }
  }

}
