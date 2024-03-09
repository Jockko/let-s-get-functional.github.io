// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//console.log(_.filter)
return _.filter(array, function(ele){
    return ele.gender === 'male';
}).length
};

var femaleCount = function(array){
    return _.filter(array, function(customer){
        return customer.gender === 'female';
    }).length
}

var oldestCustomer = function(array){
    return _.reduce(array, function(seed, customer){
        if(customer.age > seed.age){
            seed = customer;
        }
        return seed;
    }).name
}

var youngestCustomer = function(array){
    return _.reduce(array, function(seed, customer){
        if(customer.age < seed.age){
            seed = customer;
        }
        return seed;
    }).name
}

var averageBalance = function(array){
    //retrieve all balances
    let balances =  _.map(array, function(ele){
        let balance = ele.balance.replace(/[$,]/g, "");
        //console.log(balance);
        let balanced = Number(balance);
        console.log(balanced);
        return balanced;
    });
    //console.log(balances.length);
    //find the average of those balances
    return _.reduce(balances, function(seed, next){
        seed = seed + next;
        return seed;
    }, 0)/balances.length;
}

var firstLetterCount = function(array, letter){
    return _.filter(array, function(customer){
        if(customer.name[0].toUpperCase() === letter.toUpperCase()){
            return customer;
        }
    }).length;
}

var friendFirstLetterCount = function(array, customer, letter){
    //find the amount of friends that customer has that begins with letter
    //loop through the array
    for(let i = 0; i < array.length; i++){
        //check each customer and find the customer that we're looking for
        if(array[i].name === customer){
        //check that customer object's friends
        return array[i].friends.reduce((acc, current)=>{
            if(current.name[0].toUpperCase() === letter.toUpperCase()){
                acc++
            }
            return acc;
        }, 0)
        //how many friends name begins with first letter

        }

    }
    //see if that customer friends have a name that start with letter

}

var friendsCount = function(array, name){
//loop through the array
return array.reduce((acc, customer)=>{
for(let i = 0; i < customer.friends.length; i++){
    if(customer.friends[i].name === name){
        acc.push(customer.name);
    }
}
return acc;
}, [])
}
//if so, add that customer's name to the list of other customer name's that matched

var topThreeTags = function(array){
//iterate through each customer
//iterate through each customer tags
//create an object that breaks down every tag
let a = array.reduce((acc, current)=>{
//every key is a tag and the value is the amount of times it appears
for(let i = 0; i < current.tags.length; i++){
    //if it does exist on accumulator already
    if(acc[current.tags[i]]){
        acc[current.tags[i]] += 1;
    }
    else {
        acc[current.tags[i]] = 1;
    }
}
return acc;
}, {});
//console.log(a)
let output = [];
//console.log(output)
for(let key in a){
let subArr = [];
//tag
subArr[0] = key;
subArr[1] = a[key];
output.push(subArr);
}
//console.log("FIRST", output.length)
// let final = [];
// for(let i = 0; i < output.length; i++){
//     if(output[i][1] >= output[i + 1][1]){
//         final.unshift(output[i][0]);
//     }
//     final.push(output[i][0]);
//     console.log("FINALLL", final)
// }
// return final;
return output.sort((a, b)=>{
    // if(b[1] > a[1]){
    //     return b[0]
    // }
    // else if(a[1] > b[1]){
    //     return a[0];
    // }
    // console.log("QQ", a, b)
    // console.log("BANG BANG", b[1] - a[1])
     return b[1] - a[1];
})

}

var genderCount = function(array){
    return array.reduce((acc, current)=>{
        //if it exists
        if(acc[current.gender]){
            acc[current.gender] += 1;
        }
        else {
            acc[current.gender] = 1;
        }
    return acc;
    }, {})
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
