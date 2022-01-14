import Head from 'next/head'
import Link from 'next/link'

export default function Bio() {
    return (
        <div >
            <Head>
                <title>Projects</title>
                <link rel="icon" href="projects.ico" />
            </Head>

            <div className="customButton">
                <Link href="index.html">
                    <p>&larr; Home</p>
                </Link>
            </div>
            <main className="container">


                <h1 className="title">
                    My Best Projects
                </h1>

                <p className="description">
                    Details about my best projects!
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

            <style jsx>{`
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
      `}</style>

            <footer>
                <h3>This website was developed using <a href="https://nextjs.org/" target="_blank">Next JS</a>
                    , source code available <a href="https://github.com/IceDBorn/personal-website" target="_blank">here</a></h3>
            </footer>
        </div>
    )
}
