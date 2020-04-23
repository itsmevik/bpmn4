import fetch from 'isomorphic-fetch';
export default async function adduser(req, res) {
  try {
    //const tokenCache = auth0.tokenCache(req, res);
    console.log(process.env);
    const url = process.env.API_BASE_URI + 'users/add-user';
    console.log(url);
    var reqBody = JSON.parse(req.body);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_sub: reqBody.user_sub,
        name: reqBody.name,
        user_photo: reqBody.user_photo,
        email: reqBody.email
      })
    });
    const user = response.json();
    //res.status(200).send('OK');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}
