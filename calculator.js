let calculator = {
    add: function(num1, num2) {
        let result = (typeof num1 !== "number" || typeof num2 !== "number") ? null : num1 + num2
        return result
    },

    subtract: function(num1, num2) {
        let result = (typeof num1 !== "number" || typeof num2 !== "number") ? null : num1 - num2
        return result
    },

    multiply: function(num1, num2) {
        let result = (typeof num1 !== "number" || typeof num2 !== "number") ? null : num1 * num2
        return result
    },

    divide: function(num1, num2) {
        let result = (typeof num1 !== "number" || typeof num2 !== "number") ? null : num1 / num2
        return result
    }
}

export { calculator }