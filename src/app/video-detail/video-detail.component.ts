import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from '../videos/video.service';

export class Season {
  id: number;
  title: String;
  episodes: Episode[];
}

export class Episode {
  id: number;
  title: String;
}


@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})


export class VideoDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  video: any;
  recommended: any;
  streamlist: any;
  tvlist: any;
  isTV: boolean;
  slug: string;
  SEASONS: Season[] = [];

  constructor(private route: ActivatedRoute, private _video: VideoService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params);
      this.slug = params['slug'];
      this._video.detail(this.slug).subscribe(data => {
        this.video = data.show;


        this.streamlist = this.video.posts;
        this.SEASONS = [];
        if (this.streamlist.length >= 10) {
          this.isTV = true;
          for (const stream of this.streamlist) {



            const season = stream.title.match(/S(\d+(\.\d)*)E/i)[1];
            let object = {id: season, title: 'Season ' + season, episodes: []};
            if (this.SEASONS.findIndex(x => x.id == season) === -1) {
              this.SEASONS.push(object);
            }
            this.SEASONS[this.SEASONS.findIndex(x => x.id == season)].episodes.push({
              title: stream.title,
              id: stream.id
            });
          }




        } else {
          this.isTV = false;
        }
      });
      this._video.getRecommended(this.slug).subscribe(data => {
        this.recommended = data.shows as [any];
        console.log(this.recommended);
      });
    });
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}



