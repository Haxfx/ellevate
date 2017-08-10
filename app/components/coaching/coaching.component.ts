import { Component, OnInit } from '@angular/core';

import { PageContent } from '../../classes/PageContent';

@Component({
  selector: 'app-coaching',
  templateUrl: './coaching.component.html',
  styleUrls: ['./coaching.component.css']
})
export class CoachingComponent implements OnInit {
  public pageContent :PageContent;
  
  constructor() {
    this.pageContent = new PageContent();
    this.pageContent.title = "Individuele Coaching";
    this.pageContent.content = "Je bent een talentvolle vrouw, hebt grote ambities en streeft een leven na dat voldoening geeft. Maar wat is dat eigenlijk en hoe moet dat dan? We hebben zoveel keuzes en tegelijkertijd stellen we hoge eisen aan onszelf. Een fenomeen dat veel vrouwen maar al te goed kennen. Ben jij op het punt gekomen dat je beter richting wilt kunnen geven aan je leven? Worstel je met bepaalde obstakels en wil je leren hiermee om te gaan? Heb je dromen en/of doelen, maar lukt het je niet hier vorm aan te geven? Geef jezelf dan de ruimte om bewust aan de slag te gaan met jouw persoonlijke ontwikkeling. METHODE Door middel van verschillende methodieken gaan we aan de slag met jouw coachvraag. Doorgaans start het traject met een persoonlijkheidsassessment middels de Birkman methode. Van hieruit wordt je coachvraag aangescherpt en gaan we concreet aan de slag met de verworven inzichten. Tijdens het traject word je onder andere bewust van jouw (ineffectieve) patronen en leer  je hiermee om te gaan. In de laatste fase van het traject besteden we aandacht aan jouw verlangens en hoe je deze kan omzetten naar concrete doelen. De gemiddelde duur van een coachtraject zijn 6 sessies van anderhalf uur.";
  }

  ngOnInit() {
  }

}
