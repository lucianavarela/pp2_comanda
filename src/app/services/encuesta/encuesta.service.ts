import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Encuesta } from '../../models/encuesta';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  constructor(public miHttp: HttpService) {
  }

  public Listar(): Observable<Encuesta[]> {
    return this.miHttp.httpGetO<Encuesta[]>('encuesta/listar/');
  }

  public Registrar(codigoMesa: string, idMozo: number, puntuacion_mesa: number, puntuacion_restaurante: number,
    puntuacion_mozo: number, puntuacion_cocinero: number, comentario: string, fecha: string ): Promise<Object> {
    const request: Object = {
      codigoMesa: codigoMesa,
      idMozo: idMozo,
      puntuacionMesa: puntuacion_mesa,
      puntuacionRestaurante: puntuacion_restaurante,
      puntuacionMozo: puntuacion_mozo,
      puntuacionCocinero: puntuacion_cocinero,
      comentario: comentario,
      fecha: fecha,
    };
    return this.miHttp.httpPostP('encuesta/registrar/', request);
  }

  public Enviar( data : Encuesta){
    return this.miHttp.httpPostP('encuesta/registrar/', data);
  }
}
