import axios from 'axios';

const api = axios.create({
  baseURL: "https://62d085741cc14f8c088b8a7b.mockapi.io/api/v1",
});

export async function fetchTickets() {
  const response = await api.get("/ticket")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });

  return response;
}