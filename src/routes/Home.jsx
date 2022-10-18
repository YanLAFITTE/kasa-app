import { getRentals } from "../util/rentalsData";
import Banner from "../components/Banner";

export default function Home() {
  let getRentalsData = getRentals();
  console.log(getRentalsData);
  return (
    <div>
      <Banner />
    </div>
  );
}
