// CODE here for your Lambda Classes
class Person{
    constructor(baseClass){
        this.name= baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
    }        
    speaks(){
        return `Hello my name is ${baseClass.name}, I am from ${baseClass.location} and I am ${baseClass.age}`;
        }

}
class Instructor extends Person{
    constructor(instructorBaseClass){
        super(this, instructorBaseClass);
        this.specialty = instructorBaseClass.specialty;
        this.favLanguage = instructorBaseClass.favLanguage;
        this.catchPhrase = instructorBaseClass.catchPhrase;
    }
    demo(subject){
        return `'Today we are learning about ${subject}' where subject is the param passed in.`;
    }
    grade(student,subject){
        return `'${student.name} receives a perfect score on ${subject}'`
    }
}