
function estacion(param1){
   var varArray = [ "p", "v", "o", "i"]
   
    for(var index=0;index<varArray.length;index++)
    {
        var element=varArray[index];
        if(element==param1)
        {
            switch(param1)
            {
                case "p":
                    //alert("Ahora te encuentras en la estacion de primavera")
                    return "primavera"
                    break;
                case "v":
                   // alert("Ahora te encuentras en la estación de verano")
                    return "verano"
                    break;
                case "o":
                  //  alert("Ahora te encuentras en la estación de otoño")
                    return "otoño"
                    break;
                case "i":
                    //alert("Ahora te encuentras en la estación de invierno")
                    return "invierno"
                    break;        
                default:
                    alert("Estacion no existente")        
            }
           
        }
        
    }
}

function jugador(param1)
{
   var varArrayJ=["c","l","t"]
    for (var index=0;index<varArrayJ.length;index++) {
        var element=varArrayJ[index];
        if (element==param1) {
            switch(param1)
            {
                case "c":
                  //  alert("Usted es un cazador")
                    return "cazador";
                    break;
                case "l":
                    //alert("Usted es una liebre")
                    return "liebre";
                    break;
                case "t":
                  //  alert("Usted es una tortuga")
                    return "tortuga";
                    break;
                default:
                    alert("No elijio bien") 
                               
                
            }
        }
    }
}
function UstedEs(nom,param1, param2)
{ var nombre=nom;
    var j=jugador(param1);
  var stacion= estacion(param2);
  var resultado = window.confirm('¿Estas seguro de tu elección?');
  if (resultado === true) {
      window.alert('Ok.');
      alert("NOMBRE_USUARIO: "+nombre+"\n PERSONAJE: "+ j +" \n TEMPORADA: "+stacion+"\n\t\t :D BIENVENIDO !! ")
  } 

    
}
function AtrapaCazador()
{
    alert("El cazador habra atrapado un gran botin. Solo si es par")
        var botin=
}
