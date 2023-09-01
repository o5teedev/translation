import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureAComponent } from './components/feature-a/feature-a.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureAComponent,
  },
  // Add more routes as needed
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureARoutingModule { }
