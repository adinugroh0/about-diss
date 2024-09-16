import Image from "next/image";
import Beranda from "@/components/Beranda";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <main>
      <Hello />
      <Beranda />
    </main>
  );
}
