import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api";
import { nanoid } from "nanoid";
import { Country } from "../types/Country";

const CountryList = () => {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((country: Country) => (
        <li key={nanoid()}>{country.name.common}</li>
      ))}
    </ul>
  );
};

export default CountryList;
