import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AvoidNgonchangeComponent } from './input-Observable/avoid-ngonchange/avoid-ngonchange.component';
import { HeroComponent } from './hero/hero.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { ComponentLevelStateComponent } from './component-level-state/component-level-state.component';

const routes: Routes = [{
  path: 'ParentComponent',
  component: ParentComponent
},
{
  path: 'AvoidNgonchangeComponent',
  component: AvoidNgonchangeComponent
},
{
  path: 'HeroComponent',
  component: HeroComponent
},
{
  path: 'StateManagementComponent',
  component: StateManagementComponent
},
{
  path: 'ComponentLevelStateComponent',
  component: ComponentLevelStateComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
