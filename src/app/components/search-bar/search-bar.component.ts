import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  queHacer="¿Que quieres hacer?";
  ubi="Ubicacion";
  res=false;
  clas=false;
  nas=false;
  inter=false;

  constructor() { }

  ngOnInit(): void {
  }

}
