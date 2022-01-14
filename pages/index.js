import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>IceDBorn's Page</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to my page!
        </h1>

        <p className="description">
          Select one of the sub-pages to learn more about me!
        </p>

        <div className="grid">
          <div className="card">
            <Link href="bio.html">
            <h3>Biography &rarr;</h3>
          </Link>
            <Link href="bio.html">
              <p>An introduction to my life and passion.</p>
            </Link>
          </div>

          <div className="card">
            <Link href="projects.html">
              <h3>Projects &rarr;</h3>
            </Link>
            <Link href="projects.html">
              <p>A showcase featuring my best projects.</p>
            </Link>
          </div>

            <div className="card">
                <Link href="memoir.html">
                    <h3>A Memoir to Dark Souls &rarr;</h3>
                </Link>
                <Link href="memoir.html">
                    <p>A brief story about these games and their impact on my life.</p>
                </Link>
            </div>

            <div className="card">
                <Link href="contact.html">
                    <h3>Contact Me &rarr;</h3>
                </Link>
                <Link href="contact.html">
                    <p>A page containing a form for direct contact with me via email.</p>
                </Link>
            </div>
        </div>
      </main>

        <footer>
            <h3>This website was developed using <a href="https://nextjs.org/" target="_blank">Next JS</a>
                , source code available <a href="https://github.com/IceDBorn/personal-website" target="_blank">here</a></h3>
        </footer>

      <style jsx>{`
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
