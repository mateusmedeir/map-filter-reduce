function somarArray(array){
    return array.reduce((prev, current) =>{
        return prev + current
    })
}

const nums = [1, 2, 5 ,7, 10]

console.log(somarArray(nums))