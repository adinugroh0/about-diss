import Image from "next/image";
import Beranda from "@/components/Beranda";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <main className="bg-gray-700">
      <Beranda />
      <Hello />
    </main>
  );
}
