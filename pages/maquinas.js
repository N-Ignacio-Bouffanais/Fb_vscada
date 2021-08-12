import Layout from '../components/Layouts';
import Link from 'next/link';
import conectarDB from '../lib/DB.Connect';
import Maquina from '../models/Maquina_model';

export default function Maquinas({ maquinas }) {
    console.log(maquinas)
    return (
        <Layout>
            {/**Maquinas y boton crear maquina */}
            <div className="col-md-12">
                <div className="row">
                    <div className="card card-body m-2">
                        <div className="row machines">
                            <div className="col-md-6">
                                <h2>Maquinas</h2>
                            </div>
                            <div className="col-md-6">
                                <div className="button-make-machines">
                                    <Link href="/new_maquina">
                                        <a className="btn btn-block btn-primary float-end">Crear maquina</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/**Tarjetas de las maquinas */}
            <div className="col-md-12">
                <div className="row">
                    {
                        maquinas.map(({ _id, title, plot, ubicacion }) => (
                            <div className="col-md-6 mt-3" key={_id}>
                                <div className="card card-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="control.jpg" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3>{title}</h3>
                                            <p className="fw-light">{plot}</p>
                                            <h4>{ubicacion}<i className="fas fa-map-marker-alt"></i></h4>
                                        </div>
                                        <div className="col-md-12">
                                            <Link href={`/${_id}`}>
                                                <a className="btn btn-block btn-warning mt-2 ">Ver dispositvos</a>
                                            </Link>
                                            <Link href="#">
                                                <a className="btn btn-block btn-warning mt-2 mx-1">Seguimiento</a>
                                            </Link>
                                            <Link href="#">
                                                <a className="btn btn-block btn-warning mt-2 mx-1"><i className="fas fa-plus-circle"></i></a>
                                            </Link>
                                            <Link href="#">
                                                <a className="btn btn-block btn-warning mt-2 mx-1"><i className="fas fa-edit"></i></a>
                                            </Link>
                                            <Link href="#">
                                                <a className="btn btn-block btn-warning mt-2 mx-1"><i className="fas fa-trash-alt"></i></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
        await conectarDB()

        const res = await Maquina.find({})

        const maquinas = res.map(doc => {
            const maquina = doc.toObject()
            maquina._id = maquina._id.toString()
            return maquina
        })

        return { props: { maquinas: maquinas } }
    } catch (error) {
        console.log(error)
    }
}
