import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';


const MaterialComponents =[
  MatExpansionModule,
  MatSelectModule,
  IvyCarouselModule,
  MatSidenavModule,
  MatDialogModule,

];


@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {

}
