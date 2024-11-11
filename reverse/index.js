/* Write a recursive function called 
reverse which accepts a string and returns a 
new string in reverse. */

function reverse(str){
    if(str.length <= 0) return str
    return reverse(str.slice(1)) + str[0]
}

module.exports = reverse;