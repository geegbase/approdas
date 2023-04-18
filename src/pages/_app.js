import Layout from '@/components/Layout';
import { Exo_2 } from 'next/font/google';
import '@/styles/globals.scss';

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps} />);
  } else {
    return (
      <div className="text-white h-full min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#04004f] from-0% via-[#6c0979] via-40% to-[#7c00ff] to-100%">
        <style jsx global>{`
          :root {
            --font-exo2: ${exo2.style.fontFamily};
          }
        `}</style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    );
  }
}
