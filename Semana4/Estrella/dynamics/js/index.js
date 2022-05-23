const canvas = document.getElementById("estrellita"); 
const ctx = canvas.getContext("2d"); 
const color = document.getElementById("color"); 
const lados = document.getElementById("lados");
const picos = document.getElementById("picudo"); 
const relleno =  document.getElementById("relleno");

console.log(color.value); 
console.log(lados.value); 
console.log(picos.value); 
console.log(relleno.value);

function rellenar(){
        if(relleno.value == "off")
                ctx.stroke(); 
                
        else if(relleno.value == "on")
                ctx.fill(); 
}; 

function estrellita(){

        var tamañoCanvas = 500; 
        var centroX = tamañoCanvas/2; 
        var centroY = tamañoCanvas/2; 
        var radioInterior = (picos.value); 
        var radioExterno = 250; 
        var numLados = (lados.value)*2; 
        var grados = (Math.PI * 2) /numLados; 
        var radio; 
        var angulo; 
        var ejex, ejey; 

        ctx.lineWidth = 4; 
        ctx.strokeStyle = color.value;
        ctx.fillStyle = color.value; 
        
        ctx.beginPath(); 
        
        for(var i = 0; i< numLados; i++)
        {
                if(i%2==0) //radio de la picudez 
                        radio = radioInterior; 
                else // radio de los vértices de la estrella
                        radio = radioExterno; 

                angulo = i * grados; //ángulos para rotar
                ejex = radio * Math.cos(angulo) + centroX; 
                ejey = radio * Math.sin(angulo) + centroY; 
                ctx.lineTo(ejex, ejey); 
        }
        ctx.closePath(); 
        rellenar(); 
};

estrellita(); 
//rellenar(); 
color.addEventListener("change", (evento)=>
{
        canvas.width = 500;
        estrellita(); 
});

lados.addEventListener("change", (eventos) =>
{
        if(lados.value>=4 && lados.value <= 30)
        {
                canvas.width = 500; 
                estrellita(); 
        }
        else 
                alert("No puedo hacer una estrella con esos lados :("); 
});

picos.addEventListener("change", (eventos) =>
{
        canvas.width = 500; 
        estrellita(); 
});

relleno.addEventListener("change", (evento) =>
{
        canvas.width = 500; 
        if(relleno.value == "off")
                relleno.value = "on";
                
        else if(relleno.value == "on")
                relleno.value = "off"; 
        estrellita(); 
});
