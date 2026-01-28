//assignment1

let user={
    id:101,
    name:'ravi',
    email:'ravi@gmail.com',
    role:'student',
    isActive:true
}
console.log(user.email,user.name)
user.lastlogin='2026-01-01'
user.student='admin'
delete user.isActive
console.log(Object.keys(user))
console.log(user)


//assignment2
let marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
let values = Object.values(marks);
let entries = Object.entries(marks);
let total = values.reduce((sum, m) => sum + m, 0);
let avg = total / values.length;
let highest = entries.reduce((max, curr) =>
  curr[1] > max[1] ? curr : max
);
marks.computer = 90;
console.log("Total:", total);
console.log("Average:", avg);
console.log("Highest:", highest[0], highest[1]);
console.log(marks);


//assignment3
let settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

settings.theme = settings.theme === "light" ? "dark" : "light";
settings.autoSave = true;
delete settings.notifications;
Object.freeze(settings);

console.log(settings);
