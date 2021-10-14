import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { reducer } from './gender.reducer';

@NgModule({
    imports: [StoreModule.forFeature('gender', reducer)]
})
export class GenderStoreModule {}
