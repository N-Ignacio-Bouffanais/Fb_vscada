import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import { mutate } from "swr";

const Form = ({ formData, forNewMaquina = true }) => {

    const router = useRouter();

    const [form, setForm] = useState({
        title: formData.title,
        plot: formData.plot,
        ubicacion: formData.ubicacion,
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
        e.preventDefault();
        forNewMaquina ? postData(form) : putData(form);
    };

    const putData = async (form) => {
        setMenssage([]);
        const { id } = router.query;
        try {
          const res = await fetch(`/api/vscada/${id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(form),
          });
          if (!res.ok) {
            throw new Error(res.status);
          }
    
          const { data } = await res.json();
          mutate(`/api/vscada/${id}`, data, false);
          router.push("/maquinas");
        } catch (error) {
          setMessage("Falló la edición");
        }
      };


    const postData = async (form) => {
        try {

            const res = await fetch('api/vscada', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })

            const data = await res.json()
            console.log(data)
            if (!data.success) {
                for (const key in data.error.errors) {
                    let error = data.error.errors[key];
                    setMenssage(oldmenssage => [
                        ...oldmenssage,
                        { message: error.message }
                    ]);
                }
            }
            else {
                router.push("/maquinas")
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
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
                placeholder="description"
                autoComplete="off"
                name="plot"
                value={form.plot}
                onChange={handleChange}
            />
            <input
                className="form-control my-2"
                type="text"
                placeholder="ubicacion"
                autoComplete="off"
                name="ubicacion"
                value={form.ubicacion}
                onChange={handleChange}
            />
            <button className="btn btn-primary w-100" type="submit">
                {forNewMaquina ? "Agregar" : "Editar"}
            </button>
            <Link href="/maquinas">
                <a className="btn btn-warning w-100 my-2">Volver</a>
            </Link>
            {
                message.map(({ message }) => (
                    <p key={message}>{message}</p>
                ))
            }
        </form>
    )

}

export default Form
