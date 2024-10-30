import Image from 'next/image';

import { services } from '@/data/siteData';

export default function Services() {
  return (
    <section className='bg-slate-100 py-20 text-center px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col items-center gap-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold'>My Services</h1>
          <hr className='w-[100px] md:w-[200px] bg-slate-200 h-[2px] -mt-2' />
        </div>

        <div className='grid grid-cols-auto-fit-minmax gap-6 gap-y-12 mx-auto mt-12'>
          {services.map((service) => (
            <div key={service.id} className=''>
              <div className='group overflow-hidden rounded-sm relative'>
                <Image
                  src={service.image}
                  alt={service.title}
                  className='rounded-sm object-fill w-full h-[250px] group-hover:scale-105 transition duration-300 max-sm:object-cover'
                />
                <div className='absolute bg-slate-600/60 top-[210px] p-2'>
                  <Image
                    src={service.thumb}
                    alt={service.title}
                    width={30}
                    height={30}
                    className=''
                  />
                </div>
              </div>
              <h2 className='mt-4 font-semibold'>{service.title}</h2>
            </div>
          ))}
        </div>
        <h2 className='md:text-2xl font-semibold bg-white mt-10 text-slate-800 p-4 rounded-xl'>
          Don&apos;t see something you need, just ask!
        </h2>
      </div>
    </section>
  );
}
