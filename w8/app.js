// Created an array with objects of my classes. Total of 3 objects, every single one has what my class is (whatIsMyClass), when, and time
const classes = [
  {
    whatIsMyClass: 'Biology',
    when: 'Monday',
    time: '11:00 am to 12:50 pm',
  },
  {
    whatIsMyClass: 'Health',
    when: 'Tuesday and Thursday',
    time: '10:30 am to 11:45 am',
  },
  {
    whatIsMyClass: 'No class',
    when: 'Wednesday and Friday',
    time: 'all day',
  },
];

let myClass = [];
let tuesdayThursday = true;

// Created a function that tells me my class schedule and what class I have to attend
const whatIsMyClass = function () {
  let whatIsMyClass = '';
  if ((classSchedule = 'Monday' && classSchedule === 1100)) {
    whatIsMyClass = 'Biology';
    // Monday Biology class start time 11:00 am
  } else if (
    (classSchedule = 'Tuesday and Thursday' && classSchedule <= 1100)
  ) {
    whatIsMyClass = 'Health';
    // Tuesday and Thursday Health class start time 10:30 am
  } else {
    whatIsMyClass = 'No class'; // Wednesday and Friday no classes
  }
  return whatIsMyClass;
};

// for each loop that tells me my decision
const myDecision = function (whatIsMyClass) {
  let myDecision = '';
  classes.forEach(function (classes) {
    if (whatIsMyClass === classes.whatIsMyClass) {
      myDecision = classes;
    } else {
      classes++;
    }
  });
  return myDecision;
};

// render (DOM)
renderMyClass = function () {
  if (tuesdayThursday === false) {
    document.querySelector('#output').innerHTML =
      'Monday. You have Biology class. It is from 11:00 am to 12:50 pm. Wednesday Friday. You have no class. All day.';
  } else {
    document.querySelector('#output').innerHTML = '';
    myClass.forEach(function (myClass) {
      const div = document.createElement('div');
      div.textContent = `${myClass.when}. You have ${myClass.whatIsMyClass} class. It is from ${myClass.time}`;
      document.getElementById('output').appendChild(div);
    });
  }
};

// form
document.querySelector('#form').addEventListener('change', function (e) {
  tuesdayThursday = e.target.checked;
});

document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault();
  classSchedule = e.target.elements.firstName.value;
  let determineClass = whatIsMyClass(classSchedule);
  let finalDecision = myDecision(determineClass);
  e.target.elements.firstName.value = '';
  myClass.push(finalDecision);
  renderMyClass();
  document.getElementById('form').reset();
});