const displayOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// Daily Decision
// On the weekdays, I have to figure out if I can do yoga or exercise before lunch because I might have class in the morning.

// Global Variables
// Minutes converted into hours 110 minutes = 1.83 hours
// let dayToday = 'Monday'
// let classStartTime = 11 // Class Starts at 11 am
// let classDuration = 1.83
// let homeFromSchool = 1 // I get back home from school at 1 pm
// let classToday = true;
// let myLocation = 'School'
// let exerciseYogaInTheMorning = false;

// Detertime what class I have to attend in the morning
let classSchedule = function (whatIsMyClass) {
  let classMonday = "Biology";
  let classTuesdayThursday = "Health";
  let dayToday = "Monday";
  let classToday = true;

  if (classToday) {
    whatIsMyClass = "Biology or Health";
    displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
  } else if (classToday === true && classMonday) {
    whatIsMyClass = "Biology";
    displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
  } else if (classToday === true && classTuesdayThursday) {
    whatIsMyClass = "Health";
    displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
  } else {
    whatIsMyClass = "No class";
    displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
  }

  return `Today is ${dayToday}, go to your ${classMonday} class.`;
};

let result = classSchedule("Monday", "Biology Class");
displayOnPage(result);

let line = function (dash = 0) {
  displayOnPage("===/===/===/===/===/===/===/===/===/===/===/");
};

let dailyDecision = function (heading = 1) {
  displayOnPage("<b>Daily Decision</b>");
};
// My Daily Decision
let myDecision = function (classToday, exerciseYogaInTheMorning) {
  if (classToday && exerciseYogaInTheMorning) {
    whatIsMyClass = "Biology";
    myLocation = "school";
  } else if (
    classToday === true &&
    exerciseYogaInTheMorning === false &&
    classDuration >= 1.83
  ) {
    whatIsMyClass = "My Biology class is 1.83 hours long";
    myLocation = "at school";
  } else if (
    classToday === true &&
    exerciseYogaInTheMorning === false &&
    homeFromSchool >= 1
  ) {
    whatIsMyClass = "Out of Biology class";
    myLocation = "Driving back home from school";
  } else {
    whatIsMyClass = "I have no class";
    myLocation = "I am at home";
  }

  return `You have ${whatIsMyClass} class to attend in the Morning, there is no time for me to exercise or do Yoga in the Morning. I should be at ${myLocation}.`;
};

let newSection = line(0) + dailyDecision(1);

let decision = myDecision(
  "Class in the Morning",
  "No Time to Exercise or Do Yoga"
);
displayOnPage(decision);