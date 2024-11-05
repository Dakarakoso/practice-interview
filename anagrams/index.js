/*validAnagram
Given two strings, write a function to determine if the second string is an anagram of the first. 
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

Examples:

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
Note: You may assume the string contains only lowercase alphabets.

Time Complexity - O(n) */

function isAnagram(str1,str2) {
if(str1.length !== str2.length) return false;
const map = {}

for(let char of str1){
    map[char] ? map[char] += 1: map[char] = 1;
}

for(let char of str2) {
    if(!map[char]) {
        return false
    } else {
        map[char] -= 1
    }
}

return true;
}

module.exports = isAnagram;