let agora = new Date();
//para pegar a hora atual do sistema^
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <12){
    console.log('Bom Dia!');
}  else if(hora <18){
    console.log('Boa Tarde');
} else{
    console.log('Boa Noite');
}