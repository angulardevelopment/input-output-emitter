import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { AvoidNgonchangeComponent } from './input-Observable/avoid-ngonchange/avoid-ngonchange.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [{
  path: 'parent',
  component: ParentComponent
},
{
  path: 'avoidNgonchange',
  component: AvoidNgonchangeComponent
},
{
  path: 'hero',
  component: HeroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
