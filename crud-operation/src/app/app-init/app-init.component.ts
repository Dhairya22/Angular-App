import { Component, OnInit, ViewChild } from '@angular/core';
import { AppInitService } from '../app-init.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-app-init',
  templateUrl: './app-init.component.html',
  styleUrls: ['./app-init.component.css']
})
export class AppInitComponent implements OnInit {

  @ViewChild('matTable') matTable;

  displayedColumns: string[] = ['id', 'login' ,'node_id', 'url','action'];

  items :  any = [];

  constructor(private data: AppInitService, private item: AppModule) { }

  ngOnInit(): void {
    this.data.init().then(data => {
      this.items = data
    }); 
  }

  deleteRecord(i: number){
    this.items.splice(i,1);
    this.matTable.renderRows();
  }

}
