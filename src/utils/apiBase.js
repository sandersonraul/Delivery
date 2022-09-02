import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://207.246.118.151/",
  timeout: 1000,
});

export const baseURL = "http://207.246.118.151/";

export async function Login() {
  const res = await axios.post(`${baseURL}api/user/login/`, {
    email: "l4@gmail.com",
    password: "ifrn12345",
  });
  return res.data;
}
