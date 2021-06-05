import Head from 'next/head';
import About from '../components/home/About';
import CTA from '../components/home/CTA';
import Hero from '../components/home/Hero';
import Portfolio from '../components/home/Portfolio';
import Service from '../components/home/Service';
import Layout from '../components/layouts/Layout';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Ebn Sina - Full Stack Developer &amp; JavaScript Evangelist
        </title>
      </Head>
      <Layout>
        <Hero />
        <About />
        <Service />
        <Portfolio />
        <CTA />
      </Layout>
    </div>
  );
}
