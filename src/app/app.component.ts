import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Test';
  description = 'a new app';
  private routeSub: any;
  query: String;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params['q'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
