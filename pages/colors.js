import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paleta de Colores</title>
        <meta
          name="description"
          content="Aplicación para llevar el control de tus gastos personales"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-dark-primary">
        <h1 className="text-3xl font-bold text-accent">
        Paleta de Colores
        </h1>
        <h3 className="text-xl font-semibold text-accent-desat">font : Cantarell</h3> 
        <div className="grid w-10/12 m-5">
            <div className="grid grid-cols-2 gap-2 w-10/12">
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-dark-primary rounded-lg border-2 boarder-white-self"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal block">"dark-primary" : Para Fondos</h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-dark-secundary rounded-lg border-2 border-white-self"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"dark-secundary" : Para Items</h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-accent rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"accent" : Para focus y demas</h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-accent-desat rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"accent-desat" : Color de acento desaturado</h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-danger rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"danger" : Color peligro </h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-danger-desat rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"danger-desat" : Color peligro desaturado </h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-white-self rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"white-self" : Color peligro desaturado </h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-blue-accent rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"blue-accent" : AZUL </h2>
                </div>
                <div className="flex flex-row gap-1 bg-dark-secundary rounded-lg p-4 outline outline-offset-1 outline-transparent hover:outline-accent">
                    <div className="w-20 h-20 bg-blue-accent-desat rounded-lg"></div>
                    <h2 className="text-white-self font-bold  text-center whitespace-normal">"blue-accent-desat" : AZUL triste :'( </h2>
                </div>
            </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
