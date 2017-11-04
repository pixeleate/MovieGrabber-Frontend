import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../videos/video.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  providers: [VideoService]

})
export class SearchResultComponent implements OnInit, OnDestroy {
  private routeSub: any;
  query: String;
  videoList: [any];

  constructor(private route: ActivatedRoute, private _video: VideoService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params['q'];
      this._video.search(this.query).subscribe(data => {
        this.videoList = data as [any];
        console.log(this.videoList);
      });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();

  }

}
