import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { HttpBaseProvider } from '../http-base/http-base';
import { HTTP } from '@ionic-native/http/ngx';


/*
  Generated class for the AuthenticationServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthenticationServiceProvider {

  constructor(private MiAuth: AngularFireAuth,
    public afDB: AngularFireDatabase,
    public miHttp: HttpBaseProvider,
    public http: HTTP
    
   ) {

}

registerUser(email: string, pass: string) {
    return this.MiAuth.auth.createUserWithEmailAndPassword(email, pass)
  
}

singIn(email: string, pass: string) {
    return this.MiAuth.auth.signInWithEmailAndPassword(email, pass);
    
  }

  

logOut() {
    this.MiAuth.auth.signOut();
   this.logoutFromDatabase();
}

public logoutFromDatabase() {
    this.afDB.database.goOffline();
}





}
