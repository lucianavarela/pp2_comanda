import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Cliente } from 'src/app/models/Cliente';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Login } from 'src/app/models/login';
=======
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public miHttp: HttpService) { }

<<<<<<< HEAD
  public loguear(dataLogin: Login){
    
     return this.miHttp.httpPostL("clientes/login",dataLogin);
 
   }

=======
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
  public alta(dataCliente: Cliente){

    return this.miHttp.httpPostL("clientes/registrarCliente",dataCliente);
  
    }

  public listarRegistrados(){
      return this.miHttp.httpGetL("clientes/listarClientesRegistrados");
    }

  

}
