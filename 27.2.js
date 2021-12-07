// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.

const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].toUpperCase();
        }
        resolve(words)
    })
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        let temp = words.join('');  
        if ((/[^a-zA-Z]/.test(temp))) {
            reject();
        }
        else {
            resolve(words.sort());
        }
    });

}

arr = ['aa', 'bb', 'Asd'];
arr2 = ['a23', 'bb', 'Asd']
sortWords(arr2)
    .then((res) => (makeAllCaps(res)))
    .then((res) => console.log(res))
    .catch(() => { console.log("array not contains only strings") })
