import {Component, OnInit, Input} from '@angular/core';
import {VgAPI} from 'videogular2/core';
import {HttpUrlEncodingCodec} from '@angular/common/http';


@Component({
  selector: 'app-custom-player',
  providers: [HttpUrlEncodingCodec],
  templateUrl: './custom-player.component.html',
  styleUrls: ['./custom-player.component.css'],
})
export class CustomPlayerComponent implements OnInit {
  preload: string = 'auto';
  api: VgAPI;
  @Input() url: string;
  decodedurl: string;

  constructor(private urlCodec: HttpUrlEncodingCodec) {
  }

  onPlayerReady(api: VgAPI) {
    this.api = api;
  }

  ngOnInit() {
    this.decodedurl = this.urlCodec.decodeKey(this.url);
  }


}
