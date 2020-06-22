import fetch from "isomorphic-fetch";

export default async function (req, res) {
  try {
    const url = process.env.API_BASE_URI + "flows/get-flow";
    var reqBody = JSON.parse(req.body);
    console.log(reqBody.user_sub, reqBody.f_id);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_sub: reqBody.user_sub,
        f_id: reqBody.f_id,
      }),
    });

    const flowResponse = await response.json();
    await res.status(200).json(flowResponse);
  } catch (e) {
    res.status(500).send(e);
  }
}
