import { Component, OnInit } from '@angular/core';
import { tarea } from "./../Bea/tarea";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  clase: tarea[] = [{ nombre:'Anillo',
                      image: './../assets/Imagenes/amillo1.jfif',
                      descripcion:'Silver',
                      precio:400},

                  {nombre:'Anillo',
                  image: './../assets/Imagenes/anillo2.jfif',
                  descripcion:'Rosegold',
                  precio:350
                  },

                  {nombre:'Anillo',
                  image: './../assets/Imagenes/anillo3.jpg',
                  descripcion:'Silver',
                  precio:450
                  },
                  {nombre:'Anillo',
                  image: './../assets/Imagenes/anillo4.jpg',
                  descripcion:'Gold',
                  precio:250
                  },
                  {nombre:'Anillo',
                  image: './../assets/Imagenes/anillo5.jpg',
                  descripcion:'Plata',
                  precio:400
                  },
                  {nombre:'Anillo',
                  image: './../assets/Imagenes/anillo6.jpg',
                  descripcion:'Plata',
                  precio:350
                  }
                 ]; 
 

  constructor() { }

  ngOnInit(): void {
  }

}
