
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const appRoutes: Routes = [
  { path: 'vehiculo', component: VehiculoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
