import Head from 'next/head'
import Link from 'next/link'

export default function Bio() {
    return (
        <div>
            <Head>
                <title>Dark Souls</title>
                <link rel="icon" href="/dark-souls.ico" />
            </Head>

            <div className="customButton">
                <Link href="/">
                    <p>&larr; Home</p>
                </Link>
            </div>

            <main className="container">
                <h1 className="title">
                    A Memoir to Dark Souls
                </h1>

                <iframe width="560" height="315" style={{borderRadius: 10}}  src="https://piped.kavin.rocks/embed/9IbPrk-yuts"
    title="Dark Souls Trailer" frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen/>

                <div className="card">
                    <h3>About the series</h3>
                    <p style={{width: "1000px"}}>The games take place within a dark, medieval fantasy setting,
                        where the player's character fights against knights, dragons, phantoms, demons, and
                        other monstrous or supernatural entities. The accretion, loss, and recovery of souls is
                        central to the narrative and gameplay of Souls games. Another recurring motif is that of a once
                        powerful and prosperous kingdom which has fallen into ruin: for example the setting of
                        Demon's Souls, Boletaria, in which the player attempts to halt the spread of a demon-infested
                        fog that threatens to consume the world. </p>
                </div>

                <div className="card">
                    <h3>My connection to the games</h3>
                    <p style={{width: "1000px"}}>I started playing the Dark Souls series in late 2015, that was the first time
                    I felt so immersed with a video-game. It's story and mechanics require concentration and focus,
                    especially why "Miyazaki - The creator" himself said that he created these games for the player
                    to feel immersed and make up his own story from the tiny hints he's given. He wants you as a player
                        to expand upon your imagination and explore the vast worlds he created for you!
                        These games can be so challenging, fun and rewarding at the same time,
                        they make for the best recipe for quality escapism from reality.</p>
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
