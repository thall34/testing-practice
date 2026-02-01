import { reverseString } from "./reverseString.js"

test("reverses sam to be mas", () => {
    expect(reverseString("sam")).toBe("mas")
})

test("reverses tyler to be relyt", () => {
    expect(reverseString("tyler")).toBe("relyt")
})

test("when reversing single letter, outputs the same letter", () => {
    expect(reverseString("b")).toBe("b")
})

test("returns null for a number", () => {
    expect(reverseString(34)).toBe(null)
})

test("returns null for an object", () => {
    expect(reverseString({})).toBe(null)
})

test("returns null for a blank string", () => {
    expect(reverseString("")).toBe(null)
})

test("reverses multiple words with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh")
})