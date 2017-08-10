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
    this.pageContent.alineaTitle1 = "Birkman";
    this.pageContent.alinea1 = "Deze door de Amerikaanse psycholoog dr. Roger Birkman ontwikkelde methode behoort tot een van de meest veelzijdige en betrouwbare methoden voor zelfevaluatie. De Birkman methode geeft je heldere feedback op vier gebieden; de sterke kanten van jouw stijl, jouw behoeften in relatie tot het werk, wat jou motiveert en hoe jouw gedrag onder stress verandert."
    this.pageContent.alinea2 = "De rapportage valt ruwweg uiteen in twee delen: jouw werkgedrag ten opzichte van anderen en jouw houding ten opzichte van beroepen, werkomgeving en organisatie. De Birkman-rapportage geeft een helder inzicht in je sterke en zwakke kanten, jouw behoeften en interesses. De rapportage wordt na toelichting jouw persoonlijk eigendom."
    this.pageContent.alineaTitle3 = "Waarom birkman";
    this.pageContent.alinea3 = "Het is mijn ervaring dat clienten vaak verbaasd zijn over de accuraatheid van hun persoonlijke rapportage. Clienten kiezen voor de Birkman-methode omdat er snel een evenwichtig en genuanceerd beeld van hun unieke talenten of competenties ontstaat. De rapportage geeft je objectieve feedback op een heldere en waardevrije manier. Je krijgt handvatten ter versterking van jouw eigen effectiviteit aangereikt."
  }

  ngOnInit() {
  }

}
