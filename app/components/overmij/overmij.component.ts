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
    this.pageContent.alineaTitle1 = "Over mij";
    this.pageContent.alinea1 = "Waar ik het meest energie van krijg is leren over het leven. Met verwondering kan ik kijken naar hoe simpel, maar ook hoe complex het leven soms kan zijn. Hoe ieder vanuit zijn eigen wereldbeeld naar de wereld kijkt, denkend dat wat jij ziet, voelt of denkt, ook voor de ander geldt. Hoe ingewikkeld het kan zijn als je hier niet bewust van bent en wat een opluchting en vreugde het kan brengen als de oogkleppen afgaan."
    this.pageContent.alinea2 = "Dit bewustwordingsproces onderga ikzelf iedere dag weer en levert altijd nieuwe inzichten op, hoe groot of klein ook. Dit maakt het leven interessant en ik vind het mooi om dit proces met andere mensen aan te gaan. Als geen ander ken ik de zoektocht naar wat gelukkig maakt en voldoening geeft in het leven. Zo heb ik zelf ooit de keuze gemaakt om mijn succesvolle bedrijf te verkopen om me volledig te kunnen richten op het coachen van (young)professional vrouwen. Ieder mens is altijd in ontwikkeling  en daarom zal je jezelf steeds opnieuw moeten uitvinden. Ik heb gemerkt dat hoe beter je jezelf kent, hoe makkelijker het wordt om keuzes te maken die horen bij verandering in je leven."
    this.pageContent.alinea3 = "Wat ik binnen coaching belangrijk vind is veiligheid, openheid en vertrouwen; alles mag er zijn. Ik ben resultaatgericht en tegelijkertijd geef ik de ruimte die nodig is om te kunnen groeien. Ben jij toe aan een volgende stap in je leven? Of heb je een vraagstuk waar je zelf niet uitkomt? Neem dan vrijblijvend contact met mij op. ‘A journey of a thousand miles begins with a single step’"
  }

  ngOnInit() {
  }

}
