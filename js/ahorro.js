
 

const calculo = () => {
    const dineroAAhorrar = document.getElementById('dinero');
    const valueDinero = dineroAAhorrar.value;

    const hoy = new Date();

    const fecha = document.getElementById('fecha')
    const valueFecha = new Date(fecha.value);

    const milisegundosDias = 24 * 60 * 60 * 1000;

    const milisegundosTranscurridos = Math.abs(valueFecha.getTime() - hoy.getTime())
    const dias = Math.round(milisegundosTranscurridos / milisegundosDias)
    const mes = Math.round(dias / 30);

    const ahorroPorMes = valueDinero / mes ;
    const ahorroPorDia =Math.round(valueDinero / dias);

    const resultadoMensaje = document.getElementById('resultado');
    

    if(hoy < valueFecha && ahorroPorMes == Infinity) {
        resultadoMensaje.innerText = `Por dia usted debería ahorrar $${ahorroPorDia} 
        `

    } else if(hoy < valueFecha) {
        

        
        resultadoMensaje.innerText = `Por mes usted debería ahorrar $${ahorroPorMes} 
        o por día unos $${ahorroPorDia}`
        console.log(ahorroPorDia);
        console.log(ahorroPorMes);
    }
     else {
        const resultadoError = document.getElementById('error')
        resultadoError.innerText = `Por favor coloca una fecha futura`
        
    }
    
}