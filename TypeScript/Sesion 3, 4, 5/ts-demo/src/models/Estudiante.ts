import { Curso } from "./Curso";

export class Estudiante {

    // Propiedades de clase
    nombre: string;
    apellidos?:string;
    cursos: Curso[];
    private ID: string = '123124';

    // Constructor
    constructor(nombre: string, cursos: Curso[], apellidos?:string){
        // Inicialziamos las propiedades
        this.nombre = nombre;
        if(apellidos){
            this.apellidos = apellidos
        }
        this.cursos = cursos;
    }

    get horasEstudidas (): number{

        let horasEstudiadas = 0;

        this.cursos.forEach((curso:Curso) => {
            horasEstudiadas += curso.horas;
        })

        return horasEstudiadas;

    }

    set ID_Estudiante (id: string){
        this.ID = id
    }

}