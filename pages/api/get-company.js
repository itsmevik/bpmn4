import fetch from "isomorphic-fetch";

export default async function (req, res) {
  try {
    const url = process.env.API_BASE_URI + "companies/get-company";
    var reqBody = JSON.parse(req.body);
    console.log(reqBody.user_sub, reqBody.company_id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_sub: reqBody.user_sub,
        company_id: reqBody.company_id,
      }),
    });

    const companyResponse = await response.json();
    await res.status(200).json(companyResponse);
  } catch (e) {
    res.status(500).send(e);
  }
}
