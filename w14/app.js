'use strict';

let subscriptionOrder = [];

class Services {
  constructor(streamingServices, streamingPlans) {
    this.streamingServices = streamingServices;
    this.streamingPlans = streamingPlans;
    this.cost = this.randomCost();
  }
  randomCost() {
    let cost = [10, 15, 8, 7, 9];
    let min = 1;
    let max = 20;
    cost = Math.floor(Math.random() * (max - min + 1)) + min;
    return cost;
  }
  streamingServicesTotal() {
    let total = 0;
    total = total + this.cost * this.streamingPlans;
    return total;
  }
  servicesTotal() {
    let total = 0;
    subscriptionOrder.forEach((service) => {
      total += service.streamingServicesTotal();
    });
    return total;
  }
  renderOrder() {
    let subscriptionOrdered = document.getElementById('orders');
    let listEl = document.createElement('h4');
    listEl.innerHTML = '';
    subscriptionOrder.forEach((service) => {
      listEl.textContent = `Thank You for purchasing ${
        service.streamingServices
      } with a plan of ${
        service.streamingPlans
      } months. Total order amount is $${service.streamingServicesTotal()}`;
      subscriptionOrdered.appendChild(listEl);
    });
    let total = document.getElementById('total');
    let totalEl = document.createElement('h2');
    total.innerHTML = '';
    totalEl.textContent = `Streaming Services Total Cost: $${this.servicesTotal()}`;
    total.appendChild(totalEl);
  }
}

document.querySelector('#form').addEventListener('submit', (e) => {
  e.preventDefault();
  let streamingServices = e.target.elements.streamingServices.value;
  let streamingPlans = e.target.elements.streamingPlans.value;
  let errorMsg = [];
  if (streamingServices === 'choose' || streamingServices == null) {
    errorMsg.push('Choose a streaming service');
  } else if (streamingPlans === 'choose' || streamingPlans == null) {
    errorMsg.push('Choose a streaming plan');
  } else {
    document.getElementById('error-message').innerHTML = '';
    const service = new Services(streamingServices, streamingPlans);
    subscriptionOrder.push(service);
    service.renderOrder();
    document.getElementById('form').reset();
  }
  if (errorMsg.length > 0) {
    let errorMessageDiv = document.getElementById('error-message');
    let errorEl = document.createElement('h4');
    errorMessageDiv.innerHTML = '';
    errorEl.textContent = errorMsg.join(', ');
    errorMessageDiv.appendChild(errorEl);
  }
});