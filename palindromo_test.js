//Ejercicio 1
const palindromo = require('./Palindromo.js');

test ("roma", () => {
    expect(palindromo.palindromo("roma")).toBe(true);
} );

//2 escenario donde no ingrese nada FALSE
test ("Elemento vacio", () => {
    expect(palindromo.palindromo("")).toBe(true);
} );

//3 escenario donde lo que se ingresa no sea un texto, o peor aun, sea undefined FALSE
test ("Elemento undefined", () => {
    expect(palindromo.palindromo(undefined)).toBe(true);
} );

//Ejercicio 2
const palindromo2 = require('./Palindromo.js');

test ("amor", () => {
    expect(palindromo2.palindromo2("roma")).toBe(true);
} );

//2 escenario donde no ingrese nada FALSE
test ("Elemento vacio", () => {
    expect(palindromo2.palindromo2("")).toBe(true);
} );

//3 escenario donde lo que se ingresa no sea un texto, o peor aun, sea undefined FALSE
test ("Elemento undefined", () => {
    expect(palindromo2.palindromo2(undefined)).toBe(true);
} );