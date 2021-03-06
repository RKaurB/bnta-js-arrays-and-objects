/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */
stations.push("London Kings Cross");
console.log(stations);
console.log("End of line: " + stations[stations.length-1]);
console.log("\n");

/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
stations.shift();
console.log(stations);
console.log("\n");

/**
 * Q3.
 * How many stations are on the line?
 */
// stationCount = null;
stationCount = stations.length;
console.log("There are " + stationCount + " stations.");
console.log("\n");

/**
 * Q4.
 * Which station is the third stop?
 */
// thirdStation = null;
thirdStation = stations[2];
console.log("The third station is " + thirdStation);
console.log("\n");

/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */
stations[1] = "Berwick-upon-Tweed";
console.log(stations);
console.log("\n");

/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */
// stations.splice(stations.indexOf("Leeds"), 1);
stations.splice(4, 1);
console.log(stations);
console.log("\n");

/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */
// stations.splice(stations.indexOf("York"), 0, "Darlington");
stations.splice(3, 0, "Darlington");
console.log(stations);
console.log("\n");

/**
 * Q8.
 * Is Durham one of the stops?
 */
stoppingAtDurham = stations.includes("Durham");
// console.log(stoppingAtDurham);
if (stoppingAtDurham) {
    console.log("This train stops at Durham");
} else {
    console.log("This train does not stop at Durham");
}
console.log("\n");

/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */
// See Q8.