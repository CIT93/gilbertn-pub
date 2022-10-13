// UUID
const getSavedMyDecision = function () {
  const myClassJSON = localStorage.getItem('myClass');
  if (myClassJSON != null) {
    return JSON.parse(myClassJSON);
  } else {
    return [];
  }
};

const saveMyDecision = function () {
  localStorage.setItem('myClass', JSON.stringify(myClass));
};

const removeMyDecision = function (id) {
  const myDecisionIndex = myClass.findIndex(function (myDecision) {
    return myDecision.id === id;
  });
  if (myDecisionIndex > -1) {
    myClass.splice(myDecision, 1);
    saveMyDecision();
    renderMyClass();
  }
};

const generateCreated = function (timestamp) {
  return `Created ${moment(timestamp).fromNow()}`;
};

document.querySelector('#form').addEventListener('change', function (e) {
  tuesdayThursday = e.target.checked;
  renderMyClass();
});

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

classSchedule = [];

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

// Render DOM
const renderMyClass = function () {
  document.querySelector('#output').innerHTML = '';
  myClass.forEach(function (myClass) {
    const div = document.createElement('div');

    if (myClass.tuesdayThursday === false) {
      div.textContent = `Monday. You have Biology class. It is from 11:00 am to 12:50 pm. Wednesday Friday. You have no class. All day.`;
    } else {
      div.textContent = `${myClass.finalDecision.when}. You have ${myClass.finalDecision.whatIsMyClass} class. It is from ${myClass.finalDecision.time}`;
    }

    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    div.appendChild(edit);
    edit.addEventListener('click', function () {
      location.assign(`edit.html`);
    });

    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.addEventListener('click', function () {
      removeMyDecision(myClass.id);
    });
    div.appendChild(button);
    document.getElementById('output').appendChild(div);

    const createdAtDiv = document.createElement('div');
    createdAtDiv.className = 'created-at';

    createdAtDiv.textContent = `Created ${moment
      .unix(myClass.createdAt)
      .fromNow()}`;
    div.appendChild(createdAtDiv);
  });
};