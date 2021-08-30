import Navbar from './Navbar';
import Nprogress from 'nprogress';
import {useEffect} from 'react';
import {useRouter} from 'next/router';


const Layout = ({ children }) => {
    
    const router = useRouter();
    
    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            Nprogress.start();
        }
        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => Nprogress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }

    }, [])

    return (
        <>
            <Navbar />

            <main className="container py-4">
            {children}
            </main>

            <footer className="bg-dark text-light text-center">
                <div className="container p-4">
                    <h1>&copy; FactorB</h1>
                    <p>2017 - {new Date().getFullYear()}</p>
                    <p>Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    )
}
    
export default Layout;