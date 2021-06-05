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
