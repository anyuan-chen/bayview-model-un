import Head from "next/head";
import Navbar from "../components/navbar";
import Router from "next/router";
import ImageSlider from "../components/imageSlider";
import NewImageSlider from "../components/newImageSlider";
export default function Home() {
  const redirectMail = () => {
    Router.push("/mailing");
  };

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
            <h3 className="font-body text-white text-3xl">
              Debate. Delegate. Inspire.
            </h3>
            <button className="px-16 py-2 bg-white" onClick={redirectMail}>
              Join Us
            </button>
          </div>
          <div className="flex items-center h-96 bg-white space-evenly justify-evenly flex-col">
            <NewImageSlider></NewImageSlider>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
