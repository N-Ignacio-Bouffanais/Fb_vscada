import Layout from '../components/Layouts';
import Link from 'next/link';

export default function custom404() {
    return (
        <Layout>
            <div className="text-center">
            <h1>404</h1>
            <p>Esta pagina no existe.Por favor vuelva al inicio</p>
            <Link href="/">
                <a>Home</a>
            </Link>
            </div>
        </Layout>
    )
}