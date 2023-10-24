function reverseWords(sentence) {
    let reversedSentence = '';
    let wordStart = 0;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length - 1) {
            // Extract a word from the sentence
            let wordEnd = (i === sentence.length - 1) ? i : i - 1;
            let word = '';

            for (let j = wordStart; j <= wordEnd; j++) {
                word = sentence[j] + word;
            }

            reversedSentence += word;

            if (i !== sentence.length - 1) {
                reversedSentence += ' ';
            }

            wordStart = i + 1;
        }
    }

    return reversedSentence;
}

const input = "This is a sunny day";
const reversed = reverseWords(input);
console.log(reversed); // Output: "sihT si a ynnus yad"
