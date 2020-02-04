function print2(v) {
    console.log(v.toString());
}
var p1 = {
    name: "T.K.Yaswanth Reddy",
    age: 22,
    toString: function () {
        return this.name + " : " + this.age;
    }
};
print2(p1);
var s1 = {
    name: "Murali",
    age: 22,
    course: "Angular",
    toString: function () {
        return this.name + " - " + this.age + " - " + this.course;
    }
};
print2(s1);
