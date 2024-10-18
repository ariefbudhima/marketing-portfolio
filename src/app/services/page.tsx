import Image from "next/image";
import Sidebar from "../component/sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between p-24">
      <div className="flex">
      <Sidebar />
    </div>
    </main>
  );
}
