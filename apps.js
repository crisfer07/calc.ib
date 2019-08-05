//variables
function calculo(){



    var TPI = parseInt(document.getElementById("TPI").value);
    var PI = parseInt(document.getElementById("PI").value);
        if (TPI>=PI){
            document.getElementById("resultadoI").value= TPI;
        }
        else if (TPI<PI){
            document.getElementById("resultadoI").value=PI;
        }
        else if (TPI>0){
            document.getElementById("resultadoI").value=TPI;
        }
        else if (PI>0){
            document.getElementById("resultadoI").value=PI;
        }
        else  document.getElementById("resultadoI").value="faltan datos";
             
        
    

    var TPD = parseInt(document.getElementById("TPD").value);
    var PD = parseInt(document.getElementById("PD").value);
        if (TPD>=PD){
            document.getElementById("resultadoD").value= TPD;
        }
        else if (TPD<PD){
            document.getElementById("resultadoD").value=PD;
        }
        else if (TPD>0){
            document.getElementById("resultadoD").value=TPD;
        }
        else if (PD>0){
            document.getElementById("resultadoD").value=PD;
        }
        else  document.getElementById("resultadoD").value="faltan datos";

    

    var HI = parseInt(document.getElementById("HI").value);
    var HD = parseInt(document.getElementById("HD").value);
        if (HI>=HD){
            document.getElementById("resultadoH").value= HI;
        }
        else if (HI<HD){
            document.getElementById("resultadoH").value=HD;
        }
        else if (HI>0){
            document.getElementById("resultadoH").value=HI;
        }
        else if (HD>0){
            document.getElementById("resultadoH").value=HD;
        }
        else document.getElementById("resultadoH").value="faltan datos";

var PAI = parseInt(document.getElementById("resultadoI").value);
var PAD = parseInt(document.getElementById("resultadoD").value);
var PAH = parseInt(document.getElementById("resultadoH").value);

var ITBI = PAI/PAH;
document.getElementById("resultadoITBI").value= ITBI.toFixed(2);
    
var ITBD = PAD/PAH;
document.getElementById("resultadoITBD").value= ITBD.toFixed(2);


if (isNaN(ITBI)) {
    document.getElementById("resultadoITBI").value= "Introduzca los datos";
};

if(isNaN(ITBD)){
    document.getElementById("resultadoITBD").value= "Introduzca los datos";
}

}

