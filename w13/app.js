'use strict';

let subscriptionOrder = [];

const Services = function (streamingServices, streamingPlans) {
  this.streamingServices = streamingServices;
  this.streamingPlans = streamingPlans;
  this.cost = this.randomCost();
};

Services.prototype.randomCost = function () {
  return Math.floor(Math.random() * 50);
};

Services.prototype.multiplyServices = function () {
  return this.cost * this.streamingPlans;
};

const generateService = (streamingServices, streamingPlans) => {
  let service = new Services(streamingServices, streamingPlans);
  return service;
};

Services.prototype.servicesTotal = function () {
  let total = 0;
  for (let i = 0; i < subscriptionOrder.length; i++) {
    total += subscriptionOrder[i].multiplyServices();
  }
  return total;
};

Services.prototype.renderTotalCost = function () {
  let total = document.getElementById('total');
  total.textContent = `Streaming Services Total Cost: $${this.servicesTotal()}`;
};

Services.prototype.renderServices = function () {
  let subscriptionOrdered = document.getElementById('orders');
  subscriptionOrdered.innerHTML = '';
  for (let i = 0; i < subscriptionOrder.length; i++) {
    let listEl = document.createElement('li');
    subscriptionOrdered.appendChild(listEl);
    listEl.textContent = `Thank You for purchasing ${
      subscriptionOrder[i].streamingServices
    } with the plan of ${
      subscriptionOrder[i].streamingPlans
    } months: total order amount is $${subscriptionOrder[i].multiplyServices()}`;
  }
};

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let streamingServices = document.getElementById('streaming-services').value;
  let streamingPlans = document.getElementById('plans').value;
  if (streamingServices === 'choose' || streamingServices == null) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Choose a service';
    document.getElementById('error-message').appendChild(errorMessage);
  } else if (streamingPlans === 'choose' || streamingPlans == null) {
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'Choose a plan';
    document.getElementById('error-message').appendChild(errorMessage);
  } else {
    document.getElementById('error-message').innerHTML = '';
    e.target.elements.streamingServices.value = ''
    e.target.elements.streamingPlans.value = ''
    let service = generateService(streamingServices, streamingPlans);
    subscriptionOrder.push(service);
    service.renderServices();
    service.renderTotalCost();
  }
});