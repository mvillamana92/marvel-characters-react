const getUniqueCharacter = async (id) => {
  const UNIQUE_CHARACTER = `https://gateway.marvel.com/v1/public/characters/${id}?apikey=56e6b110b0a7cde25e3313d7f98fc505`;

  try {
    const response = await fetch(UNIQUE_CHARACTER);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();

    //console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return "Error";
  }
};

export default getUniqueCharacter;
