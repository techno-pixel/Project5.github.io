//JavaScript Document

// --------------------------------------------- VACATION PROPERTY CONSTRUCTOR FUNCTION -------------------------------
function VacationProperty(name, price, rating, location, rooms, availability, features)
{
    this.name = name;
    this.price = price;
    this.rating = rating;
    this.location = location;
    this.rooms = rooms;
    this.availability = availability;
    this.features = features;
}
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- SPECIAL RATE CONSTRUCTOR FUNCTION -------------------------------
function SpecialRate (name, price, rating, location, rooms, availability, features, type)
{
    VacationProperty.call(this, name, price, rating, location, rooms, availability, features);
    this.type = type;
}
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- SUPER HOST CONSTRUCTOR FUNCTION -------------------------------
function SuperHost (name, price, rating, location, rooms, availability, features, type)
{
    VacationProperty.call(this, name, price, rating, location, rooms, availability, features);
    this.type = type;
}
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- VACATION PROPERTY FUNCTIONS -------------------------------
/*
Show Desc just brings to life the original members of the vacationproperty function
The showAvail is a function to show availability
*/
VacationProperty.prototype.showDesc = function()
{
    let getPara = document.getElementById('describe');
    let sentence = this.name + ' costs $' + this.price + ' and has a ' + this.rating + ' star rating! ' + 'It has ' + this.rooms + 
    ' rooms and it boasts ' + this.features[0] + ' and ' + this.features[1] + '.'; 
    getPara.textContent = sentence;
    return getPara;
}
VacationProperty.prototype.showAvail = function()
{
    let getPara = document.getElementById('describe');
    let sentence = 'Your selection is:' + this.availability; 
    getPara.textContent += sentence;
    return getPara;
}
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- SPECIAL RATE FUNCTIONS -------------------------------
/*
Show Desc just brings to life the original members of the vacationproperty function
The showAvail is a function to show availability
Showtype lets you know whether it is special rate or super host
Show rate shows the special rate which is original - 20%
*/
SpecialRate.prototype.showDesc = function()
{
    let getPara = document.getElementById('describe');
    let sentence = this.name + ' costs $' + this.price + ' and has a ' + this.rating + ' star rating! ' + 'It has ' + this.rooms + 
    ' rooms and it boasts ' + this.features[0] + ' and ' + this.features[1] + '.'; 
    getPara.textContent = sentence;
    return getPara;
}
SpecialRate.prototype.showAvail = function()
{
    let getPara = document.getElementById('describe');
    let sentence = 'Your selection is:' + this.availability; 
    getPara.textContent += sentence;
    return getPara;
}
SpecialRate.prototype.showType = function()
{
    let getPara = document.getElementById('describe');
    let sentence = '. ' + this.type + ' unlocked! See new price details below!';
    getPara.textContent += sentence;
    return getPara;
}
SpecialRate.prototype.showRate = function()
{
    let createPara = document.createElement('p');
    let sentence = 'Enjoy 20% OFF - now $'  + (this.price * 0.8);
    createPara.textContent += sentence;
    let getPara = document.getElementById('describe');
    getPara.appendChild(createPara);
    return createPara;
}
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- SUPER HOST FUNCTIONS -------------------------------
/*
Show Desc just brings to life the original members of the vacationproperty function
The showAvail is a function to show availability
Showtype lets you know whether it is special rate or super host
Show rate shows the special rate which is original - 20%
show super shows the reason why it is a super host
*/
SuperHost.prototype.showDesc = function()
{
    let getPara = document.getElementById('describe');
    let sentence = this.name + ' costs $' + this.price + ' and has a ' + this.rating + ' star rating! ' + 'It has ' + this.rooms + 
    ' rooms and it boasts ' + this.features[0] + ' and ' + this.features[1] + '.'; 
    getPara.textContent = sentence;
    return getPara;
}
SuperHost.prototype.showAvail = function()
{
    let getPara = document.getElementById('describe');
    let sentence = 'Your selection is:' + this.availability; 
    getPara.textContent += sentence;
    return getPara;
}
SuperHost.prototype.showType = function()
{
    let getPara = document.getElementById('describe');
    let sentence = '. This is a ' + this.type + '! See why below: ';
    getPara.textContent += sentence;
    return getPara;
}
SuperHost.prototype.showSuper = function()
{
    let createPara = document.createElement('p');
    let sentence = 'The last 50 visitors have rated this place 5 stars.';
    createPara.textContent += sentence;
    let getPara = document.getElementById('describe');
    getPara.appendChild(createPara);
    return createPara;
}
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- OBJECTS CREATED -------------------------------
let newCity = new VacationProperty('Skyline', 2400, '4', 'Toronto', '2', 'Available', ['on-site appliances', 'parking']);
let newSub = new VacationProperty('Jesus of Suburbia', 1700, '3', 'Barrie', '5', 'Not Available', ['on-site appliances', '2-door garage']);
let newVilla = new SpecialRate('Villa Trill', 3000, '4.7', 'Costa Rica', '8', 'Available', ['infinity pool', 'surfing'], 'Special Rate');
let newTrees = new SuperHost('Hansel et Gretel', 2100, '5', 'Perry Sound', '5', 'Not Available', ['on-site appliances', 'parking'], 'SUPER HOST');
// ---------------------------------------------------------------------------------------------------------


// --------------------------------------------- FUNCTION TO SHOW PROPERTIES -------------------------------
/*
* when the ID on each anchor matches the word, and on click, the description and avail, and on occasiong type, rate and super will
* appear in a paragraph
*/
function setStuffs(button) 
{
    let buttonId = button.id;
    if (buttonId == 'city') 
    {
        newCity.showDesc();
        newCity.showAvail();
    } else if (buttonId == 'suburbia') 
    {
        newSub.showDesc();
        newSub.showAvail();
    } else if (buttonId == 'villa') 
    {
        newVilla.showDesc();
        newVilla.showAvail();
        newVilla.showType();
        newVilla.showRate();
    } else if (buttonId == 'nature') 
    {
        newTrees.showDesc();
        newTrees.showAvail();
        newTrees.showType();
        newTrees.showSuper();
    }
}
// --------------------------------------------- OLD CODE FUNCTIONS -------------------------------


// class AirBnB
// {
//     constructor(name, price, rating, location, rooms, features)
//     {
//         this.name = name;
//         this.price = price;
//         this.rating = rating;
//         this.location = location;
//         this.rooms = rooms;
//         this.features = features;
//     }
//     description()
//     {
//         let getPara = document.querySelector('p');
//         let sentence = this.name + ' costs ' + this.price + ' and has a ' + this.rating + 'star rating!' + 'Located in the heart of ' + this.location + ' it has ' + this.rooms + 
//         ' rooms and it boasts all the amneties included in the price, even on-site washer/dryer '; 
//         let anchor = document.querySelectorAll('a');
//         for(var anchorz in anchor)
//         {
//             anchorz.addEventListener('click', function()
//             {
//                 getPara.textContent = sentence;
//             });
//         }
//     }
// }

// let anchor = document.querySelectorAll('a');


// class City extends AirBnB
// {
//     constructor(name, price, rating, location, rooms, availability, features)
//     {
//         super(name, price, rating, location, rooms, features);
//         this.availability = availability;
//         getPara.innerHTML = sentence;
//     }
//     available()
//     {
//         let getPara = document.querySelector('p');
//         let sentence = this.name + ' costs ' + this.price + ' and has a ' + this.rating + 'star rating!' + 'Located in the heart of ' + this.location + ' it has ' + this.rooms + 
//         ' rooms and it boasts all the amneties included in the price, even on-site washer/dryer '; 
//     }
// }

// type.showRate = function()
    // {
    //     let price = this.price;
    //     let newRate = price * 0.8;
    //     return newRate;
    // }

// let type = newVilla.type;

// type.showRate = function()
//     {
//         let price = this.price;
//         let newRate = price * 0.8;
//         return newRate;
//     }


// SpecialRate.prototype = Object.create(VacationProperty.prototype);