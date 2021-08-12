import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useState } from 'react'

const New_maquina = () => {

    const router = useRouter()

    const [form, setForm] = useState({
        title: "",
        plot: "",
    });

    const [message, setMenssage] = useState([])

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        postData(form)
    }

    const postData = async (form) => {
        try {
            console.log(form);
            const res = await fetch('api/vscada', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })

            const data = await res.json()
            console.log(data)
            if(!data.success){
                for (const key in data.error.errors) {
                    let error = data.error.errors[key];
                    setMenssage(oldmenssage => [
                        ...oldmenssage,
                        {message: error.message}
                    ]);
                }
            }
            else{
                router.push("/")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <h1 className="my-3">Agregar maquina</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="title"
                    autoComplete="off"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    className="form-control my-2"
                    type="text"
                    placeholder="plot"
                    autoComplete="off"
                    name="plot"
                    value={form.plot}
                    onChange={handleChange}
                />
                <button className="btn btn-primary w-100" type="submit">Agregar</button>
                <Link href="/maquinas">
                    <a className="btn btn-warning w-100 my-2">Volver</a>
                </Link>
                {
                    message.map(({message}) =>(
                        <p key={message}>{message}</p>
                    ))
                }
            </form>
        </div>
    )
}

export default New_maquina
