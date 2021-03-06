import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Clubhouse Show</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary min-h-screen flex flex-col items-center py-0.5 ">
        <h1 className="text-4xl text-gray font-bold mt-8 sticky top-0 pt-8 pb-2 bg-primary w-screen text-center">
          <Image src="/home-icon.svg" width="28" height="28" />
          The Cantonese Show
        </h1>
        <h3 className="text-2xl text-gray font-bold m-4 sticky top-0 pt-4 pb-2 py-4 bg-primary w-screen text-center">
          🔗 Links
        </h3>
        {/* <h1 className="text-5xl text-white font-bold m-8 sticky top-0 bg-gray-800 w-72 text-center">🔗 Links</h1> */}

        <div className="grid grid-cols-1">
          <a
            href="./"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
          >
            ☀️ Home Page
          </a>
          <a
            href="https://www.joinclubhouse.com/club/%E5%BB%A3%E6%9D%B1%E8%A9%B1%E7%AF%80%E7%9B%AE%E5%B7%A1%E7%A6%AE-cantonese-show"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
          >
            🏠 The Clubhouse Show
          </a>
          <a
            href="https://LinkedIn.com"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
            target="_blank"
          >
            🤝 LinkedIn
          </a>
          <a
            href="https://instagram.com/"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
            target="_blank"
          >
            📷 Instagram
          </a>
          <a
            href="https://telegram.com"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
            target="_blank"
          >
            📞 Telegram
          </a>
          <a
            href="https://twitter.com"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
            target="_blank"
          >
            🦅 Twitter
          </a>
          <a
            href="https://substack.com/for-writers"
            className="bg-white rounded-lg py-4 pl-8 w-72 my-2 shadow hover:shadow-xl duration-200"
            target="_blank"
          >
            📧 Join our Newsletter
          </a>
        </div>
      </div>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}<span className = 'font-bold'>{" "}The Cantonese Show</span>
        </a>
      </footer> */}
    </div>
  );
}
