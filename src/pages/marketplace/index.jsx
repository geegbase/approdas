import Head from 'next/head';
import Slider from '@/components/Slider';

export default function Marketplace() {
  return (
    <>
      <Head>
        <title>Marketplace Page</title>
      </Head>
      <main className="h-full">
        <section>
          <div className="max-w-[1200px] my-0 mx-auto py-0 px-[5px]">
            <div className="font-exo2">
              <p className="text-3xl">Approdas Marketplace</p>
              <p className="text-sm">
                Here on this page, you can see our every template that you may
                need or like
              </p>
            </div>
            <Slider />
          </div>
        </section>
      </main>
    </>
  );
}
