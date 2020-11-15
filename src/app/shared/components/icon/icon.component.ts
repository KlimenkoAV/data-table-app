import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {

  link = '/';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.link = this.router.url;
      }
    });
    this.link = this.router.url;
  }

  @Input() icon: string;
  @Input() fill = null;
  @Input() stroke = null;
}
