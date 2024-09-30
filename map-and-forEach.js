 // 1. map muloto ekta array er upore kaj kore.
 // 2. map er mordhe ekta function k call kora hoy.
 // 3. sei function ta muloto sei array er sob value ekta ekta kore niya sei function er vitore j parameter deuta hoy tar vitore diya dei.
 // 4. 

 // ********************** What is for each and what is deffaranch map and forEach function ********************
 // ********************** What is for each and what is deffaranch map and forEach function ********************

 // forEach function map er motoi kaj kore but ata kicu return kore nah

 // map kono arr er man niya kaj kaj kore sob dhoroner and result hisabe sei man te return kore. >>>>>>>>>>>>>>>>>>> pura function ta k variable er vitore rakha jai 
 // forEach kono arr er man niya kaj kaj kore sob dhoroner and result hisabe sei man te return kore na >>>>>>>>>>>>>>>>>>> ai function ta k kono variable er vitore rakha jai na >>>>> rakhle undifind ashe

 // Example:-

 const numbers = [1, 2, 3, 4, 5];
 const doubledNumbers = numbers.map(number => number * 2);
 console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// forEach lekher sttacture >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  numbers.forEach((item)=> item) /// ekhane numbers arry er theke number nitese niye item er mordhe ekta ekta kore pass korre ditese




 const doubledNumbersWithForEach = [];
 numbers.forEach(number => {
   doubledNumbersWithForEach.push(number * 2);
 });
 console.log(doubledNumbersWithForEach); // [2, 4, 6, 8, 10]
 