let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get(`/users/2`, (req, res) => {
  res.send({ id: 2, login: `Nancy`, age: 20 });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
