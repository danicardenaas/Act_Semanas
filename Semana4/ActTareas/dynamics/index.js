const boton = document.getElementById("btn"); //creación de constantes
const input = document.getElementById("input");
const materias = document.getElementById("materias");
const lista = document.getElementById("listaTareas");
const registro = document.getElementById("registro");
const div = document.getElementById("tareas");
var marca = document.createElement("span"); //creacion de elementos para ahí meter las tareas pendientes
var crearinput = document.createElement("input"); //texto de la materia nueva 
let pendientes=" tareas acabadas de ";
let nombreMateria = materias.value, otraMat=0, child=0, totalTareas=0, completadas=0, conteo=0; //variables utilizadas al rededor las funciones iterativas 
crearinput.innerHTML="<input class='texto' id='otra' type='text' placeholder='Nueva materia: '/>";
// intenté agregar la materia al select :(
// var = materiaselect = document.createElement("select"); 
// materiaselect.innerHTML="<option values='"+nombreMateria + "'>"+nombreMateria + "</option>"; 
//mi idea era dentro del evento en el que se verifica si se agrega otra materia o no--abajo 
let nom = crearinput.innerHTML; 

materias.addEventListener("change", (evento)=>
{
    nombreMateria = materias.value;
    if(nombreMateria=="Otra"){   
        registro.appendChild(crearinput);
        otraMat=1;
        child=1;
    }
    else{
        if(child==1)
        {
            registro.removeChild(crearinput); 
           child=0;
        }
        otraMat=0;
    }
});


boton.addEventListener("click", (evento)=>{
    var tarea = input.value;
    var noimprimir = 0; 
    if(input.value == "")
    {
            alert("Registra una tarea, por favor :) ");
    }
    else{
        if(tarea != "")
        {
            if(otraMat != 1){
                lista.innerHTML += "<div id='"+conteo+"' class='tarea'>"+"<div id='ariba'><span class='boton'><strong>"+nombreMateria+"</strong></span>"+'</div>'+'<br><br><div id="izquierda">'+tarea+'</div><div id="derecha"><button class="boton"id="completar">Terminado</button><br><button class="boton" id="borrar">Borrar</button>'+'</div></div>';
                totalTareas++;
                if(completadas==1)
                    pendientes=" tarea pendiente de "
                else
                    pendientes=" tareas pendientes de "
                marca.innerHTML=completadas+pendientes+totalTareas;
                conteo++;
            }
            else
            {
                nombreMateria=crearinput.value;
                if((nombreMateria == "Biología") || (nombreMateria == "Pintura") || ( nombreMateria == "Computación") || ( nombreMateria ==  "Geografía") || (nombreMateria ==  "Astronomía"))
                {
                    alert("Esta materia ya existe"); //si sirve está verificación, solo no funciona cuando se repite la tarea aaa
                }
                // console.log(nombreMateria.value); 
                else
                {
                    nombreMateria="Otra";
                    lista.innerHTML += "<div id='"+conteo+"' class='tarea'>"+"<div id='ariba'><span class='boton'><strong>"+nombreMateria+"</strong></span></div>"+'<br><br><div id="izquierda">'+tarea+'</div><div id="derecha"><button class="boton"id="completar">Terminado</button><br><button class="boton" id="borrar">Borrar</button>'+'</div></div>';    
                    totalTareas++;
                    if(completadas==1)
                        pendientes=" tarea pendiente de "
                    else
                        pendientes=" tareas pendientes de "
                    marca.innerHTML=completadas+pendientes+totalTareas;
                    conteo++;
                }
            }
        } 
    
    }
    // console.log("Nueva"+crearinput.value); 
    // console.log("Existe"+nombreMateria.value); 
    // console.log("Materia"+materias.value); 
    console.log(nom); 
});
    
lista.addEventListener("click" , (evento)=>{

    if(evento.target.className== "boton")
    {
        id=evento.target.id; 
        if(id=="borrar"){
            
            if(evento.target.parentElement.children[0].innerHTML=="Sin terminar")
                completadas--;
         
            let i=totalTareas-1;
           
            while(i>evento.target.parentElement.parentElement.id)
            {
                var crea=lista.children[i].id;
                crea--;
                lista.children[i].id=crea;
                i--; 
            }
                
            evento.target.parentElement.parentElement.remove();
            totalTareas--;
                conteo--;
        }
        if(id=="completar"){
           
             if(evento.target.innerHTML=="Terminado")
            {
                completadas++;
                evento.target.parentElement.parentElement.setAttribute("style", "background-color: #4F93E3");
                evento.target.innerHTML= "Sin terminar";
            }
            else{
                completadas--;
                evento.target.parentElement.parentElement.setAttribute("style", "background-color: #4FE3CC");
                evento.target.innerHTML = "Terminado";
            }
        }
    }

    if(completadas==1)
        pendientes=" tarea pendiente de "
    else
        pendientes=" tareas pendientes de "
    marca.innerHTML=completadas+pendientes+totalTareas;
});
div.appendChild(marca);