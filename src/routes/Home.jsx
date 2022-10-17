import { getRentals } from "../util/rentalsData";

export default function Home() {
  let getRentalsData = getRentals();
  console.log(getRentalsData);
  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Page d'Accueil</h2>
    </div>
  );
}
