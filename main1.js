const natalia = {
    nombre: "Natalia",
    age: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y css",
        "Curso práctico de HTML y css",
    ],
    //aprobarCurso = function(nuevoCursito){this.cursosAprobados.push(nuevoCursito);}
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
};

// Hacer que Natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsibe design");


// Creación de un prototipo
function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    //this.aprobarCurso = function(nuevoCursito){this.cursosAprobados.push(nuevoCursito);}
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

const juanita = new Student("jaunita", 15, ["Curso de introducción de Videojuegos", "Curso de creación de personajes"]);


// Prototipos con la sintaxis de clases
class Student2{

    constructor({name, age, twitter, instagram, facebook, cursosAprobados = [], email}){
        this.name = name;
        this.age = age;
        this.email = email;
        this.cursosAprobados = cursosAprobados;
    }
    
    /*constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }*/

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }

}

//const miguelito = new Student2("Miguel", 28, ["Curso de análisis", "Curso de principios"]);

// Con un objeto literal, se pueden poner los atributos desordenados
const miguelito = new Student2({
    email: "miguelito@gami.com",
    cursosAprobados: ["Curso de análisis", "Curso de principios"],
    name: "Miguel", 
    age: 28, 
});

