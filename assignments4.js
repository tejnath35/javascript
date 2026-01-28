let users=[
    {id:1,name:"ravi",role:"student",active:true},
    {id:2,name:"anil",role:"admin",active:true},
    {id:3,name:"suman",role:"student",active:false},
];

let courses=[
    {id:101,title:"javascript",price:999,published:true},
    {id:102,title:"react",price:1499,published:false},
    {id:103,title:"node",price:1299,published:true},
];

let cart=[
    {courseId:101,quantity:1},
    {courseId:103,quantity:2},
];
let roles={
    admin:["create","update","delete","view"],
    student:["view"]
};
let i;
for (i in users){
if(users[i].active)
    {
        console.log(users[i].name);
    }

if(users[i].role==="admin"){
    console.log("yes admin exists");
}
let a=2
if (users[i].id==a){
    console.log(users[i].name);
}
}




