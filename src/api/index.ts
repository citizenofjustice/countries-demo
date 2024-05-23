export const getCountries = async () => {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if (!response.ok) throw new Error("Could not fetch countries");
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.error(error);
  }
};
