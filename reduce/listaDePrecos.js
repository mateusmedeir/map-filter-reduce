const lista = [
    {
        name: 'Frango',
        preco: 25,
    },
    {
        name: 'arroz',
        preco: 7,
    },
    {
        name: 'feijão',
        preco: 8,
    },
]

const saldoAtual = 100

function calcularSaldo(saldoAtual, lista){
    return lista.reduce((prev, current) =>{
        return prev - current.preco
    }, saldoAtual)
}

console.log(calcularSaldo(saldoAtual, lista))