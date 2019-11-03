let btn = document.querySelector('.btn');
let postBtn = document.querySelector('.post');

btn.addEventListener(`click`, () => {
  fetch(`http://localhost:3000/users/2`)
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
