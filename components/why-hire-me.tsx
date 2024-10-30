'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';

export default function WhyHireMe() {
  // Refs for observing sections
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const options = {
      threshold: 0.6, // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the desired animation from the data attribute
          const animationType = entry.target.getAttribute('data-animation');
          if (animationType === 'slideInLeft') {
            entry.target.classList.add('animate-slideInLeft', 'opacity-100');
          } else if (animationType === 'slideInRight') {
            entry.target.classList.add('animate-slideInRight', 'opacity-100');
          }
        }
      });
    }, options);

    // Observe each section
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup observer on component unmount
      sectionRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  return (
    <section className='py-20 text-center px-4 bg-white'>
      <div className=' max-w-7xl mx-auto'>
        <div className='flex flex-col items-center gap-y-6 mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold text-center text-black'>
            Why Hire Me?
          </h1>
          <hr className='w-[100px] md:w-[200px] bg-slate-200 h-[2px] -mt-2' />
        </div>

        <div className='space-y-12'>
          {/* Feature 1 */}
          <div
            className='flex flex-col md:flex-row items-center md:text-left opacity-0 transition-opacity duration-800 ease-out'
            ref={sectionRefs[0]}
            data-animation='slideInLeft'
            key='feature-1'
          >
            <div className='md:w-1/2 md:pr-8'>
              <h3 className='text-2xl font-semibold mb-4'>Trusted Expertise</h3>
              <p className='text-lg text-gray-700 max-w-xl'>
                A local handyman brings trusted, proven skills and hands-on
                experience to every job. With years of experience in your
                community, I offer expertise that national services can&apos;t
                match. I know the area, understand the unique needs of local
                homes, and am just a call away when you need quick, reliable
                help. My goal is to deliver the kind of service you&apos;d
                recommend to your neighbors, all with a personal touch you
                won&apos;t find anywhere else.
              </p>
            </div>
            <div className='mt-8 md:mt-0 md:w-1/2'>
              <Image
                src='/images/trusted-expertise.jpg'
                alt='Handyman showing tools and experience'
                width={500}
                height={300}
                className='rounded-lg shadow-md'
                priority
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className='flex flex-col md:flex-row-reverse items-center md:text-left opacity-0 transition-opacity duration-800 ease-out'
            ref={sectionRefs[1]}
            data-animation='slideInRight'
            key='feature-2'
          >
            <div className='md:w-1/2 md:pl-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Quick Response & Flexibility
              </h3>
              <p className='text-lg text-gray-700 max-w-xl'>
                I will respond quickly and adapt to your schedule, delivering
                prompt service when you need it. I understand the urgency of
                your projects and prioritize your needs. From emergency repairs
                to planned updates, I&apos;m here to make things as smooth as
                possible. You can count on clear communication and a commitment
                to getting it right the first time, so you can enjoy peace of
                mind knowing your home is in good hands.
              </p>
            </div>
            <div className='mt-8 md:mt-0 md:w-1/2'>
              <Image
                src='/images/quick-response.jpg'
                alt='Handyman ready for a fast response'
                width={500}
                height={300}
                className='rounded-lg shadow-md'
                priority
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className='flex flex-col md:flex-row items-center md:text-left opacity-0 transition-opacity duration-800 ease-out'
            ref={sectionRefs[2]}
            data-animation='slideInLeft'
            key='feature-3'
          >
            <div className='md:w-1/2 md:pr-8'>
              <h3 className='text-2xl font-semibold mb-4'>
                Support Local Business
              </h3>
              <p className='text-lg text-gray-700 max-w-xl'>
                Choosing a local handyman supports small businesses in your
                community. I reinvest in the area, strengthening local ties and
                offering quality service that national providers overlook. Every
                job I take on helps build a stronger, more connected
                neighborhood, where you know exactly who’s working on your home.
                Plus, you can feel good knowing your money stays local,
                contributing to the growth and well-being of our shared
                community.
              </p>
            </div>
            <div className='mt-8 md:mt-0 md:w-1/2'>
              <Image
                src='/images/support-local.jpg'
                alt='Community-focused handyman work'
                width={500}
                height={300}
                className='rounded-lg shadow-md'
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
