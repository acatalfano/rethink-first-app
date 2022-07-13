import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FallbackErrorPageRoutingModule } from './fallback-error-page-routing.module';
import { FallbackErrorPageComponent } from './fallback-error-page.component';

@NgModule({
    declarations: [FallbackErrorPageComponent],
    imports: [CommonModule, FallbackErrorPageRoutingModule]
})
export class FallbackErrorPageModule {}
