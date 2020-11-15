import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'data', pathMatch: 'full' },
  { 
    path: 'data',
    loadChildren: () => import('@data/data.module').then(m => m.DataModule),
  },
  { 
    path: 'credits',
    loadChildren: () => import('@credits/credits.module').then(m => m.CreditsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
