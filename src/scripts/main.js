'use strict';

const logo = document.querySelector('.logo');

function showMessage(text) {
  const msgDiv = document.createElement('div');

  msgDiv.classList.add('message');
  msgDiv.textContent = String(text);
  document.body.appendChild(msgDiv);
}

const promise1 = new Promise((resolve, reject) => {
  if (!logo) {
    reject(new Error('Element .logo nie został znaleziony.'));

    return;
  }

  logo.addEventListener('click', () => resolve('Promise was resolved!'), {
    once: true,
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise was rejected!'));
  }, 3000);
});

const handlePromise = (p) =>
  p.then(showMessage).catch((error) => showMessage(error.message));

handlePromise(promise1);
handlePromise(promise2);
