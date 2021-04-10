import Head from "next/head";

import PatientTable from "../src/home/components/PatientTable";

const Home = () => {
  if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    return <section className="container">env가 설정되지 않았습니다.</section>;
  }

  return (
    <div className="container">
      <Head>
        <title>환자 목록 페이지</title>
      </Head>

      <main>
        <PatientTable />
      </main>

      <style>{`
        main {
          padding: 50px;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        select,
        button {
          width: 100px;
          padding: 5px 0;
        }

        select::before {
          padding-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default Home;
