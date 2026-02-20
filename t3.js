function analyzeSentence(sentence, word) {
    const trimmedSentence = sentence.trim();
    const charCount = trimmedSentence.split(" ").join("").length;
    const wordCount = trimmedSentence.split(" ").filter(s => s.length > 0).length;
    const reversedSentence = trimmedSentence.split(" ").reverse().join(" ");
    const containsWord = trimmedSentence.includes(word);

    return {
        characters: charCount,
        words: wordCount,
        reversed: reversedSentence,
        contains: containsWord
    };
}


console.log(analyzeSentence("Hello JavaScript world", "world"));
console.log(analyzeSentence("Write a function analyzeSentence", "for"));
console.log(analyzeSentence("  Too    many   spaces  ", "many"));
console.log(analyzeSentence("Hello, world!", "world"));