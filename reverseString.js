function reverseString(word) {
    if (typeof word !== "string" || word === "") {
        return null
    }

    const breakString = word.split("")
    const reverseString = breakString.reverse()
    const newString = reverseString.join("")

    return newString

}

export { reverseString }