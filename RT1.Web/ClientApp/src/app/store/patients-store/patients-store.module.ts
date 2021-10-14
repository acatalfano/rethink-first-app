import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PatientsEffects } from './patients.effects';
import { reducer } from './patients.reducer';
import { PatientsService } from './patients.service';

@NgModule({
    imports: [
        HttpClientModule,
        StoreModule.forFeature('patient', reducer),
        EffectsModule.forFeature([PatientsEffects])
    ],
    providers: [PatientsService]
})
export class PatientsStoreModule {}
