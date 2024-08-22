// 26. **Find the Longest Word in a String**  
//     - Task: Write a function that returns the longest word in a string.  
//     - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
//     - Expected Output: `'jumped'`



const largestWord = (str)=>{
    str = str.split(' ');
    let largestWord = "";
    for(let ele of str){
        if(ele.length > largestWord.length){
            largestWord = ele;
        }
    }
    return largestWord;
}

console.log(largestWord("The quick brown fox jumped over the lazy dog"));