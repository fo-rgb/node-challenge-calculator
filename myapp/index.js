const express = require("express");
const app = express();

app.get("/add/:num1/:num2", function (request, response) {
  let addId = request.params.num1;
  let addId2 = request.params.num2;
  console.log(addId);
  console.log(addId2);
  let n1 = parseInt(addId);
  console.log(n1);
  let n2 = parseInt(addId2);
  console.log(n2);

  const result = n1 + n2;

  response.status(200).json({ result: result });
  //   response.send(result);
});

app.get("/substract/:num1/:num2", function (request, response) {
  let sustraId = request.params.num1;
  let sustraId2 = request.params.num2;

  let s1 = parseInt(sustraId);
  let s2 = parseInt(sustraId2);

  const resultado = s1 - s2;

  response.status(200).json({ result: resultado });
});

app.listen(3000, () => console.log("running all server"));
