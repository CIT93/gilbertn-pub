// UUID
const getSavedMyDecision = () => {
  const myClassJSON = localStorage.getItem('myClass');
  return myClassJSON ? JSON.parse(myClassJSON) : [];
};

const saveMyDecision = () => {
  localStorage.setItem('myClass', JSON.stringify(myClass));
};

const removeMyDecision = (id) => {
  const myDecisionIndex = myClass.findIndex(
    (myDecision) => myDecision.id === id
  );
  if (myDecisionIndex > -1) {
    myClass.splice(myDecision, 1);
    saveMyDecision();
    renderMyClass();
  }
};

const generateCreated = (timestamp) => {
  return `Created ${moment(timestamp).fromNow()}`;
};

document.querySelector('#form').addEventListener('change', (e) => {
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
const whatIsMyClass = () => {
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
const myDecision = (whatIsMyClass) => {
  let myDecision = '';
  classes.forEach((classes) => {
    if (whatIsMyClass === classes.whatIsMyClass) {
      myDecision = classes;
    } else {
      classes++;
    }
  });
  return myDecision;
};

// Render DOM
const renderMyClass = () => {
  document.querySelector('#output').innerHTML = '';
  myClass.forEach((myClass) => {
    const div = document.createElement('div');

    if (!myClass.tuesdayThursday) {
      div.textContent = `Monday. You have Biology class. It is from 11:00 am to 12:50 pm. Wednesday Friday. You have no class. All day.`;
    } else {
      div.textContent = `${myClass.finalDecision.when}. You have ${myClass.finalDecision.whatIsMyClass} class. It is from ${myClass.finalDecision.time}`;
    }

    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    div.appendChild(edit);
    edit.addEventListener('click', () => {
      location.assign(`edit.html`);
    });

    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.addEventListener('click', () => {
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