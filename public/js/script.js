let btn = document.querySelector('.btn');

btn.addEventListener(`click`, () => {
  fetch(`http://localhost:3000/users/2`)
    .then(resp => resp.json())
    .then(data => console.log(data));
});
