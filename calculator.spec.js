import { calculator } from "./calculator.js"

test("sums 1 and 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3)
})

test("sums positive and negative numbers correctly", () => {
    expect(calculator.add(1, -2)).toBe(-1)
})

test("sums decimal numbers correctly", () => {
    expect(calculator.add(1.5, 2.5)).toBe(4)
})

test("returns null if trying to add a string to a number", () => {
    expect(calculator.add("string", 2)).toBe(null)
})

test("subtracts 1 from 2 to equal 1", () => {
    expect(calculator.subtract(2, 1)).toBe(1)
})

test("subtracts positive and negative numbers correctly", () => {
    expect(calculator.subtract(-1, 2)).toBe(-3)
})

test("subtracts decimal numbers correctly", () => {
    expect(calculator.subtract(3.5, 2.5)).toBe(1)
})

test("returns null if trying to subtract a string to a number", () => {
    expect(calculator.subtract("string", 2)).toBe(null)
})

test("multiplies 2 and 3 to equal 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6)
})

test("multiplies positive and negative numbers correctly", () => {
    expect(calculator.multiply(2, -2)).toBe(-4)
})

test("multiplies decimal numbers correctly", () => {
    expect(calculator.multiply(4, 2.5)).toBe(10)
})

test("returns null if trying to multiply a string by a number", () => {
    expect(calculator.multiply("string", 2)).toBe(null)
})

test("divides 10 by 2 to equal 5", () => {
    expect(calculator.divide(10, 2)).toBe(5)
})

test("divides positive and negative numbers correctly", () => {
    expect(calculator.divide(10, -2)).toBe(-5)
})

test("divides decimal numbers correctly", () => {
    expect(calculator.divide(10, 2.5)).toBe(4)
})

test("returns null if trying to divide a string by a number", () => {
    expect(calculator.divide("string", 2)).toBe(null)
})