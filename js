//male >> profession cricketer
//female >> profession actor

//female << remove age from obj
//male << update profession to developer

//read dynamic data of firstname and lastname
//create fullName

const obj={
    firstname: "jayni",
    lastname:"patel",
    age:"22",
    gender:"female"
}
 
//to read
console.log(obj);

//to add profession
// const obj1={...obj, profession:"actor"}
// console.log(obj1)

let updateobj;
if (obj.gender === "female") {
 updateobj={...obj, profession: "actor"}
}
console.log(updateobj);

const {age, ...rest} = updateobj
console.log(rest);

const key1="firstname" ;
const key2="lastname" ;
const {[key1]: fn, [key2]: ln} = rest;
const fullname=`${fn} ${ln}`;
console.log(fullname);