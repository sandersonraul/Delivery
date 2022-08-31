import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://207.246.118.151/",
  timeout: 1000,
});

export async function detailProduct(id) {
  const res = await apiClient.get(`api/lojas/listar_detalhes_produto/${id}`);
  return res.data;
}
