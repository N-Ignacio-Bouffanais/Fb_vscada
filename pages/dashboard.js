import Layout from '../components/Layouts';
import conectarDB from '../lib/DB.Connect';
import Maquina from '../models/Maquina_model';

export default function Dashboard({ maquinas }) {
    console.log(maquinas)
    return (
        <Layout>
            <h1>Tablero</h1>

            {
                maquinas.map(({ _id, title, plot }) => (
                    <div className="card mb-2" key={_id}>
                        <div className="card-body">
                            <div className="h5 text-uppercase">{title}</div>
                            <p className="fw-light">{plot}</p>
                        </div>
                    </div>
                ))
            }

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

        return { props: { maquinas } }
    } catch (error) {
        console.log(error)
    }
}