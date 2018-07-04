import { Institucion } from "../../../backend-server 01/planied-backend/src/institucion/institucion.entity";

export class Persona{
    constructor(
        public apellido: string,
        public nombre: string,
        public dni: string,
        public email: string,
        //public telefonos:Array<Telefono>,
        public direccion: string,
        public fechaNacimiento: string,
        public fotoPerfil?: string,
        //public cargo?: Array<Institucion>,
        //public instituciones: Array<Institucion>,
        public supervisor?: Persona,
        public estado?: boolean,
        public _id?: string
    ) {

    }
}