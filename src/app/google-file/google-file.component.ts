import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {VideoService} from "../videos/video.service";

@Component({
  selector: 'app-google-file',
  templateUrl: './google-file.component.html',
  styleUrls: ['./google-file.component.css']
})
export class GoogleFileComponent implements OnInit, OnDestroy {
  @Input() file: string;
  private filereq: any;
  url: any;

  constructor(private _video: VideoService) { }

  ngOnInit() {
    this.filereq = this._video.decodeGFile(this.file).subscribe(data => {
      console.log(data);
      this.url = data.decoded;
    });
    console.log(this.url);
  }
  ngOnDestroy() {
    this.filereq.unsubscribe();

  }

}
