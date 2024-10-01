
// setTimeout ekta fixed time por kono kicu show korabe >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// setTimeout ekta fixed time por kono kicu show korabe >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//********************* Example:- */

console.log(1);
console.log(2);
console.log(4);
console.log(5);
console.log(6);

setTimeout(() => {
    console.log(3);
    
}, 3000);




// setInterval ekta fixed time por kono kicu show korabe bar bar 



setinterval(() => {
    console.log(3);   /// console log k 3 sec por por show koraitei thakbe
    
}, 3000);


/// clearInterval function ta use korle seita thamai dibe 

// Example:- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let num = 0;

const clockId = setinterval(() => {

    num++;
    console.log(3);   /// console log k 3 sec por por show koraitei thakbe
    if(num > 6){  /// amra jodi condition use na kori ta hole ekbar cholar por ai function ta k off kore dibe R cholbe na
        clearInterval(clockId); // 6 bar show korar por seita k off kore dibe
    }
}, 3000);
