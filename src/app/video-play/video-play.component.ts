import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VideoService} from '../videos/video.service';
import {Link} from './link';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css'],
  providers: [VideoService]

})

export class VideoPlayComponent implements OnInit, OnDestroy {

  private routeSub: any;
  slug: string;
  linkList: any;
  tabs: Link[] = [];
  selectedLink: any;

  constructor(private route: ActivatedRoute, private _video: VideoService) {

  }


  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.slug = params['slug'];
      this._video.getLinks(this.slug).subscribe(data => {
        this.linkList = data as [any];
        console.log(this.linkList);
        for (const stream of this.linkList.links) {
          let isgoogleFile = false;
          if (stream.name.includes('oogle File')) {
            isgoogleFile = true;
          }
          this.tabs.push({
            name: stream.name,
            link: stream.url,
            isgoogle: isgoogleFile,
            active: false
        });
        }
      });
    });
  }


  ngOnDestroy() {
    this.routeSub.unsubscribe();

  }

  onSelect(link: any): void {
    this.selectedLink = null;
    this.selectedLink = link;
  }
}
