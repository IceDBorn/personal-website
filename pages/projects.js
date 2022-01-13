import Head from 'next/head'
import Link from 'next/link'

export default function Bio() {
    return (
        <div >
            <Head>
                <title>Projects</title>
                <link rel="icon" href="/projects.ico" />
            </Head>

            <div className="customButton">
                <Link href="/">
                    <p>&larr; Home</p>
                </Link>
            </div>
            <main className="container">


                <h1 className="title">
                    My Favorite Projects
                </h1>

                <p className="description">
                    Details about my favorite projects!
                </p>

                <a
                    href="https://github.com/IceDBorn/arch-linux-setup"
                    target="_blank"
                    className="card"
                >
                    <h3>arch-linux-setup &rarr;</h3>
                    <p style={{width: "1000px"}}>A collection of bash scripts
                        aiming to automate the process of an arch installation,
                        based on my needs.</p>
                </a>

                <a
                    href="https://github.com/IceDBorn/days-until-elden-ring"
                    target="_blank"
                    className="card"
                >
                    <h3>days-until-elden-ring &rarr;</h3>
                    <p style={{width: "1000px"}}>A fan-made countdown site made as a counter of the days until the
                        video-game "Elden Ring" is released.</p>
                </a>

                <a
                    href="https://github.com/IceDBorn/filmhub"
                    target="_blank"
                    className="card"
                >
                    <h3>filmhub &rarr;</h3>
                    <p style={{width: "1000px"}}>A sample movies management app made with C# as a university project.</p>
                </a>

                <a
                    href="https://github.com/IceDBorn/rtssh"
                    target="_blank"
                    className="card"
                >
                    <h3>rtssh &rarr;</h3>
                    <p style={{width: "1000px"}}>An application that hooks to RivaTuner Statistics Server
                        and displays CPU temperature and frequency of a SSH linux client on the OSD.</p>
                </a>
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
        
        .card:hover,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
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
