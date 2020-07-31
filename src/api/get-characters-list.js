import { BASE_URL, API_KEY } from "./constants";

const getCharactersList = async (limit, offset, search) => {
  let URL =
    BASE_URL +
    "?" +
    "limit=" +
    limit +
    "&" +
    "offset=" +
    offset +
    "&" +
    "apikey=" +
    API_KEY;

  if (search !== "") {
    URL =
      BASE_URL + "?" + "nameStartsWith=" + search + "&" + "apikey=" + API_KEY;
  }

  //console.log(URL);

  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

export default getCharactersList;
