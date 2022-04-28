let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let ValorFinal

if (produtoA.internacional == true) {
    ValorFinal = produtoA.valor * 1.2
    console.log("O produto é internacional, e você irá pagar o total de R$", ValorFinal)

} else {
    ValorFinal = produtoA.valor * 1.12
    console.log("O produto é nacional, e você irá pagar o total de R$", ValorFinal)   
}
if (produtoB.internacional == true) {
    ValorFinal = produtoB.valor * 1.2
    console.log("O produto é internacional, e você irá pagar o total de R$", ValorFinal)

} else {
    ValorFinal = produtoB.valor * 1.12
    console.log("O produto é nacional, e você irá pagar o total de R$", ValorFinal)   
}
if (produtoC.internacional == true) {
    ValorFinal = produtoC.valor * 1.2
    console.log("O produto é internacional, e você irá pagar o total de R$", ValorFinal)

} else {
    ValorFinal = produtoC.valor * 1.12
    console.log("O produto é nacional, e você irá pagar o total de R$", ValorFinal)   
}