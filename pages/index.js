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
        <h3 className="font-body">Debate. Delegate. Inspire.</h3>
      </main>

      <footer></footer>
    </div>
  );
}
