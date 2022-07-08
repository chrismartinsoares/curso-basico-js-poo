/*const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter : "jfuandc",
        instagram : "jfuandc",
        facebook : undefined,
    },
    apprvedCourses: [
        "Curso definitivo de HTML y CSS",
        "Curso práctico de HTML y CSS"
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso práctico de HTML y CSS",
                "curso de responsive design"
            ]
        },
        {
            name: "Escuela de videojuegos",
            courses: [
                "Curso introducción a la producción de videojuegos",
                "Curso unreal engine",
                "curso de Unity 3d"
            ]
        }
    ]
}

const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter : "miguelitofeliz",
        instagram : "miguelito_feliz",
        facebook : undefined,
    },
    apprvedCourses: [
        "Curso DataBusiness",
        "Curso DataViz"
    ],
    learningPaths: [
        {
            name: "Escuela de desarrollo web",
            courses: [
                "Curso definitivo de HTML y CSS",
                "Curso práctico de HTML y CSS",
                "curso de responsive design"
            ]
        },
        {
            name: "Escuela de Data science",
            courses: [
                "Curso DataBusiness",
                "Curso DataViz",
                "Curso de Tableau"
            ]
        }
    ]
}*/

function videoPlay(id){
    const urlSecreta = "http://www.platziultrasecreto.com/" +id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "http://www.platziultrasecreto.com/" +id;
    console.log("Pausamos la url " + urlSecreta);
}

/*export*/ class PlatziClass{
    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }

    pausar(){
        videoStop(this.videoID)
    }
}















class Student{
    constructor({name, email, username, twitter = undefined, instagram = undefined, facebook = undefined, approvedCourses = [], learningPaths = []}){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            /*twitter: */ twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
};

class FreeStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos gratuitos");
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.lang !== "english") {
            this.approveCourse.push(newCourse);
        }else{
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
        }
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approveCourse.push(newCourse);
    }
}






class courses{
    constructor ({name, clases = [], isFree = false, lang = "spanish"}){
        this._name = name;
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }

    set name(nuevoNombrecito){
        if (nuevoNombrecito === "Curso Malito de programacion basica") {
            console.error("Webón");            
        }else{
            this._name = nuevoNombrecito;
        }
    }
}

class approvedCourses{
    constructor(name){
        this.name = name
    }
}

class learningPaths{
    constructor({name, courses = []}){
        this.name = name
        this.courses = courses
    }
}


const cursoProgBasica = new courses({
    name: "Curso gratis de programación básica",
    isFree: true,
})

const cursoDefinitivoHTML = new courses({
    name: "Curso definitivo de HTML y CSS"
})

const cursoPracticoHTML = new courses({
    name: "Curso práctico de HTML y CSS",
    lang: "english",
})

const escuelaWeb = new learningPaths({
    name: "Escuela de desarrollo web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
});
const escuelaData = new learningPaths({
    name: "Escual de Data Science",
    courses: [
        "Curso DataBusiness",
        "Curso DataViz"
    ]
});
const escuelaVgs = new learningPaths({
    name: "Escual de Videojugeos",
    courses: [
        cursoProgBasica,
        "Curso de Unity",
        "Curso de Unreal Engine"
    ]
});

const juan2 = new FreeStudent({
    name: "juanDC",
    username: "juandc",
    email: "juanito@gamil.com",
    twitter: "fjuandc",
    learningPaths: [
        "escuela Web",
        "Escuela Vgs",
        escuelaData
    ]
});

const miguelito2 = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelitofeliz@gamil.com",
    instagram: "miguelito_feliz",
});
