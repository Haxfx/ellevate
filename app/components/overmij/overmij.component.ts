import { Component, OnInit } from '@angular/core';

import { PageContent } from '../../classes/PageContent';

@Component({
  selector: 'app-overmij',
  templateUrl: './overmij.component.html',
  styleUrls: ['./overmij.component.css']
})
export class OvermijComponent implements OnInit {
  public pageContent :PageContent;
  
  constructor() {
    this.pageContent = new PageContent();
    this.pageContent.title = "Over mij";
    this.pageContent.content = "Over mij bla bla";
   }

  ngOnInit() {
  }

}
