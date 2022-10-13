const listaDeFamilia = document.getElementById('familia-en-js')
const tareasFamiliares = document.getElementById('Tareas-js')

let familia = [
    {
        "nombre": "Matias Pereya",
        "tarea": ["Sacar la basura", "Llenar las botellas"]
    },
    {
        "nombre": "Tomas Pereya",
        "tarea": ["Llenar las botellas", "Acomodar"]
    },
    {
        "nombre": "Maximiliano Pereya",
        "tarea": ["Cocinar", "Asados"]
    },
    {
        "nombre": "Elizabeth Velazquez",
        "tarea": ["Acomodar", "Cocinar"]
    },
    {
        "nombre": "Jorge Pereya",
        "tarea": ["Asados", "Cocinar"]
    }
]

let familiaFuncion= familia

/* const tareas = familiaFuncion.map(function(persona){
    return persona.tarea
}).reduce(function(a,b){
    return a.concat(b)
 },[]).sort()
 //El sort modifica el array original
 
 tareasSinRepetir = new Set(tareas)
 */

//Con las flechas es lo mismo, hay que sacar el return y los corchetes.
//Aclaro que solo se puede usar cuando es un solo reglon

const tareas = familiaFuncion.map((persona) => persona.tarea).reduce((a, b) => a.concat(b), []).sort()

tareasSinRepetir = new Set(tareas)

//El reduce se utiliza para unir elementos de manera consecutiva,
//los desgloza y los une en uno solo.

/*  let listaDeTareas = tareas.reduce(function(a,b){
    return a.concat(b)
 },[])
console.log(listaDeTareas); */

tareasSinRepetir.forEach(function (tarea) {
    tareasFamiliares.innerHTML += `<option value="${tarea}">${tarea}</option>`
})

//El set hace que no se repitan los mismos elementos

/* tareasSinRepetir = new Set(tareas) */

//-----------------------------------------------------------------------//

//El filter llama a un afuncion que le va a decir si o no, segun eso
// se van a quedar los valores que pasen por la misma
let tareasFiltradas = familiaFuncion.filter(function (propiedad) {
    if (propiedad.tarea.includes("Asados") || propiedad.tarea.includes("Sacar la basura")) {
        return propiedad
    }
})

console.log(tareasFiltradas);


/* for (let i = 0; i < familia.length; i++) {
    intregadorAFamilia(familia[i])
} */

function intregadorAFamilia(persona) {
    listaDeFamilia.innerHTML += `<li>` + persona.nombre + `</li>`
}

//El map necestia si o si un return, esta te devuelve una nueva array y deja la origanal itacta,
//

let familiaMapeada = familiaFuncion.map(function (persona) {
    persona.nombre = `Soy ` + persona.nombre
    return persona
})
//El forEach necesita de parametro una funcion, recorre el array y
// ejecuta la funcion cada vez que se encuentra un elemento de la array 

familiaMapeada.forEach(intregadorAFamilia)

