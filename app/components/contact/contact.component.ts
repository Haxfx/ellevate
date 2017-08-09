import { Component, OnInit } from '@angular/core';

import { PageContent } from '../../classes/PageContent';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public pageContent :PageContent;

  constructor() {
    this.pageContent = new PageContent();
    this.pageContent.title = "Contact";
    this.pageContent.content = "Contact bla bla";
  }

  ngOnInit() {
  }

}
