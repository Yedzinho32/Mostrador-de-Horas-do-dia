function carregar(){

    var texto = window.document.getElementById("texto");
    var msg2 = window.document.getElementById("msg2");
    var msg1 = window.document.getElementById("msg1");
    var img = window.document.getElementById("imagem");
    var msg = window.document.getElementById("msg");

    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var dia_da_semana = data.getDay()

    
    console.log(dia_da_semana)
    switch(dia_da_semana){
        case 0:
            dia_da_semana = 'Domingo'
            break;
        case 1:
            dia_da_semana = 'Segunda-feira'
            break;
        case 2:
            dia_da_semana = 'Terca-feira'
            break;
        case 3:
            dia_da_semana = 'Quarta-feira'
            break;
        case 4:
            dia_da_semana = 'Quinta- feira'
            break;
        case 5:
            dia_da_semana = 'Sexta-feira'
            break;
        case 6:
            dia_da_semana = 'Sabado'
            break;
        default:
            break;
            
    }

    switch(mes){
        case 0:
            mes = 'Janeiro'
            break;
        case 1:
            mes = 'Fevereiro'
            break;
        case 2:
            mes = 'Marco'
            break;
        case 3:
            mes = 'Abril'
            break;
        case 4:
            mes = 'Maio'
            break;
        case 5:
            mes = 'Junho'
            break;
        case 6:
            mes = 'Julho'
            break;
        case 7:
            mes = 'Agosto'
            break;
        case 8:
            mes = 'Setembro'
            break;
        case 9:
            mes = 'Outubro'
            break;
        case 10:
            mes = 'Novembro'
            break;
        case 11:
            mes = 'Dezembro'
            break;
        default:
            break;
    }
    console.log(dia_da_semana)

    msg2.innerHTML = `Agora sao ${hora}: ${minutos}`
    msg1.innerHTML = `${dia} de ${mes} de ${ano}`
    msg.innerHTML = `Hoje e ${dia_da_semana}`

    if(hora>=0 && hora<12){
//Bom Dia
        document.body.style.background = '#68F0FC'
        texto.innerHTML = 'Bom Dia'
        img.src = 'img/Manha.jpeg'
    }
else if (hora>=12 && hora <18){
    //Boa Tarde
    document.body.style.background = '#a57f00'
    texto.innerHTML = 'Boa Tarde'
    img.src = 'img/Tarde.jpeg'
    }
else{
   //Boa Noite
   document.body.style.background = '#000044'
   texto.innerHTML = 'Boa Noite'
   img.src = 'img/Noite.jpeg'
}
}