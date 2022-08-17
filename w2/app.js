const displayOnPage = function(text) {
    let newParagraph = document.createElement ('p')
    newParagraph.innerHTML = text
    let outputDiv = document.getElementById('output')
    outputDiv.append(newParagraph)
}

// Daily Decision
// On the weekdays, I have to figure out if I can do yoga or exercise before lunch because I might have class in the morning.

// Global Variables
// Minutes converted into hours 110 minutes = 1.83 hours
let morningExerciseYogaStartTime = '11 am'
let classBio = '11:00 am - 12:50 pm'
let classHealth = '10:30 am - 11:45 am'
let durationExerciseYoga = 1
let timeSpentBioClass = 1.83 // Only 1 Class 
let timeSpentHealthClass = 2.5 //1.25 + 1.25 (2 classes)
let totalTimeSpentInClass = timeSpentHealthClass + timeSpentHealthClass
let classMondayTuesdayThursday = true
let classWednesdayFriday = false

displayOnPage('<b>Global Variables</b>')
displayOnPage('Time I Start Doing Yoga or Exercise --->' + morningExerciseYogaStartTime)
displayOnPage('Bio Class Start and End time --->' + classBio)
displayOnPage('Health Class Start and End Time --->' + classHealth)
displayOnPage('How Long I Exercise or Do Yoga --->' + durationExerciseYoga)
displayOnPage('Time Spent in Bio Class --->' + timeSpentBioClass)
displayOnPage('Time Spent in Health Class --->' + timeSpentHealthClass)
displayOnPage('Total Time Spent in My Classes --->' + totalTimeSpentInClass)
displayOnPage('classMondayTuesdayThursday --->' + classMondayTuesdayThursday)
displayOnPage('classWednesdayFriday --->' + classWednesdayFriday)

// If and If else
// Detertime if You have time to Exercise or Do yoga and attend class
if (totalTimeSpentInClass >= 5) {
    let doBoth = 'You have no time to exercise or do yoga and attend your class.'
} else {
    (totalTimeSpentInClass <= 5)
    let noTimeForBoth = 'You have time to exercise or do Yoga and attend your class.'
}

// Variable for output
let displayMsg = ''
let schedule = 'No time'

displayOnPage('<b>Daily Decision</b>')

// Whether I can do exercise or do Yoga in the Morning depending if I have class

// Booleans and Comparsion
if (classMondayTuesdayThursday) {
    schedule = schedule + ' ' + 'To exercise or do Yoga in the Morning.'
    displayMsg = 'I have class to attend to in the Morning.'
} else if (totalTimeSpentInClass > 5 && durationExerciseYoga > 1) {
    schedule = schedule + ' ' + 'Classes are 5 hours in total, exercising or doing Yoga takes me an hour'
    displayMsg = 'I do not have enough time to do both in the Mornung'
} else {
    schedule = schedule + ' ' + 'Exercise or Do Yoga'
    displayMsg = 'Exercising or doing Yoga is good for the body.'
}

// Display output messages
displayOnPage(schedule)
displayOnPage(displayMsg)
displayOnPage('Going to Class is top priority.')