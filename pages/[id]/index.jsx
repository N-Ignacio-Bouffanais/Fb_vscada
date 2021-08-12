import conectarDB from '../../lib/DB.Connect';
import Maquina from '../../models/Maquina_model';
import Link from 'next/link';

const MaquinaPage = ({ success, error, maquina }) => {
    console.log(success)
    console.log(error)
    console.log(maquina)

    if (!success) {
        return (
            <div className="container text-center my-5">
                <h1>{error}</h1>
                <Link href="/maquinas">
                    <a className="btn btn-success">Volver...</a>
                </Link>
            </div>
        );
    }

    return (
        <div className="container">
            <h1>detalle de maquina</h1>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h3 className="text-uppercase">{maquina.title}</h3>
                    </div>
                    <p className="fw-light">{maquina.plot}</p>
                    <h4>{maquina.ubicacion}</h4>
                    <Link href="/dashboard">
                        <a className="btn btn-success btn-sm me-2">Volver</a>
                    </Link>
                    <Link href={`/${maquina._id}/edit`}>
                        <a className="btn btn-warning btn-sm me-2">Editar</a>
                    </Link>
                    <button className="btn btn-danger btn-sm">Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default MaquinaPage;

export async function getServerSideProps({ params }) {
    try {
        await conectarDB()

        const maquina = await Maquina.findById(params.id).lean();

        if (!maquina) {
            return { props: { success: false, error: "Maquina no encontrada" } };
        }

        console.log(maquina);
        maquina._id = maquina._id.toString();

        return { props: { success: true, maquina } }
    } catch (error) {
        console.log(error);
        if (error.kind === 'ObjectId') {
            return { props: { success: false, error: "ID no valido" } };
        }
        return { props: { success: false, error: "Error de servidor" } };
    }
}
