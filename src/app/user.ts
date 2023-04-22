export interface User {
    message: string;
    fname: string;
    lname: string;
    email: string;
    password: string;
    role: string;
    id_enseignant: number; // add this line
    id_etudiant : number;
    id: number;
    editing: boolean; // new property
}
  