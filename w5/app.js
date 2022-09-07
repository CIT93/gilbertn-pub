const displayOnPage = function (text) {
  let newParagraph = document.createElement("p");
  newParagraph.innerHTML = text;
  let outputDiv = document.getElementById("output");
  outputDiv.append(newParagraph);
};

// Daily Decision

// Detertime what class I have to attend in the morning
// An array that has objects of my classes. Total of 3 objects every single one has what my class is (whatIsMyClass), when, and time.
const classes = [
  {
    whatIsMyClass: "Biology",
    when: "Monday",
    time: "11:00 am to 12:50 pm",
  },
  {
    whatIsMyClass: "Health",
    when: "Tuesday and Thursday",
    time: "10:30 am to 11:45 am",
  },
  {
    whatIsMyClass: "No class",
    when: "Wednesday and Friday",
    time: "all day",
  },
];

// Created a function that tells me my class schedule and what class I have to attend
const whatIsMyClass = function (classSchedule) {
  let whatIsMyClass = "";
  if ((classSchedule = "Monday" && classSchedule === 1100)) {
    whatIsMyClass = "Biology";
    // Monday Biology class start time 11:00 am
  } else if (
    (classSchedule = "Tuesday and Thursday" && classSchedule <= 1100)
  ) {
    whatIsMyClass = "Health";
    // Tuesday and Thursday Health class start time 10:30 am
  } else {
    whatIsMyClass = "No class"; // Wednesday and Friday no classes
  }
  return whatIsMyClass;
};

// for each loop that tells me my decision
const myDecision = function (whatIsMyClass) {
  let myDecision = "";
  classes.forEach(function (item) {
    if (whatIsMyClass === item.whatIsMyClass) {
      myDecision = item;
    } else {
      item + 1;
    }
  });
  return myDecision;
};

// Output on the page
let determineClass = whatIsMyClass();
let finalDecision = myDecision(determineClass);
displayOnPage(
  `Today is Tuesday (9/6/22): I have ${determineClass} class today. I have it on ${finalDecision.when}. It is from ${finalDecision.time}`
);