import React from 'react';
import Head from "next/head";
import Button from '../components/base/Buttons/Button';

export default function Components() {
  return (
    <div>
        <Head>
            <title>Componentes</title>
            <meta
                name="description"
                content="Aplicación para llevar el control de tus gastos personales"
                />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="bg-dark-primary">
        <h1 className="text-3xl font-bold text-accent">
        Componentes
        </h1>
        <h3 className="text-xl font-semibold text-accent-desat">font : Cantarell</h3> 
        <div className="grid grid-cols-3 gap-4 w-6/12 ">
            <Button variant="contained" color="accent">Sexo</Button>
            <Button variant="contained" color="danger">Sexo</Button>
            <Button variant="contained" color="blue">Sexo</Button>

            <Button variant="outlined" color="accent">Sexo</Button>
            <Button variant="outlined" color="danger">Sexo</Button>
            <Button variant="outlined" color="blue">Sexo</Button>

            <Button variant="gradiant" color="accent">Sexo</Button>
            <Button variant="gradiant" color="danger">Sexo</Button>
            <Button variant="gradiant" color="blue">Sexo</Button>
        </div>
      </main>

    </div>
  )
}
