import { caesarCipher } from "./caesarCipher.js"

test("returns khoor when input is hello and shift factor is 3", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor")
})

test("returns mjqqt when input is hello and shift factor is 5", () => {
    expect(caesarCipher("hello", 5)).toBe("mjqqt")
})

test("returns abc when input is xyz and shift factor is 3", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc")
})

test("returns abc when input is vwx and shift factor is 5", () => {
    expect(caesarCipher("vwx", 5)).toBe("abc")
})

test("returns khoor zruog when input is hello world and shift factor is 3", () => {
    expect(caesarCipher("hello world", 3)).toBe("khoor zruog")
})

test("returns khOOr when input is heLLo and shift factor is 3", () => {
    expect(caesarCipher("heLLo", 3)).toBe("khOOr")
})

test("returns Khoor, Zruog! when input is Hello, World! and shift factor is 3", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})