import { Component, OnInit } from '@angular/core';

import { PageContent } from '../../classes/PageContent';

@Component({
  selector: 'app-birkman',
  templateUrl: './birkman.component.html',
  styleUrls: ['./birkman.component.css']
})
export class BirkmanComponent implements OnInit {
  public pageContent :PageContent;
  
  constructor() {
    this.pageContent = new PageContent();
    this.pageContent.title = "Birkman";
    this.pageContent.content = "Birkman bla bla";
   }

  ngOnInit() {
  }

}
