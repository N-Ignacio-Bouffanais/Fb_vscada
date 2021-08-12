import Form from "../components/Form";
import Layout from '../components/Layouts';

const New_maquina = () => {

    const formData = {
        title: "",
        plot: "",
        ubicacion: "",
    }

    return (
        <Layout>
            <div className="container">
                <h1 className="my-3">Agregar maquina</h1>
                <Form formData={formData} />
            </div>
        </Layout>
    )
}

export default New_maquina;
