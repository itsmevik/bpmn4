import fetch from "isomorphic-fetch";

export default async function (req, res) {
  //   try {
  const url = process.env.API_BASE_URI + "create-flow";
  //   var reqBody = JSON.parse(req.body);
  const response = await fetch(url, {
    method: "POST",

    body: req.body,
  });
  const companyResponse = await response.json();
  console.log("fssf", companyResponse);

  //res.status(200).send('OK');
  await res.status(200).json(companyResponse);
  //   } catch (e) {
  //     console.log("catch");

  //     res.status(500).send(e);
  //   }
}
