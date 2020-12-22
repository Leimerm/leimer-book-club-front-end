import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  books = []

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.books, event.previousIndex, event.currentIndex);
  }
}


