import { CreditsRoutingModule } from './credits-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';


const COMPONENTS = [
  CreditsPageComponent,
]
@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreditsRoutingModule,
  ],
})
export class CreditsModule { }
