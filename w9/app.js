let myClass = getSavedMyDecision();
let tuesdayThursday = true;

// form
document.querySelector('#form').addEventListener('submit', function (e) {
  e.preventDefault();
  let name = e.target.elements.firstName.value;
  if (name === '' || name == null) {
    const errorMsg = document.createElement('div');
    errorMsg.textContent = 'Please enter your name';
    document.getElementById('error-message').appendChild(errorMsg);
  } else {
    let determineClass = whatIsMyClass();
    let finalDecision = myDecision(determineClass);
    e.target.elements.firstName.value = '';
    let finalDecisionObj = {
      id: uuidv4(),
      whatIsMyClass: '',
      determineClass: determineClass,
      finalDecision: finalDecision,
      tuesdayThursday: tuesdayThursday,
    };
    myClass.push(finalDecisionObj);
    saveMyDecision();
    renderMyClass();
  }
});