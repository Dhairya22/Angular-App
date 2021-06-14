import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  message : any;
  data = [];
  constructor(private ser: CommonService) {
    console.log("RecordsComponent Loaded\n");
   }

  ngOnInit(): void {
    this.message = this.ser.getTheData();
    console.log("Message : ",this.message);
    
  }

  dataSource = [];
  title = "";
  // data: Array<any>;

  @ViewChild('MatTable') MatTable;

  displayedColumns: string[] = ['position', 'name', 'address', 'number','password','action'];

  Search(i){
    this.dataSource = this.dataSource.filter( res => {
      return res.title.toLocaleLowerCase().match(i.toLocaleLowerCase());
    })
  }

}