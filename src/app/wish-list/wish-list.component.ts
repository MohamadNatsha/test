import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(public Mdata:MoviedataService) { }

  ngOnInit() {
  }

}
