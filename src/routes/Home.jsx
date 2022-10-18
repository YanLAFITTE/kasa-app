import { useEffect, useState } from "react";
import { getRentals } from "../util/rentalsData";
import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  const [getRentalsData, setGetRentalsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadCards() {
      setIsLoading(true);
      try {
        const getRentalsData = await getRentals();
        setGetRentalsData(getRentalsData);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadCards();
  }, []);

  return (
    <>
      <Banner />
      {isLoading && (
        <p style={{ textAlign: "center", padding: "2rem" }}>Loading...</p>
      )}
      {error && <p>{error}</p>}
      {!error && getRentalsData && <Card cards={getRentalsData} />}
    </>
  );
}
