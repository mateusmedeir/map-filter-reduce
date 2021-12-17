function filtrarPares(array){
    return array.filter(item =>{
        return item % 2 === 0
    })
}

const nums = [2, 4, 5, 6, 7, 10, 13, 15, 20]

console.log(filtrarPares(nums))