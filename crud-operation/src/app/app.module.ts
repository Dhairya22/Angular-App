import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from "@angular/material/dialog";

import { HttpClientModule } from "@angular/common/http";

import { RecordsComponent } from './records/records.component';
import { FormComponent } from './form/form.component';
import { NotFounfComponent } from './not-founf/not-founf.component';
import { FormRecordsComponent } from './form-records/form-records.component';
import { ApiCompoComponent } from './api-compo/api-compo.component';
import { PromiseCompoComponent } from './promise-compo/promise-compo.component';
import { ResolverCompoComponent } from './resolver-compo/resolver-compo.component';
import { ArrayObjComponent } from './array-obj/array-obj.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    FormComponent,
    NotFounfComponent,
    FormRecordsComponent,
    ApiCompoComponent,
    PromiseCompoComponent,
    ResolverCompoComponent,
    ArrayObjComponent
  ],
  // entryComponents: [PopupformComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule ,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
