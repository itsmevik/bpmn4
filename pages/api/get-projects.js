import fetch from 'isomorphic-fetch';

export default async function(req, res) {
  try {
    const url = process.env.API_BASE_URI + 'projects/get-projects';
    var reqBody = JSON.parse(req.body);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_sub: reqBody.user_sub,
        company_id: reqBody.company_id
      })
    });
    const projectsResponse = await response.json();
    await res.status(200).json(projectsResponse);
  } catch (e) {
    res.status(500).send(e);
  }
}
