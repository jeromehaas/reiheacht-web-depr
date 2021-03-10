const BASE_URL = 'https://devcube.io';

const sendMail = (firstname, lastname, email, message) => {
  try {
    return fetch(`${BASE_URL}/reiheacht`, {
      heders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        message,
      }),
    });
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};
module.exports = {
  sendMail,
};
