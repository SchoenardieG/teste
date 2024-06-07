function valorPAGO(metodo){

    let item = 100

    if(metodo==="À vista Débito"){
        preco = item -(item/100)*10
    } else if(metodo==="À vista Dinheiro" || metodo === "PIX"){
        preco = item - (item/100)*15
    } else if(metodo==="duas vezes"){
        preco = item
    } else if(metodo==="Acima de duas vezes"){
        preco = item + (item/100)*10
    }

    return `O preço do item se tornou ${preco}`
}

console.log(valorPAGO("Acima de duas vezes"))