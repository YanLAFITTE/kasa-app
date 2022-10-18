import { getRentals } from "../util/rentalsData";
import Banner from "../components/homeBanner";
import Card from "../components/Card";

export default function Home() {
  let getRentalsData = getRentals();
  console.log(getRentalsData);
  return (
    <div>
      <Banner />
      <Card />
    </div>
  );
}
