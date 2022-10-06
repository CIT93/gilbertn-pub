let myClass = getSavedMyDecision();
let tuesdayThursday = true;

// form
document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault();
  classSchedule = e.target.elements.firstName.value;
  if (name.value === '' || name.value == null) {
    const errorMsg = document.createElement('div');
    errorMsg.textContent = 'Please enter your name';
    document.getElementById('error-message').appendChild(errorMsg);
  } else {
    let determineClass = whatIsMyClass(classSchedule);
    let finalDecision = myDecision(determineClass);
    e.target.elements.firstName.value = '';
    let finalDecisionObj = {
      id: uuidv4(),
      classSchedule: classSchedule,
      determineClass: determineClass,
      finalDecision: finalDecision,
      tuesdayThursday: tuesdayThursday,
    };
    myClass.push(finalDecisionObj);
    saveMyDecision();
    renderMyClass();
  }
});