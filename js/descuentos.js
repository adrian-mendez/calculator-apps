 const cupones = [
     { name: "cupon-15",
       descuento: 15,    
    },
    {
        name: "cupon-20",
        descuento: 20,

    },
    {
        name: "cupon-25",
        descuento: 25,
    },
      
 ];


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento

}

 function buttonDiscount() {
     const inputPrice = document.getElementById("inputPrice")
     const valuePrice = inputPrice.value; 

     const inputCoupon = document.getElementById("inputCoupon")
     const valueCoupon = inputCoupon.value;

     const isCouponValueValid = function (cupon) {
         return cupon.name === valueCoupon;
     }

     const userCoupon = cupones.find(isCouponValueValid)

    if(userCoupon) {
        const descuento = userCoupon.descuento;
        const precioConDescuento = calcularPrecioConDescuento(valuePrice, descuento);
    
        const porcentajeMensaje = document.getElementById("porcentajeMensaje");
        porcentajeMensaje.innerText = `Felicidades! Tu cupón es de ${descuento}%`;
    
        const resultP = document.getElementById("resultPrice");
        resultP.innerText = `El precio con descuento son: $ ${precioConDescuento}`;
    } else {
        const descuentoInvalido = document.getElementById("inputCoupon")
        const valueInvalido = descuentoInvalido.value;
        porcentajeMensaje.innerText = `Lo sentimos. Tu cupón ${valueInvalido} es inválido`;
    }
        
     
    }
 