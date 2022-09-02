import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gestor de Gastos Personales</title>
        <meta
          name="description"
          content="Aplicación para llevar el control de tus gastos personales"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline">
          Gestor de Gastos Personales
        </h1>
      </main>

      <footer></footer>
    </div>
  );
}
