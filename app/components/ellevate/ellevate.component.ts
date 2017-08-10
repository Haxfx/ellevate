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
    this.pageContent.content = "We zijn allemaal tot op zekere hoogte gelijk en we zijn allemaal op onze eigen manier uniek. Wat ons uniek maakt, bestaat uit een combinatie van fysieke en mentale mogelijkheden, onze waarden en de drijfveren die zijn ontstaan op ons levenspad. Mensen die in contact komen met hun persoonlijke kracht, laten zich hierdoor leiden. Als je je bewust wordt van je eigen waarden, talenten en drijfveren, ben je beter in staat keuzes te maken voor die activiteiten en dat werk dat daadwerkelijk bij je past. Doen wat werkelijk bij je past, geeft je plezier, maakt je enthousiast en geeft je energie. Zodoende weet je gaandeweg steeds beter waar je passie ligt en kun je meer vanuit gedrevenheid je eigen leven leiden. ELLEVATE is een programma die jou helpt om jezelf beter te leren kennen. De professionals van ELLEVATE begeleiden je stap voor stap naar je missie en passie toe te werken. Dit doe je zowel in groepsverband met gelijkgestemde vrouwen als in eén-op-één sessies met een professionele coach. Laat hier je email adres achter om op de hoogte gehouden te worden van het programma van ELLEVATE.";
  }

  ngOnInit() {
  }

}
