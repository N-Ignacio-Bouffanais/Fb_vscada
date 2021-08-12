import Form from '../../components/Form';
import useSWR from 'swr';
import { useRouter } from 'next/dist/client/router';

const fetcher = async url => {
    const res = await fetch(url)
  
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    const {data} = await res.json();
  
    return data;
  };

const EditMaquina = () => {
    
    const router = useRouter();
    const { id } = router.query;

    console.log(id)

    const {data: maquina, error} = useSWR(
        id ? `/api/vscada/${id}` : null, 
        fetcher
    );

    if(error){
        return(
            <div className="container mt-5 text-center">
                <h1>Error, Id invalido</h1>
            </div>
        )
    }

    if(!maquina){
        return(
            <div className="container mt-5 text-center">
                <h1>Loading...</h1>
            </div>
        );
    }

    const formData ={
        title: maquina.title,
        plot: maquina.plot,
        ubicacion: maquina.ubicacion,
    }
    
    return (
        <div className="container">
            <h1>Editar maquina</h1>
            <Form 
            forNewMaquina={false}
            formData={formData}
            ></Form>
        </div>
    );
};

export default EditMaquina;
