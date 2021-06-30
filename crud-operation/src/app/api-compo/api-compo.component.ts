import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-api-compo',
  templateUrl: './api-compo.component.html',
  styleUrls: ['./api-compo.component.css']
})
export class ApiCompoComponent implements OnInit {

  @ViewChild('MatTable') MatTable;
  displayedColumns: string[] = ['id', 'Name', 'Number','Date','Location','Account_Balance','action'];
  data3 : any;
  data2 : any;

  constructor(private data: CommonService) {
    console.log('ApiCompoComponent');
    // this.data.getdata().subscribe(data => {
    //   console.log(data);
    //   this.data2 = data;
    // })
  }

  dataForm: FormGroup;

  ngOnInit(): void {
    this.dataForm =  new FormGroup({
      Name: new FormControl('',Validators.required),
      Number: new FormControl('',Validators.required),
      Date: new FormControl('',Validators.required),
      Location: new FormControl('',Validators.required),
      Account_Balance: new FormControl('',Validators.required)
    });

    this.data.getFakeData().subscribe( res => {
      console.log("res ::: ", res);
      this.data3 = res;
      
    })

    // this.submitData();
    
  }
  
  submitData(){
    this.data.postFakeData(this.dataForm.value).subscribe(data => {
      console.log("Fake data : ",data);
      this.data3 = data;
      console.log("data :: ",this.data3);
      
    })
  }

  update(i: any) {
    this.dataForm.patchValue({
      Name: i.Name,
      Number: i.Number,
      Date: i.Date,
      Location: i.Location,
      Account_Balance: i.Account_Balance
    });

    console.log("i : ",i);
    

    this.MatTable.renderRows()
    // console.log("name : ",this.name);
  }

  // empArr = [];
  // title = '';
  // Search(i: any){
  //   console.log("22 : ",this.data2);
  //   this.empArr = this.data2.filter( res => res.data2 == i);    
  // }

  deletedata(i) {
    
    this.data.deleteFakeData(i).subscribe((res) => {
      this.data3.splice(0, 1);
      console.log("records : ",res);
    })
    // console.log(this.data3);
    this.MatTable.renderRows();
  }

}
