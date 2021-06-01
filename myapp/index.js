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

app.get("/multiply/:num1/:num2", function (request, response) {
  let multiplyId = request.params.num1;
  let multiplyId2 = request.params.num2;

  let m1 = parseInt(multiplyId);
  let m2 = parseInt(multiplyId2);

  const resulta = m1 * m2;
  response.status(200).json({ result: resulta });
});

app.get("/divide/:num1/:num2", function (request, response) {
  let divideId = request.params.num1;
  let divideId2 = request.params.num2;

  let d1 = parseInt(divideId);
  let d2 = parseInt(divideId2);

  let resultados = d1 / d2;

  response.status(200).json({ result: resultados });
  console.log(resultados);
});

app.listen(3000, () => console.log("running all server"));
