import { Component } from '@angular/core';
import { Noticia } from './noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  public noticias: Noticia[] = [
    {
      titulo: 'Shakira brilló en Bogotá',
      imagen: 'https://imagenes.eltiempo.com/files/image_1200_535/files/fp/uploads/2025/02/27/67c055941dbad.r_d.685-413-7624.jpeg',
      cuerpo: 'Se vivió la primera fecha del concierto de Shakira en Bogotá. La barranquillera llegó a la capital del país con su gira mundial ‘Las Mujeres Ya No Lloran World Tour’ y las redes sociales se inundaron con los mejores momentos de la presentación. Para muchos, el show de Shakira en el Estadio Nemesio Camacho el Campin es uno de los espectáculos más importantes del mundo que ha llegado a la capital, pues todas las boletas de la gira se agotaron en menos de lo esperado, llenando los escenarios más importantes de América Latina y Estados Unidos.',
      fecha: '27-02-2025'
    },
    {
      titulo: 'Racionamiento de agua en Bogotá',
      imagen: 'https://imagenes.eltiempo.com/files/image_1200_535/uploads/2025/02/12/67acb269b3fe6.png',
      cuerpo: 'El esquema de racionamiento de agua en Bogotá continuará este jueves 27 de febrero con cortes programados en varias localidades de la ciudad. La medida, implementada por la Empresa de Acueducto y Alcantarillado de Bogotá (Eaab), tiene como objetivo garantizar el suministro equitativo del recurso debido a los bajos niveles de los embalses. Según la Eaab, en esta jornada se aplicará el turno 2 del plan de ahorro hídrico, lo que significa que la suspensión del servicio afectará a barrios de las localidades de Fontibón, Engativá y la zona industrial de Cota. ',
      fecha: '12-02-2025'
    }
  ]

  nuevaNoticia: Noticia = {
    titulo: '',
    imagen: '',
    cuerpo: '',
    fecha: ''
  }

  validaciones: string[] = []

  public agregarNuevaNoticia(): void {
    this.validaciones = []
    if ( !this.nuevaNoticia.titulo ) this.validaciones.push('Falta el titulo')
    if ( !this.nuevaNoticia.imagen ) this.validaciones.push('Falta la imagen')
    if ( !this.nuevaNoticia.cuerpo ) this.validaciones.push('Falta el cuerpo de la noticia')
    if ( !this.nuevaNoticia.fecha ) this.validaciones.push('Falta la fecha')
    if ( this.validaciones.length ) {
      setTimeout(() => {
        this.validaciones = []
      }, 4000);
      return;
    }
    this.noticias.unshift({...this.nuevaNoticia});
    this.nuevaNoticia = {
      titulo: '',
      imagen: '',
      cuerpo: '',
      fecha: ''
    }
  }
}
