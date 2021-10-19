import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GendersEffects } from './genders.effects';
import { reducer } from './genders.reducer';
import { GendersService } from './genders.service';

@NgModule({
    imports: [HttpClientModule, StoreModule.forFeature('gender', reducer), EffectsModule.forFeature([GendersEffects])],
    providers: [GendersService]
})
export class GendersStoreModule {}
