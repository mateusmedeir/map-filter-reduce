function mapSemThis(array){
    return array.map(item => {
        return item * 2
    })
}

const nums = [5, 8, 10, 15, 20]

console.log(mapSemThis(nums))