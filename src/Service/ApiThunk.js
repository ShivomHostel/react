import { Config } from '../Helper/Config';

const ApiThunk = {
  login: (number) => {
    var URL = Config.API_URL + `User_Information/?$filter=Mobile_Number eq '${number}'`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': Config.Token
      },
    };
    return fetch(URL, requestOptions)
      .then(handleResponse)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err, '__+_+_');
      });
  },
  getAppList: (id) => {
    var URL = Config.API_URL + `App_Summary/?$filter=User_Information_Record_Id eq ${id}`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': Config.Token
      },
    };
    return fetch(URL, requestOptions)
      .then(handleResponse)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err, '__+_+_');
      });
  },
  getAlertList: () => {
    var URL = `${Config.API_URL}App_Summary/?$filter=Application_Name eq 'A&E'`;
    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': Config.Token
      },
    };
    return fetch(URL, requestOptions)
      .then(handleResponse)
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err, '__+_+_');
      });
  },
};
export default ApiThunk;

function handleResponse(response) {
  // console.log('response////////////////////', response)
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log('service-------------', data)
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      // console.log("**********", error)

      return Promise.reject(error);
    }

    return data;
  });
}
