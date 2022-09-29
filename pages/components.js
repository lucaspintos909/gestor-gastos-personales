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

      <main className="bg-dark-primary flex flex-col gap-3 p-2">
        <h1 className="text-3xl font-bold text-accent">
        Componentes
        </h1>
        <h3 className="text-xl font-semibold text-accent-desat">font : Cantarell</h3>
        <details open className="">
          <summary className="cursor-pointer list-ite text-white transition-colors duration-200 hover:text-accent "><h2 className="text-2xl font-bold inline-block">Buttons</h2></summary>
          <article className='flex flex-col gap-2 w-6/12'>
            <h3 className="text-xl font-semibold">Types</h3>
            <div className="grid grid-cols-3 gap-4 ">
                <Button variant="contained" color="accent">Contained</Button>
                <Button variant="contained" color="danger">Contained</Button>
                <Button variant="contained" color="blue">Contained</Button>

                <Button variant="outlined" color="accent">Outlined</Button>
                <Button variant="outlined" color="danger">Outlined</Button>
                <Button variant="outlined" color="blue">Outlined</Button>

                <Button variant="gradiant" color="accent">Gradiant</Button>
                <Button variant="gradiant" color="danger">Gradiant</Button>
                <Button variant="gradiant" color="blue">Gradiant</Button>

                
            </div>
            <hr></hr>
            <h3 className="text-xl font-semibold">Sizes</h3>
            <div className="flex flex-row gap-2 mt">
              <Button variant="outlined" color="accent" size="small">Small</Button>
              <Button variant="outlined" color="danger" size="normal">Normal</Button>
              <Button variant="outlined" color="blue" size="long">Long</Button>
            </div>
          </article>
        </details>
        
        
          
      </main>

    </div>
  )
}
