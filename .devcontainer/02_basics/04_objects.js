// creating an object

const tinderUser = {}

tinderUser.email="ashu@gmail.com"
tinderUser.name="tinder"
tinderUser.address="Lucknow"
tinderUser.gender="Male"
tinderUser.isLoggedIn=true

console.log(tinderUser)

//Merging objects

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

const mergeObjs = {...obj1,...obj2}

console.log(mergeObjs)

//nested looping of objects

const myFamily ={
      gaurdian:"Dadaji",
      member:{
          name:"Ram",
          email:"ram@hmail.com",
          bio:{
              occupation:"Doctor",
              salary:"1cr",
          }
      }
}
console.log(myFamily.member.bio.occupation);

//Object destructring
const course = {
    courseName : "Js in hindi",
    courseInstructor : "Hitesh",
    coursePrice: "Free"
}

const {courseInstructor:instructor} = course;
console.log(instructor)