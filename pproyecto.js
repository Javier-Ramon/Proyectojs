let Correctos = 0;
let Incorrecto = 0;


  
alert (`Bienvenidos al Examen de Matematicas`);


 let Ejercicio1 = prompt(`Ingresa la opcion correcta!

                    Cuanto es 25 x 25
                    
                             1) 500
                             2) 150
                             3) 625`);
while (Ejercicio1 != 1 && Ejercicio1 != 2 && Ejercicio1 != 3){
    alert (`Solo podes ingresar las opciones 1 - 2 o 3`) ;
    Ejercicio1 = prompt(`Ingresa la opcion correcta!

                    Cuanto es 25 x 25
                    
                             1) 500
                             2) 150
                             3) 625`);

}

if (Ejercicio1 == 3) {
    alert (`Respondiste excelente!!`);
    Correctos ++;
} else if (Ejercicio1 !=3){
    alert (`Respuesta Incorrecta`);
    Incorrecto ++;
}
let Ejercicio2 = prompt (`Ingresa la opcion correcta!

                            Cuanto es 100 + 25 x 5

                                    1) 225
                                    2) 625
                                    3) 125`);

         
while (Ejercicio2 != 1 && Ejercicio2 != 2 && Ejercicio2 != 3){
alert (`Solo podes ingresar las opciones 1 - 2 o 3`) ;
Ejercicio2 = prompt(`Ingresa la opcion correcta!

                            Cuanto es 100 + 25 x 5

                                     1) 225
                                     2) 625
                                     3) 125`);

}

if (Ejercicio2 == 1) {
alert (`Respondiste excelente!!`);
Correctos ++;
} else if (Ejercicio2 !=1){
alert (`Respuesta Incorrecta`);
Incorrecto ++;
}
let Ejercicio3 = prompt (`Ingresa la opcion correcta!

                            Cuanto es 800 / 2 - 15

                                    1) 400
                                    2) 395
                                    3) 385`);

         
while (Ejercicio3 != 1 && Ejercicio3 != 2 && Ejercicio3 != 3){
alert (`Solo podes ingresar las opciones 1 - 2 o 3`) ;
Ejercicio3 = prompt(`Ingresa la opcion correcta!

                            Cuanto es 800 / 2 - 15

                                     1) 400
                                     2) 395
                                     3) 385`);

}

if (Ejercicio3 == 3) {
alert (`Respondiste excelente!!`);
Correctos ++;
} else if (Ejercicio3 !=3){
alert (`Respuesta Incorrecta`);
Incorrecto ++;
}
let Ejercicio4 = prompt (`Ingresa la opcion correcta!

                            Cuanto es 1444 / 2 x 3

                                    1) 3166
                                    2) 2166
                                    3) 1566`);

         
while (Ejercicio4 != 1 && Ejercicio4 != 2 && Ejercicio4 != 3){
alert (`Solo podes ingresar las opciones 1 - 2 o 3`) ;
Ejercicio4 = prompt(`Ingresa la opcion correcta!

                            Cuanto es 1444 / 2 x 3

                                     1) 3166
                                     2) 2166
                                     3) 1566`);

}

if (Ejercicio4 == 2) {
alert (`Respondiste excelente!!`);
Correctos ++;
} else if (Ejercicio4 !=2){
alert (`Respuesta Incorrecta`);
Incorrecto ++;
}

let Ejercicio5 = prompt (`Ingresa la opcion correcta!

                            Cuanto es 2024 / 2 

                                    1) 1012
                                    2) 1112
                                    3) 1312`);

         
while (Ejercicio5 != 1 && Ejercicio5 != 2 && Ejercicio5 != 3){
alert (`Solo podes ingresar las opciones 1 - 2 o 3`) ;
Ejercicio5 = prompt(`Ingresa la opcion correcta!

                            Cuanto es 2023 / 2 

                                     1) 1012
                                     2) 1112
                                     3) 1312`);

}

if (Ejercicio5 == 1) {
alert (`Respondiste excelente!!`);
Correctos ++;
} else if (Ejercicio5 !=1){
alert (`Respuesta Incorrecta`);
Incorrecto ++;
}
  
  if ( Correctos >= 3){
     alert ( `Felicitaciones Aprobaste el Examen!! Tuviste ${Correctos} Respuestas Correctas de 5!!`);
}else 
    alert (`Deberas rehacer el Examen Reprobaste :( Tuviste ${Incorrecto} Respuestas Incorrectas de 5`);



