import axios from "axios";
export const fetchVmsData = (authRequest) => {
  return axios({
    method: "GET",
    url: `http://127.0.0.1:5000/vms`,
  });
};

export const fetchServersData = (authRequest) => {
  return axios({
    method: "GET",
    url: `http://127.0.0.1:5000/hosts`,
  });
};
