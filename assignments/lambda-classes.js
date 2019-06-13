// CODE here for your Lambda Classes
class Person{
    constructor(baseClass){
        this.name= baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
        speaks(){
            return `Hello my name is ${baseClass.name}, I am from ${baseClass.location} and I am ${baseClass.age}`;
        }
    }
}
