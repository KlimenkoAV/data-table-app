import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsPageComponent } from './pages/credits-page/credits-page.component';

export const routes: Routes = [
    {
      path: '',
      component: CreditsPageComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule {}
