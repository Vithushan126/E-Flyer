import axios from "axios";

//base url
const APIUser = axios.create({
  baseURL: "https://backend.graycorp.io:9100/eflyer-bookings/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Update the API function to pass parameters in the query string
export const GetFlightAvailablity = (dep_date, des_date, dep_apt, des_apt) => {
  console.log("Requesting flight availability");
  return APIUser.get(`/getFlights`, {
    params: {
      dep_date,
      des_date,
      dep_apt,
      des_apt,
    },
  });
};
