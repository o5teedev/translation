import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature-a', // Define the lazy-loaded route
    loadChildren: () =>
      import('./modules/feature-a/feature-a.module').then((m) => m.FeatureAModule),
  },
  {
    path: 'feature-b', // Define the lazy-loaded route
    loadChildren: () =>
      import('./modules/feature-b/feature-b.module').then((m) => m.FeatureBModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
