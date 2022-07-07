//import{personajes}from "./AccionPersonaje.js";

alert("BIENVENIDO AL JUEGO")

//alert("Introduce tu nombre de usuario, solo debe contener letras y debe superar los 8 caracteres")
        var usser=prompt("Introduce tu nombre de usuario, solo debe contener letras y debe superar los 8 caracteres")
        var sw=true
      //  console.log("Esta seguro que su nombre de usuario sea",usser,".De ser asi introduce un si, de lo contrario un no")
        var res=prompt(`Esta seguro que su nombre de usuario sea ${this.usser} .De ser asi introduce un si, de lo contrario un no`).toUpperCase()
        if(res==="SI"){  
            alert(`BIENVENIDO ${usser} AL JUEGO `)
            
            //var op=Number.isInteger(prompt("Opciones del menú:\n1.-Inicio de Partida\n2.-Ayuda\n3.-Salir"))
            var op=1
           menu(op)
            
         }
        else if(res==="NO"){  
            do{
                usser=prompt("Introduce tu nombre de usuario, solo debe contener letras y debe superar los 8 caracteres")
       
                res=prompt(`Esta seguro que su nombre de usuario sea ${this.usser} .De ser asi introduce un si, de lo contrario un no`).toUpperCase()
        
                if(res==="SI")
                {
                     sw=false
                   break;
                }
                else if(res!="SI" && res!="NO"){
                    alert("Recuerda introducir una respuesta de un [si/no]")
                    sw=true
                }
                else if(res==="NO"){
                    usser=prompt("Introduce tu nombre de usuario, solo debe contener letras y debe superar los 8 caracteres")
                    r=prompt(`Esta seguro que su nombre de usuario sea ${this.usser} .De ser asi introduce un si, de lo contrario un no`).toUpperCase()
                    if(sw==="SI"){sw=false}
                    else{
                        sw=true
                    }    
                
                    break;
                }
               
            }while( sw===true);
            alert(`BIENVENIDO ${usser} AL JUEGO DE LAS TAREAS DE HERCULES `)
            var op = parseInt(prompt("Opciones del menú:\n1.-Inicio de Partida\n2.-Ayuda\n3.-Salir"))
            menu(op)
            
        }
       /*else{
        alert("Introduce como respuesta un [si/no]")
        if(res==="SI"){
            alert(`BIENVENIDO ${usser} AL JUEGO DE LOS 12 TRABAJOS DE HERACLES `)
            
         }
        else if(res==="NO"){  var sw=true
            do{
                if(res==="NO")
                {
                    usser=prompt("Introduce tu nombre de usuario, solo debe contener letras y debe superar los 8 caracteres")
                    sw=false
                    var r=prompt(`Esta seguro que su nombre de usuario sea ${this.usser} .De ser asi introduce un si, de lo contrario un no`).toUpperCase()
                    
                }
               
            }while( sw);
            alert(`BIENVENIDO ${usser} AL JUEGO DE LOS 12 TRABAJOS DE HERACLES `)
            
        }
        //usser=prompt("Introduce tu nombre de usuario, solo debe contener letras y debe superar los 8 caracteres")
                   
      //  var r=prompt(`Esta seguro que su nombre de usuario sea ${this.usser} .De ser asi introduce un si, de lo contrario un no`).toUpperCase
        //console.clear();
       }*/
        /* if( usser.length==8 && usser.toUpperCase){
            
      alert("Para la elección de personajes debe escoger el primer caracter del nombre. Los personaje son: \n"+" Cazador \n"+"Liebre \n"+"Tortuga \n")  
     var dato=prompt("Seleccione su personaje").toLowerCase()
    jugador(dato)
    alert("Para la elección de estación del año debe escoger el primer caracter de dicha estación.")
   var estacionn=prompt("Elija la estación del año")
   estacion(estacionn)
   UstedEs(usser,dato, estacionn)
   }
        else{
            alert("Intentelo de nuevo")
        }*/
    function menu(opc){
       // alert("Opciones del menú:\n:1.-Inicio de Partida\n2.-Ayuda\n3.-Salir")
       
       switch(opc)
        {
            case 1:
                var p1 =parseInt(prompt("Seleccione un número para su personaje:\n 1.Herculés\n 2.Zeus"))
                personaje(p1);
               
                break;
            case 2:
                console.log("Los doce trabajos de Heracles o Hércules.Para cada acción existe un color que la define,de la siguiente forma.: \n")
                console.log("%c EL color verde significa exito en la misión","color: green")
                console.log("%c El color rojo significa fracaso","color: red")
                console.log("%c El color azul seguir intentando","color: blue")    
                break;
            case 3:
                console.log("Finalizaste el juego")    
                break;
            default:
               console.log("Hasta pronto");
            }
    }   
    function personaje(p1){
        switch(p1){
            case 1:
                partidaH()
                break
            case 2:
                partidaZ()    

        }
    }
    function partidaH( ){
        //console.log("Una profecia decia que el primer bisnieto de Perceo, seria rey de la ciudad  gloriosa de Miscenas.Celosa la diosa Era decide enviar unas dos serpientes venenosas a la cuna para matar al bebé\n. Asi la madre de hercule despierta asustada por los llantos del hermano de Hercules que era Ificles, viendo asi al pequeño Herculés con una cobra muerta en cada mano, temiendo sufrir represarias de la diosa su madre abandona al niño en el bosque.\nSiendo este encontrado por Atenea y Era.Asi al ver al peuqeño niño la Diosa Era sin saber que se trataba del pequeño Hercules lo amamanta dando origen a la via lactéa. \nAl entregar a su madre al pequeño niño Era se topa con la sorpresa que se trataba del peuqeño Herculés.Zeus habia proclamado que el primer nieto del linaje Perseo hereadaria el trono de miscenas pero la diosa era celosa al ver que hercules tendria tanto siendo el tan poco.Al pasar el tiempo Herculés forma una familia , pero poco duraria la felicidad. Ya que la diosa Era implanta la locura en Hercules haciendo que el mismo matará a toda su familia, al salir de este trance herculés s da cuenta lo que hizo y se exilia por lo que hizo, al pasar los años el lograr sanar. A hercules despues de ese tiempo se le impuso estar al servicio de su primo Euristeo Rey de Miscenas.\nAsi se le da una tras otras tarea para poder estar seguro el rey de que hercules no pudiera tomar el poder....  \n ")
      console.log("En tu primera tarea ayudando al heroe hercules tendras que ...")
        console.log("%c 1. Matar al león de Nemea.\n...\nEste león gigante aterrorizaba los bosuqe de Argolia tal bestia atacó los rebaños de la región, se decia que la bestia era hija del monstruoso tifón y la maligna equilna y asi hubo rumores que su cuero era invulnerable a las armas tradicionales. Hercules armado con arco y flecha, y un garrote para cazar a esta criatura.\nTras buscar en el bosque de Nemea lo encontro en una cueva y desde el fondo de la cueva se escuchaba el grujido de esta criatura.","color: pink")
        console.log("----------------------------------------------------------")
      console.log(" Cual arma elejirias para poder ayudar a Hércules ")
      console.log("%c Elije:[arco y flecha, garrote, brazos, una soga]","color: green")
      
        let arma =prompt("").toUpperCase()
        let nivel=0
        let cond=1
        if(cond===0){
            console.log( "%c ***************PRIMER NIVEL*************** ","color: orange")
      
        }
        do{
        if(arma==="ARCO Y FLECHA" || arma ==="GARROTE" || arma==="SOGA"){
            arma =prompt("").toUpperCase()
            console.log("%c No funciona el arma cambia a otra","color: red")
            cond=0
        }
        else if(arma==="BRAZOS"){
            console.log("%c Al elejir el arma se podra tomar a la criatura y poder contenerla","color: green")
            console.log("Haciendo uso de las garras del animal Hercules logro arrancarle el cuero y regreso a Miscena .Euristeo vio a Hercules acercarse vestido  con la piel de animal temiendo po su vida se excondio detras de un bastil de metal y asi .Hercules completo su primer trabajo")
            console.log("Exito!!!. Venciste tu primera tarea")
            console.log("%c *********************************************","color: orange")
            nivel=nivel+1
            cond=1
        }
        else if( arma!="ARCO Y FLECHA" || arma !="GARROTE" || arma!="SOGA" || arma!="BRAZOS"){
            console.log("%c No funciona el arma . Cambia a otra","color: red")
            arma =prompt("").toUpperCase()
            cond=0
        }
       }while(cond===0);
        

        
        if(nivel===1){
            console.log( "%c ***************SEGUNDO NIVEL*************** ","color: orange")
      
            console.log("En tu segunda tarea debes ayudar a matar a Hidra")
            console.log("El rey Euristeo determino a Hercules que como su segundo trabajo deberia terminar con una criatura quien era el hijo de tifon y equina y se lo conocia como Hidra.\nHercules junto a su sobrino Jolao que era su inseparable compañero salieron al encuentro de Hidra.En el camino se encuentran con una aldea echa pedazos asi llegan al siniestro pantano de lerna quien vivia dentro de uan cueva.")
            console.log("----------------------------------------------------------")
            let arma2=prompt(" Que arma elejirias para sacar a Hidra de su cueva [barrote, arco y flecha]").toUpperCase()
            
            do{
                if(arma2==="BARROTE"){
                    console.log("%c No funciona el arma cambia a otra","color: red")
                    console.log("Hidra no sale")
                    arma2 =prompt("Vuelve a ingresar").toUpperCase()
                    cond=0
                }
                else if(arma2==="ARCO Y FLECHA"){
                    console.log("Hidra salio, esta furiosa")
                    ataqueCriatura()
                    nivel=nivel+1
                    cond=1
                }
                else if( arma!="ARCO Y FLECHA" || arma !="BARROTE"  ){
                    console.log("%cVuelve a ingresar","color: red")
                    arma =prompt("VUELVE").toUpperCase()
                    cond=0
                }
               }while(cond===0);
            
          console.log("%c ****************","color: orange")
            
        }
        else if(nivel===2){
            console.log( "%c ***************TERCER NIVEL*************** ","color: orange")
      
            console.log("Ya estas en tu tercera tarea, lo haz hecho bien.Ahora ayudaras a encontrar a dos criatura pero estas vez deberás traerlas vivas hasta el Rey")
            console.log("Despues de haber derribado a dos grandes oponentes como el leon de nemea e hidra. El plan de euristeo de acabar con la vida de hercules no funcionaba.Sin saber como derrotar a su primo este tendria que traer a la corza de serinea y el jabali de erimanto .Asi este aseguraria  que su primo hercules no volveria nuevamente")
            console.log("Esta corza era esplendida y tenia cuernos de oro y pezuñas de hierro. Esta criatura era unos de los cinco corzos sagrados creados por la diosa artemisa.\nFinalmente se la puede ver entonces para cazarla le lanza una flecha siendo asi capturada por hercules")
            console.log("Ahora falta capturar al jabali de edimanto. ")
            var jabali=prompt("¿Donde lo llevarias al animal para poder capturarlo?")
            switch(jabali){
                case "nieve":
                    console.log("La nieve se acumulo en el suelo y el gran jabali termino siendo vencido por la fatiga que daba aquel lugar ")
                    console.log("Entonces lo atrapaste")
                    nivel=nivel+1
                default:
                    console.log("Para nuestro heroe le resultara dificil este lugar")    
            }
        }
        else if(nivel>=3){
            console.log( "%c ***************FINAL DEL JUEGO*************** ","color: orange")
      
            console.log("Haz ayudado satisfactoriamente a hercules con las tareas que fueron encomendadas por el Rey.")
            console.log(`%c Felicidades ${this.useer}ganaste el juego!!!`,"color: orange")
        }

    }
    function ataqueCriatura(){
        console.log("¿Qué arma usarias para aniquilar a Hidra? ")
        let armah=prompt("[garrote, brazos]").toUpperCase()
        let c=0
        do{
            if(armah==="GARROTE"){
                console.log("Lograste derribar a una de sus cabezas de Hidra")
                console.log("Espera no cantes victoria, oh... .Mira le sale otras dos cabezas.Detente te dice Jolao")
                console.log("Jolao te dice que mientras tu aplastes una cabeza el cauterizara la herida producida para que no salgan mas cabezas. Asi podran derrotarla.\n Al ver esto enfurecida la Diosa Era les envia un cangrejo gigante ...\n Al ver que aun con el plan de Jolao a la criatura le seguia saliendo dos cabezas mas. Entonces tu tomas la iniciativa de enterrar a la criatura. Pero espera aprecias ese aroma toxico que sale de la sangre de la criatura, creo que seria bueno sacarle algun uso no crees?\nAsi las flechas de hercules fueron mezcladas con esta sangre.")
            
                armah =prompt("").toUpperCase()
                c=1
            }
            else if(armah==="BRAZOS"){
                console.log("No esta funcionando, dado que es un monstruo gigante y no hay forma de subir a este sin poder caer y morir")
               
                c=0
            }
            else if( armah!="BRAZOS" || armah !="GARROTE"){
                armah =prompt("").toUpperCase()
                console.log("%cVuelve a ingresar","color: red")
                c=0
            }
           }while(c===0);


       
    }
    function partidaZ( ){
        console.log("Una profecia decia que el primer bisnieto de Perceo, seria rey de la ciudad  gloriosa de Miscenas.Celosa la diosa Era decide enviar unas dos serpientes venenosas a la cuna para matar al bebé\n. Asi la madre de hercule despierta asustada por los llantos del hermano de Hercules que era Ificles, viendo asi al pequeño Herculés con una cobra muerta en cada mano, temiendo sufrir represarias de la diosa su madre abandona al niño en el bosque.\nSiendo este encontrado por Atenea y Era.Asi al ver al peuqeño niño la Diosa Era sin saber que se trataba del pequeño Hercules lo amamanta dando origen a la via lactéa. \nAl entregar a su madre al pequeño niño Era se topa con la sorpresa que se trataba del peuqeño Herculés.Zeus habia proclamado que el primer nieto del linaje Perseo hereadaria el trono de miscenas pero la diosa era celosa al ver que hercules tendria tanto siendo el tan poco.Al pasar el tiempo Herculés forma una familia , pero poco duraria la felicidad. Ya que la diosa Era implanta la locura en Hercules haciendo que el mismo matará a toda su familia, al salir de este trance herculés s da cuenta lo que hizo y se exilia por lo que hizo, al pasar los años el lograr sanar. A hercules despues de ese tiempo se le impuso estar al servicio de su primo Euristeo Rey de Miscenas.\nAsi se le da una tras otras tarea para poder estar seguro el rey de que hercules no pudiera tomar el poder....  \n ")
       alert("Primera Batalla")
        console.log("1. Matar al león de Nemea.")


    }