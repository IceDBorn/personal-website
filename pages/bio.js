import Head from 'next/head'
import Link from 'next/link'

export default function Bio() {
  return (
    <div>
      <Head>
        <title>Biography</title>
        <link rel="icon" href="/bio.ico" />
      </Head>

        <div className="customButton">
            <Link href="/">
                <p>&larr; Home</p>
            </Link>
        </div>

      <main className="container">
        <h1 className="title">
          Biography
        </h1>

        <p className="description">
          A description of my life!
        </p>

        <div className="card">
            <h3>Introduction</h3>
            <p style={{width: "1000px"}}>My name is Vasilis Kostas but I'm also known as IceDBorn.
              I was born in Sykies Arta.
              Arta's my hometown and it's a peaceful town with a population of 30 thousand people.
              As I was growing up there, one of my cousins offered me his PC for a fair price, that's how everything began!
              Fast forward to the present, programming is my passion!</p>
        </div>

        <div className="card">
          <h3>University</h3>
          <p style={{width: "1000px"}}>I successfully passed the Panhellenic exams
            and rolled into "Alexandreio Technological Educational Institute of Thessaloniki" as a computer engineer.
            The year after, the Institute turned into a University with the name of "International Hellenic University"
            and I'm currently studying "Computer Engineering and Electronic Systems".</p>
        </div>

        <div className="card">
          <h3>Present</h3>
          <p style={{width: "1000px"}}>Right now, I'm trying to get my degree and find a job in my industry.
          I'm working on some personal fun projects too,
            you can find information about them in the <Link href="/projects">Projects</Link> page!</p>
        </div>
      </main>

      <footer>
        <h3>IceDBorn</h3>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        
        .customButton {
          margin: 1rem;
          flex-basis: 45%;
          width: 90px;
          text-align: center;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          cursor: pointer;
        }

        .customButton:hover,
        .customButton:focus,
        .customButton:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
      `}</style>
    </div>
  )
}
