import Hero from '@/components/hero';
import Services from '@/components/services';
import WhyHireMe from '@/components/why-hire-me';

export default function Home() {
  return (
    <main className=''>
      <div className='relative bg-home-img bg-cover bg-center bg-no-repeat'>
        <div className='absolute inset-0 bg-black opacity-70 h-[75vh]' />
        <Hero />
        <WhyHireMe />
        <Services />
      </div>
    </main>
  );
}
