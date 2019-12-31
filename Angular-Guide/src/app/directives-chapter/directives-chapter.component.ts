import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-chapter',
  templateUrl: './directives-chapter.component.html',
  styleUrls: ['./directives-chapter.component.css']
})
export class DirectivesChapterComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

  constructor() { }

  ngOnInit() {
  }

}
