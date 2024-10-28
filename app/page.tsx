import Hero from '@/components/hero';
import Services from '@/components/services';

export default function Home() {
  return (
    <main className=''>
      <div className='relative bg-home-img bg-cover bg-center'>
        <div className='absolute inset-0 bg-black opacity-70 h-[calc(70dvh)]' />
        <Hero />
        <Services />
      </div>
    </main>
  );
}
