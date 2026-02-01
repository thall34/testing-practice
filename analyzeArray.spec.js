import { analyzeArray } from "./analyzeArray.js"

test("outputs average of array of numbers correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4)
})

test("outputs max value of array of numbers correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8)
})

test("outputs min value of array of numbers correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1)
})

test("outputs length value of array of numbers correctly", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6)
})