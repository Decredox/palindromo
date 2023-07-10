function palindromo(str){
    let antigo_str = str
    let cond;
    str=str.split("").reverse().join("")
    if(antigo_str.toLowerCase() == str.toLowerCase()){
   cond=`
   A palavra: ${antigo_str}. É palindroma.
   Resultado:${str}
   `
    }else{
    cond=`
    A palavra: ${antigo_str}. Não é palindroma.
    Resultado: ${str}.
    `
    }
    return console.log(cond)
}
palindromo("Natan")
