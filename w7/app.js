document.querySelector('button').addEventListener('click', function (e) {
  e.target.textContent = 'Daily Decision';

  const schedule = [
    'Monday, Biology from 11:00 am to 12:50 pm',
    'Tuesday and Thursday, Health from 10:30 am to 11:45 am',
    'Wednesday and Friday, no class (all day)',
  ];

  const header = document.createElement('h1');
  header.textContent = 'Schedule';
  document.querySelector('#output').appendChild(header);

  schedule.forEach(function (schedule) {
    const li = document.createElement('li');
    li.textContent = schedule;
    document.querySelector('#output').appendChild(li);
  });

  const decision = document.createElement('h1')
  decision.textContent = 'Daily Decision'
  document.querySelector('#output').appendChild(decision)

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
    let classSchedule = Math.floor(Math.random() * 1100);
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
    classes.forEach(function (item) {
      if (whatIsMyClass === item.whatIsMyClass) {
        myDecision = item;
      } else {
        item + 1;
      }
    });
    return myDecision;
  };

const dailyDecision = document.createElement('h3')
  let determineClass = whatIsMyClass();
  let finalDecision = myDecision(determineClass);
  dailyDecision.innerText = `Today is Tuesday 9/20/22: I have ${determineClass} class today. I have it on ${finalDecision.when}. It is from ${finalDecision.time}.`
  document.querySelector('#output').appendChild(dailyDecision)
});