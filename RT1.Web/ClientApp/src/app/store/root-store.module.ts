import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ErrorStoreModule } from './error-store/error-store.module';
import { GenderStoreModule } from './gender-store';
import { BusyService } from './network-common/busy.service';
import { PatientsStoreModule } from './patients-store/patients-store.module';

@NgModule({
    imports: [
        EffectsModule.forRoot([]),
        StoreModule.forRoot(
            {},
            {
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictActionSerializability: false,
                    strictActionTypeUniqueness: true,
                    strictActionWithinNgZone: true,
                    strictStateImmutability: true,
                    strictStateSerializability: true
                }
            }
        ),
        StoreDevtoolsModule.instrument(),
        ErrorStoreModule,
        GenderStoreModule,
        PatientsStoreModule
    ],
    providers: [BusyService]
})
export class RootStoreModule {}
