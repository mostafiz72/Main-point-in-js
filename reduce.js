// reduce duita man dei ekta prevent R ekta holo Current
// prevent ager man ta dhore rakhe and Current ta holo New value pass kore 

// examples:-

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);  // multiplication korar default value dite hobe 1

console.log(sum); // Output: 15


/// ata jodi kono array of object hoy taile amra jmn korre korte pari
/// ata jodi kono array of object hoy taile amra jmn korre korte pari

const number = [
    {a:1},
    {a:2},
    {a:3},
    {a:4},
    {a:5}
]

const sumOfA = number.reduce((accumulator, current) => accumulator + current.a, 0);



/// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ekta tamplete letaler er morher onek gula array thakle amra ki vabe sei gula show koraite pari
/// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ekta tamplete letaler er morher onek gula array thakle amra ki vabe sei gula show koraite parif


const mySubject = {
    name: "mehedi",
    age: 26,
    grade: "A",
    subjects: ["bangla","english","math"]
}


const sentence = `Amar nam ${mySubject.name} amra boyos holo ${age}. amar subject gula holo ${mySubject.subjects.map((sub) => sub).join("/")}` /// .join ta holo amar array er value gular moedhe kmn style chai ekhon asbe Example:- bangla/english/math >>>>>> .join er mordhe amara jodi comma use korteam ta hole jmn asto bangla,english,math >>>>>>>>>> ja use korbo tai asbe


console.log(sentence);



/// mone kori onek gula object ase tar mordhe kono object er vitore kono key nai tahole se khane undifind show na korye N/A use korbo kmn kore

mySubject.map((person)=>{
    const sentence = `Person's name is ${name}. His city: ${person?.city || "N/A"}`  // ehane jodi person.city er kono value or key na thake tahole optional chening use korar jonno kono error marbe nah or amara jodi kono value set korre dei ta hole sei vale ta show korbe ekhane jmn N/A set kore deuya hoyse. >>>>>> avabe amra joto gula te ischa totogulatei show koraite perbo
})