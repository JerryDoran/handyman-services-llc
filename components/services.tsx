import Image from 'next/image';

import { services } from '@/data/siteData';

export default function Services() {
  return (
    <section className='bg-slate-100 py-20 text-center px-4'>
      <div className=' max-w-6xl mx-auto'>
        <div className='flex flex-col items-center gap-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold'>My Services</h1>
          <hr className='w-60 bg-slate-400 h-[2px]' />
        </div>

        <div className='grid grid-cols-auto-fit-minmax gap-6 gap-y-12 mx-auto mt-12'>
          {services.map((service) => (
            <div key={service.id} className=''>
              <div className=''>
                <Image
                  src={service.image}
                  alt={service.title}
                  className='rounded-sm md:object-fill object-cover w-full h-[250px]'
                />
              </div>
              <h2 className='mt-4 font-semibold'>{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
