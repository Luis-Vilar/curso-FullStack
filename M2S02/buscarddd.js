function buscadorDeDDD(ddd){
    var ddd = parseInt(ddd)
    if(ddd >= 11 && ddd <= 19) return "São Paulo"
    else if(ddd == 21 || ddd == 22 || ddd ==24 ) return "Rio de Janeiro"
    else if(ddd == 27 || ddd == 28) return "Espírito Santo"
    else if(ddd >= 31 && ddd <= 35 || ddd >=37 && ddd <=38) return "Minas Gerais"
    else if(ddd >= 41 && ddd <= 46) return "Paraná"
    else if(ddd >= 47 && ddd <= 49) return "Santa Catarina"
    else if(ddd == 51 ||ddd >= 53 && ddd <= 55) return "Rio Grande do Sul"
    else if(ddd == 61) return "Distrito Federal/Goiás"
    else if(ddd == 62) return "Goiás"
    else if(ddd == 63) return "Tocantins"
    else if(ddd == 64) return "Goiás"
    else if(ddd == 65 || ddd == 66) return "Mato Grosso"
    else if(ddd == 67) return "Mato Grosso do Sul"
    else if(ddd == 68) return "Acre"
    else if(ddd == 69) return "Rondônia"
    else if(ddd == 71 ||ddd >= 73&& ddd <= 75|| ddd==77) return "Bahia"
    else if(ddd == 79) return "Sergipe"
    else if(ddd == 81 || ddd == 87) return "Pernambuco"
    else if(ddd == 82) return "Alagoas"
    else if(ddd == 83) return "Paraíba"
    else if(ddd == 84) return "Rio Grande do Norte"
    else if(ddd == 85) return "Ceará"
    else if(ddd == 86) return "Piauí"
    else if(ddd == 88) return "Ceará"
    else if(ddd == 89) return "Piauí"
    else if(ddd == 91 || ddd == 93 || ddd == 94) return "Pará"
    else if(ddd == 92 || ddd ==97) return "Amazonas"
    else if(ddd == 95) return "Roraima"
    else if(ddd == 96) return "Amapá"
    else if(ddd == 98 || ddd == 99) return "Maranhão"
    else return "DDD não encontrado"

}

module.exports = buscadorDeDDD