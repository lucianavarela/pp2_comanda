import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encuesta } from 'src/app/models/encuesta';
import { HttpService } from '../http/http.service';
import { OperacionesPorSector } from 'src/app/models/operaciones_sector';

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
    puntuacion_mozo: number, puntuacion_cocinero: number, comentario: string, fecha: Date ): Promise<Object> {
    const request: Object = {
      codigoMesa: codigoMesa,
      idMozo: idMozo,
      puntuacion_mesa: puntuacion_mesa,
      puntuacion_restaurante: puntuacion_restaurante,
      puntuacion_mozo: puntuacion_mozo,
      puntuacion_cocinero: puntuacion_cocinero,
      comentario: comentario,
      fecha: fecha,
    };
    return this.miHttp.httpPostP('encuesta/registrar/', request);
  }
}
