import Autor from "./Autor";
import Notas from "./Notas";

let jorge = new Autor();
let nota1 = new Notas();

jorge.setNombre('jorge');
jorge.setBio('lorem');
jorge.setMail('jorgito@jorge.com');

nota1.setAutor(jorge);
nota1.setNota('lorem20');
nota1.setFecha('21/05/2021');
nota1.setTags(['ciencia ficcion', 'ensayo']);

//console.log(nota1);
