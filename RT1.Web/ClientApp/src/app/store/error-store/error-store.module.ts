import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';

import { ErrorEffects } from './error.effects';

@NgModule({
    imports: [EffectsModule.forFeature([ErrorEffects])],
    providers: [ErrorEffects]
})
export class ErrorStoreModule {}
