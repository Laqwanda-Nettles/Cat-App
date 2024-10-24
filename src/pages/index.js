import CatFacts from "../components/CatFacts";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="text-4xl text-center font-bold">
        Welcome to the Cat App!
      </h1>
      <CatFacts />
    </div>
  );
}
