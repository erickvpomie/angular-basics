import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Batman', 'Superman'];
  borrados: string[] = []

  borrarHeroe(){
    // this.heroes.pop();
    const heroeBorrado = this.heroes.shift();
    this.borrados.push(heroeBorrado);
    console.log(heroeBorrado);
  }



}
