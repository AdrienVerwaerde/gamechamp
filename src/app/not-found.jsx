import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>NotFound</h2>
            <p>Sorry, this page doesn't exist</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default NotFound