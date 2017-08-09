import { Component, OnInit } from '@angular/core';

import { PageContent } from '../../classes/PageContent';

@Component({
  selector: 'app-ellevate',
  templateUrl: './ellevate.component.html',
  styleUrls: ['./ellevate.component.css']
})
export class EllevateComponent implements OnInit {
  public pageContent :PageContent;
  
  constructor() {
    this.pageContent = new PageContent();
    this.pageContent.title = "Ellevate";
    this.pageContent.content = "Ellevate bla bla";
  }

  ngOnInit() {
  }

}
