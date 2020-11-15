import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './pages/app/app.component';
import { MenuComponent } from './components/sidenav/sidenav.component';


export const COMPONENTS = [
  AppComponent,
  MenuComponent,
];
@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class CoreModule { }
