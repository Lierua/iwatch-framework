import Image from "next/image";
import Main from "./components/Main";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="content">
      <Nav />
      <Main />
    </div>
  );
}
