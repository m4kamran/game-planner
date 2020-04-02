import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlannerComponent } from './components/planner/planner.component';
import { GeneratedPlanComponent } from './components/generated-plan/generated-plan.component';


const routes: Routes = [
  { path: '', redirectTo: '/planner', pathMatch: 'full' },
  {
    path: 'planner',
    component: PlannerComponent,
    data: {
      breadcrumb: 'Planner'
    }
  },
  {
    path: 'generated-plan',
    component: GeneratedPlanComponent,
    data: {
      breadcrumb: 'Generated Plan'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
