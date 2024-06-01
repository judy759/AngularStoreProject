import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { ProductModule } from './modules/products/products.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UsersModule } from './modules/users/users.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // ProductModule,
    // ProductsListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    KeyFilterModule,
    FileUploadModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    TabViewModule,RippleModule,
    ProductModule,UsersModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }