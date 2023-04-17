import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <main className="h-full">
        <section>
          <div className="max-w-[1200px] my-0 mx-auto py-0 px-[5px]">About</div>
        </section>
      </main>
    </>
  );
}
