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
        super(instructorBaseClass);
        this.specialty = instructorBaseClass.specialty;
        this.favLanguage = instructorBaseClass.favLanguage;
        this.catchPhrase = instructorBaseClass.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject} where subject is the param passed in.`
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});



class Student extends Person{
    constructor(studentBaseClass){
        super(studentBaseClass);
        this.previousBackground = studentBaseClass.previousBackground;
        this.className = studentBaseClass.className;
        this.favSubject = studentBaseClass.favSubject;
    }
    listsSubjects(){
        return `${studentBaseClass.favSubject} is ${baseClass.name} favorite subject`;
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}
const carlos = new Student({
    name: 'Carlos',
    location: 'Houston',
    age: 22,
    previousBackground: 'Sharptown High School',
    className: 'WEB21',
    favSubject: 'JavaScript'

})

class ProjectManagers extends Instructor{
    constructor(projectManagerInstructorBaseClass){
        super(this, projectManagerInstructorBaseClass);
        this.gradeClass = projectManagerInstructorBaseClass.gradeClass;
        this.favInstructor = projectManagerInstructorBaseClass.favInstructor;
    }
    standUp(){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${name} debugs ${student.name}'s code on ${subject}`;
    }
}
console.log(fred.grade(carlos));
console.log(fred.demo());
