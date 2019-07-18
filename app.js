class SuperConstructor{
    constructor(name, yearBuilt){
        this.name = name;
        this.yearBuilt = yearBuilt; 
    }

}

class Park extends SuperConstructor{
    constructor(name, yearBuilt, size, numberOfTrees){
        super(name, yearBuilt);
        this.size = size; 
        this.numberOfTrees = numberOfTrees;
    }

    //methods
    



}