const displayOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// Daily Decision

// Detertime what class I have to attend in the morning
// Time is in Military Time

const classSchedule = {
  classes: {
    biology: "I have Biology class on Monday from 11:00 am to 12:50 pm.",
    health:
      "I have Health class on Tuesday and Thursday from 10:30 am to 11:45 am.",
    noClass: "I have no class scheduled on Wednesday and Friday.",
  },
  mySchedule: function (classSchedule) {
    this.schedule = classSchedule;
  },
  whatIsMyClass: "",

  myDecision: function (classSchedule) {
    if ((classSchedule = "Monday" && classSchedule === 1100)) {
      // Monday Biology class start time 11:00 am
      this.whatIsMyClass = this.classes.biology;
    } else if (
      (classSchedule = "Tuesday and Thursday" && classSchedule <= 1100)
    ) {
      // Tuesday and Thursday Health class start time 10:30 am
      this.whatIsMyClass = this.classes.health;
    } else {
      this.whatIsMyClass = this.classes.noClass; // Wednesday and Friday no classes
    }
  },
};

classSchedule.myDecision(1100, "Monday");
displayOnPage(classSchedule.whatIsMyClass);
classSchedule.myDecision(1030, "Tuesday and Thursday");
displayOnPage(classSchedule.whatIsMyClass);
classSchedule.myDecision("Wednesday and Friday");
displayOnPage(classSchedule.classes.noClass);

// let classSchedule = function (whatIsMyClass) {
//   let classMonday = "Biology";
//   let classTuesdayThursday = "Health";
//   let dayToday = "Monday";
//   let classToday = true;

//   if (classToday) {
//     whatIsMyClass = "Biology or Health";
//     displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
//   } else if (classToday === true && classMonday) {
//     whatIsMyClass = "Biology";
//     displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
//   } else if (classToday === true && classTuesdayThursday) {
//     whatIsMyClass = "Health";
//     displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
//   } else {
//     whatIsMyClass = "No class";
//     displayOnPage("What class do I have Today? ---->" + " " + whatIsMyClass);
//   }

//   return `Today is ${dayToday}, go to your ${classMonday} class.`;
// };

// let result = classSchedule("Monday", "Biology Class");
// displayOnPage(result);

// let line = function (dash = 0) {
//   displayOnPage("===/===/===/===/===/===/===/===/===/===/===/");
// };

// let dailyDecision = function (heading = 1) {
//   displayOnPage("<b>Daily Decision</b>");
// };
// // My Daily Decision
// let myDecision = function (classToday, exerciseYogaInTheMorning) {
//   if (classToday && exerciseYogaInTheMorning) {
//     whatIsMyClass = "Biology";
//     myLocation = "school";
//   } else if (
//     classToday === true &&
//     exerciseYogaInTheMorning === false &&
//     classDuration >= 1.83
//   ) {
//     whatIsMyClass = "My Biology class is 1.83 hours long";
//     myLocation = "at school";
//   } else if (
//     classToday === true &&
//     exerciseYogaInTheMorning === false &&
//     homeFromSchool >= 1
//   ) {
//     whatIsMyClass = "Out of Biology class";
//     myLocation = "Driving back home from school";
//   } else {
//     whatIsMyClass = "I have no class";
//     myLocation = "I am at home";
//   }

//   return `You have ${whatIsMyClass} class to attend in the Morning, there is no time for me to exercise or do Yoga in the Morning. I should be at ${myLocation}.`;
// };

// let newSection = line(0) + dailyDecision(1);

// let decision = myDecision(
//   "Class in the Morning",
//   "No Time to Exercise or Do Yoga"
// );
// displayOnPage(decision);