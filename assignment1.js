//datecreation and extraction
let date1=new Date(Date.now());
console.log(date1.getDate());
console.log(date1.getMonth()+1);
console.log(date1.getFullYear());
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log(date1.getDate() + "-" + (date1.getMonth() + 1) + "-" + date1.getFullYear()+ " " + date1.getHours() + ":" + date1.getMinutes() + ":" + date1.getSeconds());


//date comparison and validation
let enrollmentDate=new Date("2026-02-30");
if(enrollmentDate>Date.now()){
    console.log("Enrollment date is in future");
}
else{
    console.log("Enrollment date is in past");
}


//age calculation
let dob="2000-05-15";
let dobDate=new Date(dob);
let ageDiffMs=Date.now()-dobDate.getTime();
let ageDate=new Date(ageDiffMs);
console.log(Math.abs(ageDate.getUTCFullYear()-1970));
