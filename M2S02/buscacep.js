const axios = require("axios");

 async function buscaCep(url){
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    return `Erro: ${error}`;
  }
};

/*
let cep = "88058355";
let url = `https://viacep.com.br/ws/${cep}/json/`;

buscaCep(url).then((response) => console.log(response));

*/
modules.exports = buscaCep;