let myClass = getSavedMyDecision();
let tuesdayThursday = true;

// form
document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  const id = uuidv4();
  let name = e.target.elements.firstName.value;
  let classSchedule = e.target.elements.classSchedule.checked;
  if (name === '' || name == null) {
    const errorMsg = document.createElement('div');
    errorMsg.textContent = 'Please enter your name';
    document.getElementById('error-message').appendChild(errorMsg);
  } else {
    let determineClass = whatIsMyClass(classSchedule);
    let finalDecision = myDecision(determineClass);
    e.target.elements.firstName.value = '';
    let finalDecisionObj = {
      id: id,
      classSchedule: classSchedule,
      determineClass: determineClass,
      finalDecision: finalDecision,
      tuesdayThursday: tuesdayThursday,
      createdAt: moment().unix(),
    };
    myClass.push(finalDecisionObj);
    saveMyDecision();
    renderMyClass();
  }
  document.getElementById('form').reset();
});

renderMyClass();