var e1 = {
    name: "T.K.Yaswanth Reddy",
    id: 101
};
var c1 = {
    name: "Cognizant",
    id: 201,
    price: 500
};
var f1 = {
    name: "Rohit",
    id: 45,
    salary: 15
};
function show(employee) {
    console.log(employee.id + "=>" + employee.name);
}
show(e1);
/* actually print function takes employee, but we are passing cosmetic object.
still it work.
because even cosmetic class is also contain all properties of employee.
this is what is known as ducktyping.
 */
show(c1);
show(f1);
