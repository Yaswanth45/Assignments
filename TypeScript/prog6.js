function printMessage(n) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var f = names_1[_a];
        console.log(n + " " + f);
    }
}
printMessage("Hello", "Yaswanth", "Reddy");
printMessage("!!!!", "Anders Hejlsberg", "Rod Jhon", "Robert Jr");
