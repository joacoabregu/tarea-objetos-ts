class Autor {
    private nombre: string = "";
    private mail: string = "";
    private bio: string = "";

    public setNombre(n : string) {
        this.nombre = n;
    }

    public setMail(m : string) {
        this.mail = m;
    }

    public setBio(b : string) {
        this.bio = b;
    }

    public getNombre() : string {
        return this.nombre;
    }
    public getMail() : string {
        return this.mail;
    }
    public getBio() : string {
        return this.bio;
    }

}


