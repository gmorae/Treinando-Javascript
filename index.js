// exercicio 1
// Isabel comprou 300,00 reais em roupas. Ela adquiriu 8 peças no total.
// Qual foi o gasto médio por peça?
var roupa = parseInt(prompt("Digite a quantidade de roupas compradas"))
var dinheiro = parseFloat(prompt("Digite o total de gastos: "))
var total = dinheiro / roupa
document.write("A média de gasto por cada roupa é de: " + total + " reais ")

// exercicio 2
// Na compra de qualquer acessorio em loja o cliente receberá 10% de desconto.
// Crie uma soluçãp que leia o valor da compra e gere o valor com desconto
var valor = parseFloat(prompt("Digite o valor: "))
var desconto = 0.1
var descontoValor = valor * desconto
var total = valor - descontoValor
document.write("Neste produto você recebeu " + descontoValor + " reais de desconto e o produto saiu por: " + total)

// exercicio 3
// Uma lanchonete vende um tipo de combo por dia. Os combos possuem valores diferentes.
// Crie uma solução que leia o valor do combo, a quantidade de combo comprada e gere o total a ser pago pelo cliente
var combo = parseFloat(prompt("Digite o valor do combo: "))
var quant = parseInt(prompt("Digite a quantidade do pedido: "))
var total = combo * quant
document.write("O total que o deve ser pago pelo cliente é: " + total)

// exercicio 4
// Um prefessor precisa de um programa que leia 3 notas de um aluno e gere a média aritmética
var v1 = parseFloat(prompt("Digite o valor da v1: "))
var v2 = parseFloat(prompt("Digite o valor da v2: "))
var v3 = parseFloat(prompt("Digite o valor da v3: "))
var media = (v1 + v2 + v3) / 3
document.write("A média aritimetica que o aluno obteve foi de: " + media)

// exercicio 5
// Uma loja lançou uma promoção:
// Nas compras acima de R$2000,00 o cliente receberá 15% de desconto.
// Crie uma solução que leia o valor total da compra e gere o valor do desconto a ser recebido
var compra = parseFloat(prompt("Digite o valor da compra: "))
if (compra > 2000) {
    var desconto = 0.15
    var valorDesconto = compra * desconto
    var total = compra - valorDesconto
    document.write("O valor da sua compra com 15% de desconto é de: " + total)
} else {
    var falta = 2000 - compra
    if (falta == 1) {
        document.write("Sua compra é de " + compra + " reais e não alcançou o desconto, para o desconto falta " + falta + " real")
    } else {
        document.write("Sua compra é de " + compra + " reais e não alcançou o desconto, para o desconto falta " + falta + " reais")
    }
}

// exercicio 6
// Crie uma solução que leia a idade de uma pessoa e informe quantos meses de vida essa pessoa possui.
var idade = parseInt(prompt("Digite a sua idade: "))
var total = idade * 12
document.write("O total de meses que você viveu é: " + total + "meses")

// execicio 7
// Crie uma solução que leia a idade de uma pessoa e informe quantos dias de vida aprximado essa pessoa possui
// Descponsidere os anos bissextos.
var idade = parseInt(prompt("Digite a sua idade: "))
var dias = idade * 365
document.write("O total de meses que você viveu é: " + dias + "meses")

// exercicio 8
// Para auxiliar na campanha outubro rosa, crie uma solução onde o úsuario digite
// o seu sexo e gere as respostas:
// se o sexo for feminino: Faça o preventivo com maior facilidade.
// se não: Na campanha novembro azul você fará seus exames com maior facilidade
var sexo = prompt("Digite o seu sexo: ")
if (sexo != "feminino") {
    document.write("Na campanha novembro azul você fará seus exames com maior facilidade")
} else {
    document.write("Fça o preventivo com maior facilidade")
}

// exercicio 9
// Um time de futebol infantil está recrutando apenas jogadores de 10 anos de idade.
// Crie uma solução que leia a idade do candidato e o informe se pode ou não fazer parte do time.
var nome = prompt("Digite seu nome: ")
var idade = parseInt(prompt("Digite sua idade: "))
if (idade != 10) {
    document.write(nome + ", você não esta apto para participar do time")
} else {
    document.write(nome + ", você está apto para participar do time")
}

// exercicio 10
// Crie uma solução que verifique se o sabor do sorvete escolhido pelo cliente está em promoção.
// O seovete em promoção é baunilha.
// Se o cliente optar por baunilha informe-o que ele receberá o desconto se não ele não receberá.var sabor = prompt("Qual valor você gostaria de comer: ")
if (sabor != "baunilha") {
    document.write("Desculpe, com o sorvete de " + sabor + " não tem desconto")
} else {
    document.write("Parabéns, você escolheu o sabor de " + sabor + " e ganhou 20% de desconto")
}