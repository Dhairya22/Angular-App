import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-obj',
  templateUrl: './array-obj.component.html',
  styleUrls: ['./array-obj.component.css']
})
export class ArrayObjComponent implements OnInit {

  arr : Array<any> = [
    {
      person: 'Dhairya',
      age: 21,
      salary: null    
    },
    {
      person: 'Tarak',
      age: 27,
      salary: 55000    
    },
    {
      person: 'Chintan',
      age: 27,
      salary: 50000    
    },
    {
      person: 'Dhaval',
      age : 30,
      salary: 50000
    }
  ]
  
  ress;
  arrrr;
  fil;
  mapp;
  reddd;

  obj; 
  objj;

  constructor() { }

  ngOnInit() {
    
    //array
    this.arrrr = [1,3,4,2,4,3,2,2];
    console.log("Og Array : ",this.arrrr);

    this.fil = this.arrrr.filter(el=>el%2===0);
    this.mapp = this.fil.map(el=>el*el);
    this.reddd = this.mapp.reduce((a,b) => a+b);

    this.ress = this.arrrr.filter(el => el%2===0).map(el => el*el).reduce((a,b) => a+b);
    console.log("Final Array : ",this.ress);

    //object
    
    this.objj = this.arr.filter(el => el.salary>=0).map(el => el.yoe = 5)
    // this.objj = this.arr.reduce((a,b) => ({
    //   salary : a.salary+b.salary
    // }))

    console.log("1",this.objj);
    
    this.arr.map(el => { el.yoe = 5});
    console.log(this.arr);
    

    
    
  }

  i = [];
  res;
  add(data){
    this.res = this.i.push(data.value);
    console.log(this.i);
  }

}
