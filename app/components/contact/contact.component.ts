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
    this.pageContent.content = "Contactformulier Voornaam: Achternaam: E-mailadres: Telefoonnummer: Wanneer ben je het best te bereiken: Carlijn Kuenen coaching@carlijnkuenen.nl  0031 (0)6 50 84 99 55  Coaching wordt gegeven vanuit mijn praktijk in Rotterdam of op een nader te bepalen locatie in de Randstad. kvk: 55511848 ";
  }

  ngOnInit() {
  }

}
