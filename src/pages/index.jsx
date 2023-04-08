import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="h-full">
        <section>
          <div className="max-w-[1200px] my-0 mx-auto py-0 px-[5px]">Home</div>
        </section>
      </main>
    </>
  );
}
