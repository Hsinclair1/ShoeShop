//demo of the different objects
console.log();

//define the object
//let means it will
//var is another way to define let

const car = {
    make:"Ford",
    model:"Fiesta Ghia",
    engine:"1.4",
    fuel:"Unleaded",
    colour:"Hot Pink",
    price:"1499.99"
}

console.log(car); //print car
console.log(car.price);

//array of objects
const cars = [
    {
        make:"Ford",
        model:"Fiesta Ghia",
        engine:"1.4",
        fuel:"Unleaded",
        colour:"Hot Pink",
        price:1499.99
    },
    {
        make:"Mini",
        model:"Cooper",
        engine:"1.8",
        fuel:"Unleaded",
        colour:"White",
        price:2999.99
    },{
        make:"SEAT",
        model:"Ibiza",
        engine:"1.2 TDI",
        fuel:"Unleaded",
        colour:"Red",
        price:2499.99
    }

]

//print single property 
console.log(cars[1].model)

//search for specific element
function SearchObject(search){
        const result = cars.find(car => car.make === search);
        console.log(result);
};

function VagueSearch(search){
    const result = cars.filter(items => items.name.contains(search));
    console.log(result);   
}
