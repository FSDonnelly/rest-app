let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

let users = [];
let id = 1;

app.get(`/users/:id`, (req, res) => {
  let user = getUserById(req.params.id);
  if (!user) {
    res.send(`Rejected`);
  } else {
    res.send(user);
  }
});

app.post(`/users`, (req, res) => {
  let newUser = req.body;
  newUser.id = id;
  id++;
  users.push(newUser);
  res.send(`Created!`);
});

app.put(`/users/:id`, (req, res) => {
  let user = getUserById(req.params.id);
  if (!user) {
    res.send(`Rejected`);
  } else {
    let data = req.body;
    for (const key in data) {
      user[key] = data[key];
    }
    res.send(`Updated!`);
  }
});

app.delete(`/users/:id`, (req, res) => {
  let user = getUserById(req.params.id);
  if (user) {
    users.splice(users.indexOf(user), 1);
    res.send(`Deleted`);
  } else {
    res.send(`Rejected!`);
  }
});

getUserById = id => {
  id = +id;
  for (let i = 0; i < users.length; i++) {
    const el = users[i];
    if (el.id === id) {
      return el;
    }
  }
  return null;
};

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
