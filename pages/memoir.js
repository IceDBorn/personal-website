import Head from 'next/head'
import Link from 'next/link'

export default function Bio() {
    return (
        <div>
            <Head>
                <title>A Memoir to Dark Souls</title>
                <link rel="icon" href="dark-souls.ico" />
            </Head>

            <div className="customButton">
                <Link href="index.html">
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
                <h3>This website was developed using <a href="https://nextjs.org/" target="_blank">Next JS</a>
                    , source code available
                    <a href="https://github.com/IceDBorn/personal-website" target="_blank"> here</a></h3>
            </footer>
        </div>
    )
}
