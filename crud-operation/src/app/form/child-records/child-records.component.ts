import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-records',
  templateUrl: './child-records.component.html',
  styleUrls: ['./child-records.component.css']
})
export class ChildRecordsComponent implements OnInit {

  @Input() name;
  @Input() details;
  @Input() dataForm;
 
  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    
    console.log("dataForm : ",this.dataForm.value);   
  }

}
