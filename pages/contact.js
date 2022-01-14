import Head from 'next/head'
import Link from 'next/link'
import {useState} from "react";

export default function Bio() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [textarea, setTextarea] = useState("")
    const [showForm, setShowForm] = useState(true)

    function handleSubmit() {
        if (name === "" || email === "" || textarea === "") {
            alert("Not all fields are filled in!")
        } else {
            setShowForm(false)
            setName("")
            setEmail("")
            setTextarea("")
            setTimeout(() => setShowForm(true), 5000)
        }

    }

    function handleTextarea(event) {
        setTextarea(event.target.value)

        if (event.target.value.length > 100) {
            alert("The message should not exceed 100 characters!")
            setTextarea(event.target.value.slice(0, 100))
        }
    }

    return (
        <div>
            <Head>
                <title>Contact Me</title>
                <link rel="icon" href="contact.ico" />
            </Head>

            <div className="customButton">
                <Link href="index.html">
                    <p>&larr; Home</p>
                </Link>
            </div>

            <main className="container">
                <h1 className="title">
                    Contact Me
                </h1>

                <p className="description">
                    Make sure to fill in all the fields with your info.
                </p>

                <div>
                    <div className="container">
                        {showForm ? <form>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." value={name}
                                   onChange={event => setName(event.target.value)}/>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Your email..." value={email}
                                   onChange={event => setEmail(event.target.value)}/>
                            <label htmlFor="subject">Message</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." value={textarea}
                                      onPaste={handleTextarea} onChange={handleTextarea} style={{height: 200}}/>
                            <input type="button" value="Submit" onClick={handleSubmit}/>
                        </form> : <span>Your message was sent successfully!</span>}
                    </div>
                </div>
            </main>

            <style jsx>{`
.container {
min-height: 80vh;
}
      `}</style>

            <footer>
                <h3>This website was developed using <a href="https://nextjs.org/" target="_blank">Next JS</a>
                    , source code available <a href="https://github.com/IceDBorn/personal-website" target="_blank">here</a></h3>
            </footer>
        </div>
    )
}
