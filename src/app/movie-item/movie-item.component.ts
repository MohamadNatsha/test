import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  constructor(public Mdata:MoviedataService) { }
  @Input() id;
  @Input() name;
  @Input() img;
  @Input() tags;
  
 
  ngOnInit() {
  }

  deleteButton(){
    console.log('why2?');
    this.Mdata.deleteMovie(this.id);
  }
}
