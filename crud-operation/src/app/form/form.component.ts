import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dataSource = [];

  dataForm!: FormGroup;

  records: any;

  message = "hello";
  constructor(private ser : CommonService) {
    // console.log("Dataform : ",this.dataForm.value);
    // this.ser.getTheData();
    // console.log("FormComponent Loaded\n");
  }
  
  ngOnInit(){
    this.ser.setTheData(this.message);
    this.dataForm =  new FormGroup({
      name: new FormControl('',Validators.required),
      number: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required)
    });
  }

  submitData(data){
    data = this.dataForm;
    console.log("Form details : ",data.value)

    this.records = data;
    // console.log("records : ",this.records);
    
    this.ser.setTheData(this.records);
    // console.log("FormComponent Loaded\n");

    // console.log(
    // "form values  \nname : ",data.value.name,
    // "\nnumber : ", data.value.number,
    // "\npassword : ",data.value.password,
    // "\naddress : ",data.value.address
    // );
  }

}
