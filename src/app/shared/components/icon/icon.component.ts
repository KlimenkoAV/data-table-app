import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {

  link = '/';

  constructor(private router: Router) {
    this.link = this.router.url;
  }

  @Input() icon: string;
}
