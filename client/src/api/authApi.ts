import { axiosClient } from "./axiosClient";

interface Auth {
  email: string;
  password: string;
}

const authApi = {
  login(data: Auth) {
    const url = "/auth/login";

    return axiosClient.post(url, data);
  },
};
export default authApi;
