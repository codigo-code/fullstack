import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola mundo!';

  nombre_input: String;
  nombre: String;

  saludo(): void {
    this.nombre_input = this.nombre;
    console.log(this.nombre);
  }
}
