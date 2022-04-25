//Written by: Ivan Vaquero;
//Title: Aumento de sueldo;
//Declarations of variables;
let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");

let valor1: number = 0;
//Main***********************************************************************
btnEnviar.addEventListener("click", () => {
  //It runs when you press submit button.
  valor1 = Number(dato1.value);
  console.log("El valor 1 es: " + valor1);
  if (valor1 <= 15000) {
    alert("Sueldo actual: " + valor1);
    alert("Sueldo con aumento del 20%: " + valor1 * 1.2);
  }
  if (valor1 > 15000 && valor1 < 20001) {
    alert("Sueldo actual: " + valor1);
    alert("Sueldo con aumento del 10%: " + valor1 * 1.1);
  }
  if (valor1 > 20000 && valor1 < 25001) {
    alert("Sueldo actual: " + valor1);
    alert("Sueldo con aumento del 5%: " + valor1 * 1.05);
  }
  if (valor1 > 25000) {
    alert("Sueldo actual: " + valor1 + " usted no tiene aumento");
  }
  console.log("los buenos empleados están en huelga");
});
//End***************************************************************
