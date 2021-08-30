import Layout from '../components/Layouts';
import { skills, experiences,projects } from '../profile';
import Link from 'next/link';
import Image from 'next/image';

export default function blog() {
    return (
        <Layout>
            {/**Header card */}
            <header>
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-3">
                                <Image src="/foto1.jpg" alt="imagen Factorb" width={300} height={200} ></Image>
                            </div>
                            <div className="col-md-9">
                                <h1>FactorB</h1>
                                <h3>Ing. Electrica y Automatización</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores saepe architecto blanditiis veniam error optio dolorem tenetur nobis dolore minima, odit minus soluta nisi quidem animi veritatis cupiditate praesentium provident.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/** Second section*/}
            <div className="row py-3">
                <div className="col-md-4">
                    <div className="card card-bg-light">
                        <div className="card-body">
                            <h1>skills</h1>

                            {
                                skills.map(({ skill, percentage }, i) => (
                                    <div className="py-3" key={i}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${percentage}%` }}
                                            >

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className=" card card-bg-light">
                        <div className="card-body">
                            <h1>Experiencia</h1>
                            <ul>
                                {
                                    experiences.map(({ title, description, from, to }, index) => (
                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/** Portafolio */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portafolio</h1>
                            </div>
                            {
                                projects.map(({name,description,image}, i) => (
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card h-100">
                                            <div className="overflow">
                                            <Image src={`/${image}`} alt="imagenes proyectos" layout="responsive" width={300} height={300} className="card-img-top"></Image>
                                            </div>
                                            <div className="card-body">
                                                <h3>{name}</h3>
                                                <p>{description}</p>
                                                <a href="#!">Conocenos</a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="text-center mt-4">
                            <Link href="/maquinas">
                                <a className="btn btn-outline-light" >Nuestros proyectos</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}