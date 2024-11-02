import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='animate-fadeIn h-[75vh] flex flex-col items-center justify-center gap-6 relative text-white z-10 p-4'>
      <h1 className='text-4xl md:text-7xl font-bold mt-8 text-center'>
        Handyman Services LLC
      </h1>
      <p className='mt-4 text-lg md:text-2xl text-center max-w-4xl mx-auto'>
        Trusted since 2005 and serving northeast Ohio for all your home
        improvement needs. Fully insured and bonded, I specialize in roofing,
        siding, drywall, painting, kitchen and bathroom remodels, electrical,
        plumbing, and more.
      </p>
      <p className='mt-2 text-base md:text-lg text-center max-w-4xl mx-auto'>
        From basements to curb appeal, my expertise covers every corner of your
        home.
      </p>
      <Button className='w-70 text-xl bg-neutral-100 text-neutral-800 hover:bg-neutral-300 transition py-6 px-6 font-bold mt-6'>
        Call Now <span className='text-base font-medium'>330-880-9749</span>
      </Button>
    </section>
  );
}
