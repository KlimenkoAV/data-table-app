import { IconComponent, SvgComponent } from './components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


export const COMPONENTS = [
  IconComponent,
  SvgComponent,
];

@NgModule({
  declarations:COMPONENTS,
  exports: COMPONENTS,
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
