import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http'; 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { ModalComponent } from './_directives/index';
import { ModalService } from './_services/modal-service/index';
import { HomeComponent } from './home/index';
import { ProductAddComponent } from './product-add/index';
import { ProductListComponent } from './product-list/index';

@NgModule({
    imports: [
        BrowserModule,
		HttpModule,
        FormsModule,
		JsonpModule,
        routing
    ],
    declarations: [
        AppComponent,
        ModalComponent,
        HomeComponent,
        ProductAddComponent,
		ProductListComponent
    ],
    providers: [
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }