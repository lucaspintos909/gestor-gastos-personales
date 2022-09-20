import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 Error</title>
        <meta
          name="description"
          content="Aplicación para llevar el control de tus gastos personales"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen flex flex-col ">
        <h1 className="my-8 text-8xl font-bold text-center">404</h1>
        <div className="flex flex-col items-center w-6/12 mx-auto bg-dark-secundary rounded-lg p-4">
            <h2 className="text-lg">
                Caiste en cualquier lado mostro, lo que buscabas 
                <span className="font-extrabold"> no existe</span>
            </h2>
            <p className="my-10 text-2xl">Seguime por aca y volvemos a un lugar coherente</p>
            <a className="rounded-lg px-10 py-3 font-bold bg-accent  " href="/colors">← Volver</a>
            <a className="rounded-lg px-10 py-3 font-bold mt-1 border border-accent   text-accent transition-colors hover:bg-accent hover:text-white  " href="/colors">← Volver</a>
            <a className="rounded-lg px-10 py-3 font-bold mt-1 bg-accent scale-100 hover:scale-105 transition" href="/colors">← Volver</a>
            <a className="rounded-lg px-10 py-3 font-bold bg-gradient-to-r mt-1 from-accent to-accent-desat" href="/colors">← Volver</a>
        </div>
        
      </main>

      <footer></footer>
    </div>
  );
}
