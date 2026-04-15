// Chapter : 38 to 44

// Question # 1
// function power(a, b) {
//     var result = 1

//     for (let i = 1; i <= b; i++) {
//         result = result * a
//     }

//     console.log(result)
// }
// power(2, 3)

// Question # 2
// function checkLeapYear(year) {
//     if (year % 4 === 0) {
//         console.log("Leap year")
//     } else if (year % 100 === 0) {
//         console.log("Not a leap year")
//     } else if (year % 400 === 0) {
//         console.log("Leap year")
//     } else {
//         console.log("Not a leap year")
//     }
// }
// checkLeapYear(2020)

// Question # 3
// function calculateArea(a, b, c) {
//     function calculateS() {
//         s = (a + b + c) / 2
//         return s
//     }

//     var s = calculateS()

//     var area = s*(s-a)*(s-b)*(s-c)
//     console.log(area)
// }
// calculateArea(2, 3, 4)

// Question # 4
// function mainFunction(marksInEnglish, marksInMath, marksInScience) {
//     function calculateAverage() {
//         var average = (marksInEnglish + marksInMath + marksInScience) / 3
//         console.log("Average:", average)
//     }
//     calculateAverage()
//     function calculatePercentage() {
//         var percentage = (marksInEnglish + marksInMath + marksInScience) / 300 * 100
//         console.log("Percentage:", percentage)
//     }
//     calculatePercentage()
// }
// mainFunction(60, 70, 80)

// Question # 5
// function customIndexOf(string, character) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] == character) {
//             console.log(i)
//             return
//         }
//     }
//     console.log(-1)
// }
// customIndexOf("Shahrukh", "i")

// Question # 6
// function vowelsRemover(string) {
//     var result = ""
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] !== "a" && string[i] !== "e" && string[i] !== "i" && string[i] !== "o" && string[i] !== "u") {
//             result += string[i]
//         }
//     }
//     console.log(result)
// }
// vowelsRemover("Hello World")

// Question # 7
// function countVowelPairs(string) {
//     var counter = 0
//     for (let i = 0; i < string.length; i++) {
//         var first = string[i]
//         var second = string[1 + i]

//         if ((first == "a" || first == "e" || first == "i" || first == "o" || first == "u") && (second == "a" || second == "e" || second == "i" || second == "o" || second == "u")) {
//             counter++
//         }
//     }
//     console.log(counter)
// }
// countVowelPairs("Please read this application and give me gratuity")

// Question # 8
// function unitConverter(distanceInKilometers) {
//     console.log("Distance in Kilometers:", distanceInKilometers)
//     function distanceInMeters() {
//         var inMeter = distanceInKilometers * 1000
//         console.log("Distance in meters:", inMeter)
//     }
//     distanceInMeters()

//     function distanceInFeet() {
//         var inFeet = distanceInKilometers * 3280.84
//         console.log("Distance in feet:", inFeet)
//     }
//     distanceInFeet()

//     function distanceInInches() {
//         var inInches = distanceInKilometers * 39370.1
//         console.log("Distance in inches:", inInches)
//     }
//     distanceInInches()

//     function distanceInCentimeters() {
//         var inCentimeters = distanceInKilometers * 100000
//         console.log("Distance in centimeters:", inCentimeters)
//     }
//     distanceInCentimeters()
// }
// unitConverter(2)

// Question # 9
// function overTimeChecker(hoursOfWork) {
//     if (hoursOfWork > 40) {
//         var overTime = hoursOfWork - 40
//         var pay = overTime * 12
//         console.log(pay)
//     } else {
//         console.log("No over time")
//     }
// }
// overTimeChecker(50)

// Question # 10
// function cashier(amount) {
//     var notes100 = Math.floor(amount / 100)
//     var remainingAmount = amount % 100

//     console.log("Notes of 100:", notes100)
//     console.log("Remaining amount:", remainingAmount)

//     var notes50 = Math.floor(remainingAmount / 50)
//     remainingAmount = remainingAmount % 50

//     console.log("Notes of 50:", notes50)
//     console.log("Remaining amount:", remainingAmount)

//     var notes10 = Math.floor(remainingAmount / 10)
//     remainingAmount = remainingAmount % 10

//     console.log("Notes of 10:", notes10)
//     console.log("Remaining amount:", remainingAmount)
// }
// cashier(470)