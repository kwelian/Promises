
const edadIngreso =(17); //Dato quemado
const carnetIngreso = ('Fiscalia') //Dato quemado

const promesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(edadIngreso >= 18 && carnetIngreso == 'Fiscalia'){
            resolve('Puedes pasar, tu edad y credencial son validos')
        } else{
            reject('No puedes pasar, tu edad o credencial son invalidos')
        }

    },2000);
});

const promesaCumplida = (valor) =>{
    console.log(valor);
};

const promesaRechazada = (razonRechazo) =>{
    console.log(razonRechazo);
};

promesa.then(promesaCumplida, promesaRechazada);