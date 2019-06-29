export class User {
    private mail: String;
    private perfil: String;
    private sexo: String;
    /**
     *
     */
    constructor(mail: string, perfil: string, sexo: string) {
        this.mail = mail;
        this.perfil = perfil;
        this.sexo = sexo;
    }
}
