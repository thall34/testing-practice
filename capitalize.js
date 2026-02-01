function capitalize(word) {
    let result = (typeof word !== "string" || word === "") ? null : word.charAt(0).toUpperCase() + word.slice(1)
    return result
}

export { capitalize }