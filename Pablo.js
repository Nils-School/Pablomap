alert("Hoi");

var bestelling;
var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;
var aantalsnacks = 0;
var portie8 = 0;
var portie16 = 0;

while (bestelling != "stop"){
    bestelling = prompt("Wat wil je drinken of eten","fris, bier, wijn of snacks ");

        if (bestelling=="fris"){
            aantalfris = aantalfris + parseInt(prompt("Hoeveel fris wil je","0"));
        }
        else if (bestelling=="bier"){
            aantalbier = aantalbier + parseInt(prompt("Hoeveel bier wil je","0"));
            console.log(aantalbier)
        }
        else if (bestelling=="wijn"){
            aantalwijn = aantalwijn + parseInt(prompt("Hoeveel wijn wil je","0"));
        }

        else if (bestelling =="snacks"){
            aantalsnacks = parseInt(prompt("Hoeveel bitterballen","8,16" ))
                if (aantalsnacks == "8"){
                    portie8 = portie8 + parseInt(prompt("Hoeveel keer wil je 8 bitterballen"))
                }

                else if (aantalsnacks == "16"){
                    portie16 = portie16 + parseInt(prompt("Hoeveel keer wil je 16 bitterballen"))
                    console.log(portie16);
                }
           
        }
    }


if (bestelling == "stop"){
     bonnetje();
}

function bonnetje(){
    prijsfris = parseInt(aantalfris)*2;
    prijsbier = parseInt(aantalbier)*3;
    prijswijn = parseInt(aantalwijn)*4;
    prijs8 = parseInt(portie8)*4;
    prijs16 = parseInt(portie16)*8;

   if(aantalfris != 0){ 
       document.write("Prijs voor "+ aantalfris+  " fris " + prijsfris + " euro. <br/>");
    }
    if(aantalbier != 0){
        document.write("Prijs voor "+ aantalbier+  " bier " + prijsbier + " euro. <br/>");
    }
    if(aantalwijn != 0){
        document.write("Prijs voor "+ aantalwijn+  " wijn " + prijswijn + " euro. <br/>");
    }
    if(portie8 != 0){
        document.write("Prijs voor "+ portie8+     " x 8 bitterballen "+ prijs8 + " euro. <br/>")
    }
    if(portie16 != 0){
        document.write("Prijs voor "+ portie16+    " x 16 bitterballen "+ prijs16 + " euro. <br/>")
    }
    
    
    var totaal = parseInt(prijsfris)
    totaal += parseInt(prijswijn)
    totaal += parseInt(prijs8)
    totaal += parseInt(prijs16)
   document.write("<br/> totaalbedrag: "+ totaal +" euro. <br/>");
}