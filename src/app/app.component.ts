import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Angulartics2Clicky} from 'angulartics2/clicky';

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
  isCollapsed = true;



  constructor(private route: ActivatedRoute, private router: Router, angulartics2Clicky: Angulartics2Clicky) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
    });
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params['q'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
