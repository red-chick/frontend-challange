import Head from "next/head";

import PatientTable from "../src/home/components/PatientTable";

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>환자 목록</title>
      </Head>

      <main>
        <PatientTable />
      </main>

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

        main {
          padding: 50px;
        }
      `}</style>
    </div>
  );
};

export default Home;
