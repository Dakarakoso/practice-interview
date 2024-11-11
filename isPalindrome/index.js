// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


function isPalindrome(str){
    if(str.length === 0) return true
    if(str[str.length -1] !== str[0]) return false;
    return isPalindrome(str.slice(1,-1)) 
}

module.exports = isPalindrome;