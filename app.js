class SuperConstructor {
    constructor(name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
    }

}

class Park extends SuperConstructor {
    constructor(name, yearBuilt, parkArea, numberOfTrees) {
        super(name, yearBuilt);
        this.parkArea = parkArea;
        this.numberOfTrees = numberOfTrees;
    }

    //methods
    calculateTreeDensity(numberOfTrees, parkArea) {
        // Tree density of each park in the town (forumla: number of trees/park area)
        return Math.round(numberOfTrees / parkArea);
    }

    calculateAverageAge(yearBuilt) {
        // Average age of each town's park (forumla: sum of all ages/number of parks)
        return Math.round((new Date().getFullYear() - yearBuilt) / 3);
    }

    moreThanAThousandTrees(numberOfTrees) {
        // The name of the park that has more than 1000 trees
        if (numberOfTrees >= 1000) {
            return 1;
        }
        return -1;
    }

}

class Street extends SuperConstructor {

    constructor(name, yearBuilt, length, size) {
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
        // this.streetLength = streetLength;
    }

    // methods 

    calculateAverageStreetLength(length, totalLength) {
        // 4 streets 
        return Math.round((length + totalLength) / 4)
    }

    calculateTotalStreetLength() {
        // put all lengths in array
        let total = allStreets.map((el) => {
            return el.length;
        });
        // sum up each array element
        total = total.reduce((a, b) => a + b, 0)
        //return total
        return total;
    }

    roadClassifications(size) {
        //define map
        const classifications = new Map();
        classifications.set(1, "tiny")
        classifications.set(2, "small")
        classifications.set(3, "normal")
        classifications.set(4, "big")
        classifications.set(5, "huge")
    
        return classifications.get(size); 
    
    }



}


//instances
const allParks = [
    new Park('peters park', 1996, 192, 2000),
    new Park('kings park', 1900, 26, 20),
    new Park('peter kings park', 2006, 1900, 200)
];

const allStreets = [
    new Street('pete street', 1996, 3, 1),
    new Street('king street', 1906, 300, 5),
    new Street('peter king street', 1990, 100, 4),
    new Street('johns street', 2006, 1000, 1)
];


function printReport() {

    //parks
    console.log("Parks Report");
    console.log("------------------------------------");

    allParks.forEach(el => {
        console.log("------------")
        console.log(`${el.name}:`);
        console.log("------------")
        console.log(`tree density: ${el.calculateTreeDensity(el.numberOfTrees, el.parkArea)}`);
        console.log(`Average Age: ${el.calculateAverageAge(el.yearBuilt)}`);
        if (el.moreThanAThousandTrees(el.numberOfTrees) === 1) {
            console.log(`${el.name} has ${el.numberOfTrees} trees!`);
        }
    });

    //streets
    console.log("------------------------------------");
    console.log("Streets Report");
    // console.log("------------------------------------");
    allStreets.forEach((el, index) => {
        console.log("------------")
        console.log(`${el.name}`);
        console.log("------------");
        console.log(`Average Street length ${el.calculateAverageStreetLength(el.length, el.calculateTotalStreetLength())}`);
        console.log(`Size Classification: ${el.roadClassifications(el.size)}`);
    });
    console.log("------------------------------------");
    console.log(`Total Street Length ${allStreets[0].calculateTotalStreetLength()}`);

}

printReport();