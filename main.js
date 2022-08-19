//1

let resultado;
function operacion(x,z){
   if (x<z){
        resultado=z<0
   }else{
        resultado=x*z
   }
	return resultado
}
operacion(9,7);
console.log(resultado);

//2
function valor(a){
    a = "5"
    return typeof(a)
}
console.log(valor())

//3

function operacion(a,b,c,d,e,f){
    sumtotal = a + b
    restatotal = sumtotal-c
    multitotal = restatotal*d
    divtotal = multitotal/e
    total = divtotal**f
	return total
}
console.log(operacion(2,4,6,8,10,12))

//4

function miarray(array){
    array=["juan","jose","julian","maria","marcos"];
    arrayDos=[];
    arrayDos = array.slice(-3)
	return arrayDos;
}
console.log(miarray())

//5

function myarray(array){
    array=["juan","jose","julian","maria","marcos"];
	return  array.sort();
}
console.log(myarray())

//6

const array=[1,2,2,2,4,4,5,6,9,8,7]
let b = 2

function msl(a,b){
    return a.filter(valor => (valor !=b))
} 
console.log(msl(array,b))

//7

const a = [2,4,6,8,10]
let suma = 0;
let prom = 0;

function sumado(a){
    for (let i = 0; i < a.length; i++) {
        suma += a[i];
    }
    return suma;
}
console.log(sumado(a))

function promedio(a){
    prom=(sumado(suma)/(a.length))
    return prom
} 
console.log(promedio(a))

//8

const objetUno= {
    nombre:'Marcos',
    apellido:'Montellano',
    email: 'monte123@gmail.com',

}

function ocho(objetUno, str){
    let prop = objetUno[str]
    return prop
};
console.log(ocho(objetUno,'apellido'))

//9

const gaseosa={
    coca:100,
    pepsi:200,
    manaos:50,
    fanta:250,
}

function nueve(gaseosa){
    let suma=0;
    for (const i in gaseosa) {
            suma+=gaseosa[i]
    };
	return suma
}
console.log(nueve(gaseosa))




