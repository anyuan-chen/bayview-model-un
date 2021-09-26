import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bayview Model UN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar></Navbar>
        <div>
          <div className="flex items-center h-96 bg-main space-evenly justify-evenly flex-col">
            <h3 className="font-body text-white text-3xl">Debate. Delegate. Inspire.</h3>
            <button className="px-16 py-2 bg-white">
              Join Us
            </button>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
