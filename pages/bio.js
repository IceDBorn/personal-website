import Head from 'next/head'
import Link from 'next/link'

export default function Bio() {
  return (
    <div>
      <Head>
        <title>Biography</title>
        <link rel="icon" href="bio.ico" />
      </Head>

        <div className="customButton">
            <Link href="index.html">
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
            you can find information about them in the <Link href="projects.html">Projects</Link> page!</p>
        </div>
      </main>

        <footer>
            <h3>This website was developed using <a href="https://nextjs.org/" target="_blank">Next JS</a>
                , source code available
                <a href="https://github.com/IceDBorn/personal-website" target="_blank"> here</a></h3>
        </footer>
    </div>
  )
}
