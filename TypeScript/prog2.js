var payment;
(function (payment) {
    payment[payment["cash"] = 0] = "cash";
    payment[payment["creditCard"] = 1] = "creditCard";
    payment[payment["neft"] = 2] = "neft";
})(payment || (payment = {}));
;
var Players;
(function (Players) {
    Players[Players["Cricket"] = 11] = "Cricket";
    Players[Players["Kabaddi"] = 7] = "Kabaddi";
    Players[Players["Volleyball"] = 6] = "Volleyball";
})(Players || (Players = {}));
;
var m = Players.Kabaddi;
console.log(m);
console.log(Players[m]);
