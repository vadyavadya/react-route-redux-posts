import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            This page doesn't exist. Go <Link style={{ color: "rgb(219 36 36)", textDecoration: 'underline' }} to="/">home</Link>
        </div>
    )
}

export { NotFoundPage };