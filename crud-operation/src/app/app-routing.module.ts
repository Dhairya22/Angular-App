import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormRecordsComponent } from './form-records/form-records.component';
import { FormComponent } from "./form/form.component";
import { NotFounfComponent } from './not-founf/not-founf.component';
import { RecordsComponent } from "./records/records.component";
import { ApiCompoComponent } from "./api-compo/api-compo.component";
import { PromiseCompoComponent } from "./promise-compo/promise-compo.component";
import { ResolverCompoComponent } from './resolver-compo/resolver-compo.component';
import { ResolverService } from './resolver-service';
import { ArrayObjComponent } from './array-obj/array-obj.component';

const routes: Routes = [
  {
    path: '',
    component:FormRecordsComponent
  },
  {
    path: 'home',
    component: AppComponent,
    resolve : {
      records : ResolverService
    }
  },
  {
    path: 'formrecords',
    component: FormRecordsComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'records',
    component: RecordsComponent
  },
  {
    path: 'apirecords',
    component: ApiCompoComponent
  },
  {
    path: 'promises',
    component: PromiseCompoComponent,
  },
  {
    path: 'resolvers',
    component: ResolverCompoComponent,
    resolve: {
      dataRecords: ResolverService,
    }
  },
  {
    path: "arrobj",
    component: ArrayObjComponent
  },
  // {
  //   path: "formdialog",
  //   component: FormDialogComponent
  // },
  {
    path: "**",
    component: NotFounfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
