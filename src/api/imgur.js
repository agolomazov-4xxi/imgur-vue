import qs from 'qs';

const CLIENT_ID = 'e372b705c67dce0';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token',
    };

    window.location.href = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      querystring
    )}`;
  },
};
