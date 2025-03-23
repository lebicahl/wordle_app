function compare_words(str1, str2) {
    const word1 = str1.split("");
    const word2 = str2.split("");
    const leftover = [];
    if (word1.length != 5 || word2.length != 5) {
        console.log("word length not equal to 5");
        return;
    }
    const result = []
    for (let i = 0; i < word2.length; i++) {
        if (word1[i] == word2[i]) {
            result.push(2);
        } else {
            let push_letter = false;
            for (let j = 0; j < word2.length; j++) {
                if (word1[j] == word2[i]) {
                    push_letter = true;
                }
            }
            if (push_letter) {
                result.push(1);
            } else {
                result.push(0);
            }
        }
    }
    for (let i = 0; i < word2.length; i++) {
        if (result[i] != 2) {
            leftover.push(word1[i]);
        }
    }
    for (let i = 0; i < word2.length; i++) {
        if (!leftover.includes(word2[i])) {
            if (result[i] == 1) {
                result[i] = 0;
            }
        }
    }
    for (let i = 0; i < word2.length; i++) {
        for (let j = i+1; j < word2.length; j++) {
            if (word2[4-i] == word2[4-j]) {
                if (result[4-i] == 1 && result[4-j] == 1) {
                    result[4-i] = 0;
                }
            } 
        }
    }
    return result;
}