const BASE_URL = 'https://devcube.io';

const sendMail = (name, email, phone, message) => {
  try {
    return fetch(`${BASE_URL}/reiheacht`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
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
