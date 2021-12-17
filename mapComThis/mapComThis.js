function mapThis(array, thisArg){
    return array.map(function(item){
        return item * this.value
    }, thisArg)
}

const joao = {
    value: 5,
}
const maria = {
    value: 7,
}

const nums = [2, 4]

console.log('this -> joao', mapThis(nums, joao))

console.log('this -> maria', mapThis(nums, maria))