function analyzeArray(array) {
    let min = array.reduce((acc, curr) => (acc < curr ? acc : curr))
    let max = array.reduce((acc, curr) => (acc > curr ? acc : curr))
    let total = array.reduce((acc, curr) => acc + curr)

    let object = {
        average: total / array.length,
        max: max,
        min: min,
        length: array.length
    }

    return object
}

export { analyzeArray }