/// inheritence mane tar parent er sob kicu se use korte perbe


class Vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    startEngine(){
        console.log('engine start');
    }
}

class Truck extends Vehicle{
    constructor(name, price, load){ // er mordhe ki ki functionality thakbe sei gula set kore dite hobe constructor er mardhome
        super(name, price);   /// ekhane super use kora hoyse mane tar upore k ase tar theke value neuya
        this.load = load;  /// j gula tar parent er mordhe nai sei gula ekhane nuton vabe set hobe 
    }
    loadCargo(){
        console.log('kicu nai re vai and kaj o to kortese na');
    }
}

const tapan = new Vehicle('tapan', 'bangla');

console.log(tapan);


const myTruck = new Truck( 150000, "50 tons");

console.log(myTruck);