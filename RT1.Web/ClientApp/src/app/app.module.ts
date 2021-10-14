import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './store/root-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, BrowserModule, RootStoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
