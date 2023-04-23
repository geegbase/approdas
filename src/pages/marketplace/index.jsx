import Head from 'next/head';
import Slider from '@/components/Slider';
import { products } from '@/utils/mock';

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
            <div className="flex flex-row flex-wrap gap-[10px] [&>div]:basis-[calc(calc(100%/1)-calc(10px/1*0))] md:[&>div]:basis-[calc(calc(100%/2)-calc(10px/2*1))] lg:[&>div]:basis-[calc(calc(100%/3)-calc(10px/3*2))]">
              {products.map((product, index) => {
                return <Slider product={product} key={index} />;
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
