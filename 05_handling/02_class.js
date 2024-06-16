class Product{
    // properties -> variables -> data member
    name;
    price;
    rating;

    constructor(n, p, r){
        console.log("calling the constructor")
        this.name=n;
        this.price=p;
        this.rating=r;
        // return 10; if you're returning primitive then  it will be avoided in constructor
        return {x:0, y:20}
    }
    // behaviours -> function-> member function

    Display(){
        // console.log("this refers to",this)
        console.log("displaying the current product",this.name, this.price, this.rating)
    }    
}

const p = new Product("iphone", 1000, 5)  // new -> create an empty plain object

console.log(p)

// p.Display()

