

        var cifra = "";//acumulamos todo lo pulsado en la tecla correspondiente
        var acumulado = 0;
        var sumar = false;
        var restar = false;
        var multiplicar = false;

        function display_numeros(numero) {

            document.getElementById("display").value = cifra + numero;//concatenamos los numeros en cifra ya que es un string (texto) por eso lo concatena y podemos ir poniendo numeros uno despues de otro
            cifra = document.getElementById("display").value;
        }

        function suma() {


            if (restar == true) {

                acumulado = acumulado - parseInt(cifra);//cifra es un String, que es lo pasado por el Display, lo pasamos a int para sumarlo
                document.getElementById("display").value = acumulado;
            } else {
                acumulado = acumulado + parseInt(cifra);//cifra es un String, que es lo pasado por el Display, lo pasamos a int para sumarlo
                document.getElementById("display").value = acumulado;

            }

            cifra = "";
            sumar = true;
            restar = false;
            multiplicar = false;
        }

        function restamos() {

            if (sumar == true) {
                acumulado = acumulado + parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else {

                if (acumulado == 0) {
                    acumulado = parseInt(cifra);
                    document.getElementById("display").value = acumulado;

                } else {
                    acumulado = acumulado - parseInt(cifra);
                    document.getElementById("display").value = acumulado;
                }


            }
            cifra = "";
            restar = true;
            sumar = false;
            multiplicar = false;
        }

        function multiplicacion() {
            if (sumar == true) {
                acumulado = acumulado + parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else if (restar == true) {
                acumulado = acumulado - parseInt(cifra);
                document.getElementById("display").value = acumulado;
            } else {
                // Si acumulado es 0, asignamos cifra a acumulado
                if (acumulado == 0) {
                    acumulado = parseInt(cifra);
                } else {
                    acumulado = acumulado * parseInt(cifra);
                }
                document.getElementById("display").value = acumulado;
            }

            cifra = "";
            restar = false;
            sumar = false;
            multiplicar = true;
        }





        function igual() {

            if (sumar == true) {
                document.getElementById("display").value = acumulado + parseInt(cifra);
            } else if (restar == true) {
                document.getElementById("display").value = acumulado - parseInt(cifra);
            } else if (multiplicar == true) {
                document.getElementById("display").value = acumulado * parseInt(cifra);
            }
            acumulado = parseInt(document.getElementById("display").value);//almecenamos lo que tenemos en pantalla
            cifra = 0;//al ser 0, podemos inciar una nueva operacion.
        }

        function reset() {

            cifra = "";
            acumulado = 0;
            sumar = false;
            restar = false;
            multiplicar = false;
            document.getElementById("display").value = "0";
        }




