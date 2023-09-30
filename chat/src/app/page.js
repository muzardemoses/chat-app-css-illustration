import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-4xl font-bold text-center">
        I am a <span className="text-blue-500">blue</span> heading
      </h2>
    </main>
  );
}
