let username:string ="hello";
console.log(username)
function toUpper(val:String){
    return val.toUpperCase();
}
function adNum(val:number):number{
  return val+2;
}

let rohan={name:"rohan",ispaid:false,email:"r@gmail.com"};
const helllo=({name:string,ispaid:boolean})=>{
    return{name:"hi",ispaid:true}
}
let core=helllo(rohan)
toUpper("rohan")

type User={
readonly _id:string
name:string
password:string
cardetails?:number

}
let myuser:User={
_id:"1233",
name:'rohan',
password:'hi3',
cardetails:1
}

type cardNumber={
    cardnumber:number
}
type carddate={
carddate:number
}

type carddetails =cardNumber& carddate &{
    readonly name:String
}

let ano:carddetails={
    cardnumber:123,
    carddate:12,
    name:"hi"
}
ano.cardnumber=1;


export{}