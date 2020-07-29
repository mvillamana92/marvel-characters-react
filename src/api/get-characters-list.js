const getCharactersList = async () => {
  const CHARACTERS_LIST = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&apikey=56e6b110b0a7cde25e3313d7f98fc505`;
  try {
    const response = await fetch(CHARACTERS_LIST);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

export default getCharactersList;
