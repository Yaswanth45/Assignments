var t = [264, "Rohit", true, 45];
console.log(t[0]);
console.log(t.length);
console.log("----------------------------");
for (var _i = 0, t_1 = t; _i < t_1.length; _i++) {
    var f = t_1[_i];
    console.log(f);
}
t[2] = false;
//destructing or unpacking
var a = t[0], b = t[1], c = t[2];
console.log('Second Item' + " " + b);
console.log("-------------------------------");
var tup = ["C++", 45, 3500];
console.log("Course Name : " + tup[0]);
console.log("Duration : " + tup[1]);
console.log("Fee : " + tup[2]);
console.log("--------------------------------------------------");
// Destructuring (un-packing)
var courseTitle = tup[0], duration = tup[1], fee = tup[2];
console.log("Course Name : " + courseTitle);
console.log("Duration : " + duration);
console.log("Fee : " + fee);
console.log("--------------------------------------------------");
// for of loop
for (var _a = 0, tup_1 = tup; _a < tup_1.length; _a++) {
    var v = tup_1[_a];
    console.log(v);
}
