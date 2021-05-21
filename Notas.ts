export default class Notas {
    private autor: object = {}; 
    private nota: string = "";
    private fecha: string = "";
    private tag: string[] = [''];

    public setAutor(a: object){
        this.autor = a;
    }
    public setNota(n: string){
        this.nota = n;
    }
    public setFecha(f: string){
        this.fecha = f;
    }
    public setTag(t: string[]){
        this.tag = t;
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
    public getTag() : string[] {
        return this.tag;
    }

}




