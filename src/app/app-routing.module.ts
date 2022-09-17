import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsListComponent } from './cards-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: CardsListComponent },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./card-view.component').then((m) => m.CardViewComponent),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
