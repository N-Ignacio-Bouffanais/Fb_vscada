import Layout from '../components/Layouts';
import Link from 'next/link';

export default function Maquinas() {
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
                                    <Link href="#">
                                        <a className="btn btn-block btn-primary float-end">Crear maquina</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="control.jpg" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <h3>Lucas Lock</h3>
                                    <p>Seguimiento de rutas en camión</p>
                                    <h4>Lican-Ray<i className="fas fa-map-marker-alt"></i></h4>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
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
                    <div className="col-md-6">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="foto2.jpg" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <h3>Vscada</h3>
                                    <p>Software propio</p>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
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
                                        <a className="btn btn-block btn-warning mt-2 mx-1"><i class="fas fa-trash-alt"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="foto2.jpg" className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <h3>Test</h3>
                                    <p>Software de prueba</p>
                                </div>
                                <div className="col-md-12">
                                    <Link href="#">
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
                                        <a className="btn btn-block btn-warning mt-2 mx-1"><i class="fas fa-trash-alt"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
