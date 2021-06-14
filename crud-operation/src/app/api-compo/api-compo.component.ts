import { Component, OnInit, ViewChild } from '@angular/core';

import { CommonService } from "src/app/common.service";

@Component({
  selector: 'app-api-compo',
  templateUrl: './api-compo.component.html',
  styleUrls: ['./api-compo.component.css']
})
export class ApiCompoComponent implements OnInit {

  @ViewChild('MatTable') MatTable;
  displayedColumns: string[] = ['id', 'title', 'userId', 'completed','action'];
  data2 : any;

  constructor(private data: CommonService) {
    console.log('ApiCompoComponent');
    this.data.getdata().subscribe(data => {
      console.log(data);
      this.data2 = data;
    })
  }


  ngOnInit(): void {

  }

  empArr = [];
  title = '';
  Search(i: any){
    // console.log("22 : ",this.data2);
    this.empArr = this.data2.filter( res => res.data2 == i);    
  }

  deletedata(i: number) {
    this.data2.splice(i, 1);
    console.log(this.data2);
    this.MatTable.renderRows();
  }

}
