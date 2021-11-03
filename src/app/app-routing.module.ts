import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalComponent } from './components/global/global.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'global', component: GlobalComponent  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
