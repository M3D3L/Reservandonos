import { Component, OnInit } from '@angular/core';


export interface Flag {
  value: string;
  viewValue: string;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  flags: Flag[] = [
    { value: 'Mexico', viewValue: '+52', img: 'assets/img/flags/Mexico.png' },
    { value: 'USA', viewValue: '+1', img: 'assets/img/flags/USA.png' },
    { value: 'Argentina', viewValue: '+54', img: 'assets/img/flags/Argentina.png' },
    { value: 'Brasil', viewValue: '+55', img: 'assets/img/flags/Brasil.png' },
    { value: 'Canada', viewValue: '+1', img: 'assets/img/flags/Canada.png' },
    { value: 'Chile', viewValue: '+56', img: 'assets/img/flags/Chile.png' },
    { value: 'Colombia', viewValue: '+57', img: 'assets/img/flags/Colombia.png' },
    { value: 'Ecuador', viewValue: '+593', img: 'assets/img/flags/Ecuador.png' },
    { value: 'Espana', viewValue: '+34', img: 'assets/img/flags/Espana.png' },

    { value: 'Paraguay', viewValue: '+595', img: 'assets/img/flags/Paraguay.png' },
    { value: 'Peru', viewValue: '+51', img: 'assets/img/flags/Peru.png' },

    { value: 'Venezuela', viewValue: '+58', img: 'assets/img/flags/Venezuela.png' },
  ];
  opened=false;
  openedOne=true;
  openedTwo=false;
  moneda=false;
  ubicacion=false;
  monedaValue="MXN";
  idioma="ESP";
  bandera="Mexico";
  reservaciones=false;
  clasicos=false;
  phoneNumber: null;







  constructor() { }

  ngOnInit(
  ): void {
  }

  click() {
    this.moneda=true
    this.ubicacion=false;
    return this.moneda;
    return this.ubicacion;

  }

  clickTwo() {
    this.ubicacion=true;
    this.moneda=false;
    return this.ubicacion;
    return this.moneda;

  }

  clickThree() {
    this.ubicacion=false;
    this.moneda=false;
    return this.ubicacion;
    return this.moneda;

  }




}
