const myInfo = {
    name: "Mostafiz",
    age: 28,
    city: "Dhaka",
    phone: 2134123
}

// const obj2 = {...myInfo}; ***************** amar avabe distracring korle notun vabe kono value add korle sei ta sudu sei object er mordhe jabe notun vabriable er mordhe jabe na
//obj2.marrid = false;
// obj2.age = 28;

/// console.log(myInfo);
/// console.log(obj2);



// Destructuring  >>>>>>>>>>>>>>>>>>>>>>>>>>> ai sob k nested object bola hoy

const { name, age, city } = myInfo;
const { name:myName, age:Myage, city:Mycity } = myInfo;  // ekhanen amarr aname ta k myName a niyesi and age ta ki Myage a niyesi avabe amra onno varibale er vitorre niye pari

console.log(name);
console.log(age);
console.log(city);

/// kono object er vitore onno kono object thakle amar jvabe sei object ta distrucring korte pari

    /// monne kori ekta object er mordhe onno ekta object kora ase ********************* amara to chailei banate pari


    const  {contact:{email}} = myInfo; /// myInfo er mordhe ekta contact name object ase sei khan theke amara tar email ta niyesi ****** avabe onno kono key ar value nite chaile nite pari

    console.log(email);
      

    /// amra jokhon kono object k loop chaliye ta value gula pete chai tokhon amara jvabe use korbo

    for(let key in myInfo){
        console.log(key, myInfo[key]); /// thad braked obbossoy use kote hobe
    }