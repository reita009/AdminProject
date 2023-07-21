import axios from "axios";

const login = "http://localhost:8081/login";
const users = "http://localhost:8081/admin/users";
const finance = "http://localhost:8081/admin/finances";

export const Api = {
  getSessionUser: async () => {
    let response = await axios.get(login);
    return response.data;
  },
  getUsers: async () => {
    let response = await axios.get(users);
    return response.data.users;
  },
  geFinance: async () => {
    let response = await axios.get(finance);
    return response.data;
  },
};
