import { capitalize } from "./capitalize.js"

test("capitalizes the s in sam", () => {
    expect(capitalize("sam")).toBe("Sam");
})

test("capitalizes the t in Tyler", () => {
    expect(capitalize("tyler")).toBe("Tyler");
})

test("capitalizes a single letter", () => {
    expect(capitalize("b")).toBe("B");
})

test("returns null for a number", () => {
    expect(capitalize(34)).toBe(null)
})

test("returns null for an object", () => {
    expect(capitalize({})).toBe(null)
})

test("returns null for a blank string", () => {
    expect(capitalize("")).toBe(null)
})

test("returns only the first character of the first word if multiple words are input", () => {
    expect(capitalize("hello world")).toBe("Hello world")
})