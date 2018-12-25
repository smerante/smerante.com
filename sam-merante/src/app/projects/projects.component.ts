import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  expanded: boolean[];
  constructor() {
    this.expanded = [true, false, false];
  }

  ngOnInit() {
  }

  expand(index: number) {
    this.expanded.forEach(
      (val, i) => {
        if (index === i){
          this.expanded[i] = !this.expanded[i];
        }
      }
    )
  }
}
