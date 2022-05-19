const boton = document.getElementById("btn-agregarTarea");
const materias = document.getElementById("materias");
const input = document.getElementById("input");
const lista = document.getElementById("listaTareas");
const registro = document.getElementById("registro");
const div = document.getElementById("pendientes");
var terminadas = document.createElement("span");
var nuevaTarea = document.createElement("input");
let texto=" tareas pendientes de ";
let nombreMateria = materias.value;
nuevaTarea.innerHTML="<input class='texto' id='otra' type='text' placeholder='Nombre materia nueva '/>";
let otraOpcion=0;
let child=0;
let totales=0;
let acabadas=0;
let index=0;
materias.addEventListener("change", (evento)=>
{
    if(nombreMateria=="Otra"){   
        registro.appendChild(nuevaTarea);
        otraOpcion=1;
        child=1;
    }
    else{
        if(child==1)
        {
            registro.removeChild(nuevaTarea); 
           child=0;
        }
        otraOpcion=0;
    }
});
boton.addEventListener("click", (evento)=>{
    var tarea = input.value;
    if(tarea != "")
    {
        if(otraOpcion != 1)
        {
            lista.innerHTML += "<div id='"+index+"' class='tarea'>"+"<div id='ariba'><span class='boton' id='SelectMateria'><strong>"+nombreMateria+"</strong></span>"+'<button class="boton" id="subir">Subir</button>'+'<button class="boton" id="bajar">Bajar</button></div>'+'<br><br><div id="izquierda">'+tarea+'</div><div id="derecha"><button class="boton"id="completar">Completado</button><br><button class="boton" id="borrar">Borrar</button>'+'</div></div>';
        } 
        else
        {
            nombreMateria=nuevaTarea.value;
            if(nombreMateria=="")
            {
                nombreMateria="Otra";
            }
            lista.innerHTML += "<div id='"+index+"' class='tarea'>"+"<div id='ariba'><span class='boton' id='SelectMateria'><strong>"+nombreMateria+"</strong></span>"+'<button class="boton" id="subir">Subir</button>'+'<button class="boton" id="bajar">Bajar</button></div>'+'<br><br><div id="izquierda">'+tarea+'</div><div id="derecha"><button class="boton"id="completar">Completado</button><br><button class="boton" id="borrar">Borrar</button>'+'</div></div>';
        }
        totales++;
        if(acabadas==1)
        {
            texto=" tarea pendiente de "
        }
        else{
            texto=" tareas pendientes de "
        }
        terminadas.innerHTML=acabadas+texto+totales;
        index++;
    }
    
});
lista.addEventListener("click" , (evento)=>{

    if(evento.target.className== "boton")
    {
        if(evento.target.id=="borrar"){
            
            if(evento.target.parentElement.children[0].innerHTML=="No completado")
            {
                acabadas--;
            }
            esteid=evento.target.parentElement.parentElement.id;
         
            let i=totales-1;
           
            while(i>esteid)
            {
               
                var nuevoid=lista.children[i].id;
                nuevoid--;
                lista.children[i].id=nuevoid;
            
                i--; 
            }
                
   
            evento.target.parentElement.parentElement.remove();
            totales--;
                index--;
        }
        if(evento.target.id=="completar"){
           
             
             if(evento.target.innerHTML=="Completado")
            {
                acabadas++;
                evento.target.parentElement.parentElement.setAttribute("style", "background-color:#f06c96; color:#800b0077");
                evento.target.innerHTML= "No completado";
            }
            else{
                acabadas--;
                evento.target.parentElement.parentElement.setAttribute("style", "background-color:antiquewhite; color:brown");
                evento.target.innerHTML = "Completado";
            }
        }
        


    }
    if(acabadas==1)
    {
        texto=" tarea pendiente de  "
    }
    else{
        texto=" tareas pendientes de  "
    }
    terminadas.innerHTML=acabadas+texto+totales;
    
});
if(acabadas==1)
{
    texto=" tarea pendiente de  "
}
else{
    texto=" tareas pendientes de  "
}
terminadas.innerHTML=acabadas+texto+totales;
div.appendChild(terminadas);