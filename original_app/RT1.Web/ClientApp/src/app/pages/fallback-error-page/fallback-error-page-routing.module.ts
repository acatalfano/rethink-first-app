import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackErrorPageComponent } from './fallback-error-page.component';

const routes: Routes = [{ path: '', component: FallbackErrorPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FallbackErrorPageRoutingModule { }
