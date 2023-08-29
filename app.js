// # Code Challenges:

// ### **Extract Initials:**

// Write a function called **`extractInitials`** that takes an array of full 
// names and returns a new array containing only the initials of each name.

function extractInitials(names) {
  
    const result = []
    // map
        const inits = names.map(name => {//split on each space, returns a sub-array inside the array
            let splitName = name.split(" ")
            return splitName
        })
    
    

        const equalize = inits.flat()//flat turn sub-arrays into 1 array
        
        const firstLetters = equalize.map(name => name.slice(0,1))//slice the first letters off
    
        for(let i = 0; i < firstLetters.length; i += 2){//loop thru the array in pairs
            let pair = firstLetters.slice(i, i + 2).join("")
            //slice to get sub array of 2 letters, join to turn the sub-array into 1 string
            result.push(pair)//push the pairs into the result array
        }

    return result
}


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
 console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']


// ### **Filter Object Array by Property:**

// Write a function called **`filterByProperty`** that takes an array of 
// objects and a property name as input. The function should return a new array 
// containing only the objects that have a specific value for the given property.

function filterByProperty(objects, propertyName, propertyValue) {
  
let result = objects.filter(obj => obj.hasOwnProperty(propertyName) && obj[propertyName] === propertyValue)
// obj[propertyName] is not the same as obj.propertyName, 
// because it is literally looking for a value of "propertyName"
// however obj[propertyName] "propertyName" allows us to use a variable to specify the property name
return result
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);