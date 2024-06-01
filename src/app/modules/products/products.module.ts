import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { AutoFocusModule } from 'primeng/autofocus';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';
// const PRODUCT_ROOT:Routes=[
//   {path:"",redirectTo:"/home",pathMatch:"full"},
//   {path:"/home",component:ProductsListComponent},
// ]
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    TagModule,OrderListModule, CommonModule,
    DataViewModule,
    TagModule,
    CommonModule,ButtonModule,FormsModule, InputTextModule,KeyFilterModule,FileUploadModule,TabViewModule,AutoFocusModule,RippleModule,DataViewModule],
  exports:[ProductsListComponent]
})
export class ProductModule { 

}
