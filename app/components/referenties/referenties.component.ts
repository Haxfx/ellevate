import { Component, OnInit } from '@angular/core';

import { PageContent } from '../../classes/PageContent';

@Component({
  selector: 'app-referenties',
  templateUrl: './referenties.component.html',
  styleUrls: ['./referenties.component.css']
})
export class ReferentiesComponent implements OnInit {
  public pageContent :PageContent;
  
  constructor() {
    this.pageContent = new PageContent();
    this.pageContent.title = "Referenties";
    this.pageContent.content = "Referenties bla bla";
   }

  ngOnInit() {
  }

}
