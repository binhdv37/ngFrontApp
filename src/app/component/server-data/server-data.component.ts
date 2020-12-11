import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data/data.service';

@Component({
  selector: 'app-server-data',
  templateUrl: './server-data.component.html',
  styleUrls: ['./server-data.component.css']
})
export class ServerDataComponent implements OnInit {

  data: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      data => {
        // @ts-ignore
        this.data = data;
      }
    );
  }

}
