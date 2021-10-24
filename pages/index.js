import Head from "next/head";
import Navbar from "../components/navbar";
import Router from "next/router";
import SingleImageSlider from "../components/singleImageSlider";
import MultiImageSlider from "../components/multiImageSlider";
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
          <div className="flex items-center h-72 xl:h-96 bg-main space-evenly justify-evenly flex-col">
            <div className="flex">
              <div className="word1">
                <h3 className="font-body text-white text-3xl">
                  Debate. 
                </h3>
              </div>
              <div className="word2">
                <h3 className="font-body text-white text-3xl px-1.5">
                  Delegate. 
                </h3>
              </div>
              <div className="word3">
                <h3 className="font-body text-white text-3xl">
                  Inspire. 
                </h3>
              </div>
            </div>
            <button className="joinUsButton" onClick={redirectMail}>
              Join Us
            </button>
          </div>
          <div className="multiImageSlider">
            <MultiImageSlider></MultiImageSlider>
          </div>
          <div className="flex flex-col items-center h-96 bg-white space-evenly justify-evenly sm:hidden">
            <SingleImageSlider></SingleImageSlider>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}
