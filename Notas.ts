export default class Notas {
    private autor: object = {}; 
    private nota: string = "";
    private fecha: string = "";
    private tags: string[] = [''];

    public setAutor(a: object){
        this.autor = a;
    }
    public setNota(n: string){
        this.nota = n;
    }
    public setFecha(f: string){
        this.fecha = f;
    }
    public setTags(t: string[]){
        this.tags = t;
    }

    public getAutor() : object {
        return this.autor;
    }
    public getNota() : string {
        return this.nota;
    }
    public getFecha() : string {
        return this.fecha;
    }
    public getTags() : string[] {
        return this.tags;
    }

}




