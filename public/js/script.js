let btn = document.querySelector('.btn');
let postBtn = document.querySelector('.post');
let updateBtn = document.querySelector('.update');
let deleteBtn = document.querySelector('.delete');

btn.addEventListener(`click`, () => {
  fetch(`http://localhost:3000/users/1`)
    .then(resp => resp.json())
    .then(data => console.log(data));
});

postBtn.addEventListener('click', () => {
  fetch(`http://localhost:3000/users`, {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'text/plain'
    },
    body: JSON.stringify({
      login: `Nancy`,
      age: 20
    })
  })
    .then(resp => resp.text())
    .then(data => console.log(data));
});

updateBtn.addEventListener('click', () => {
  fetch(`http://localhost:3000/users/1`, {
    method: `PUT`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'text/plain'
    },
    body: JSON.stringify({
      age: 25
    })
  })
    .then(resp => resp.text())
    .then(data => console.log(data));
});

deleteBtn.addEventListener('click', () => {
  fetch(`http://localhost:3000/users/1`, {
    method: `DELETE`
  })
    .then(resp => resp.text())
    .then(data => console.log(data));
});
