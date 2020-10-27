import { Component, OnInit } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  list;

  constructor(private Mdata:MoviedataService) { 
    this.list = Mdata.data;
  }

  ngOnInit() {
  }

 

}
