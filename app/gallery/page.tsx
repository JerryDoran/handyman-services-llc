import Image from 'next/image';
import image1 from '@/assets/images/image1.jpg';
import image2 from '@/assets/images/image2.jpg';
import image3 from '@/assets/images/image3.jpg';
import image4 from '@/assets/images/image4.jpg';
import image5 from '@/assets/images/image5.jpg';
import image6 from '@/assets/images/image6.jpg';
import image7 from '@/assets/images/image7.jpg';
import image8 from '@/assets/images/image8.jpg';
import image9 from '@/assets/images/image9.jpg';
import image10 from '@/assets/images/image10.jpg';
import image11 from '@/assets/images/image11.jpg';
import image12 from '@/assets/images/image12.jpg';
import image13 from '@/assets/images/image13.jpg';
import image14 from '@/assets/images/image14.jpg';
import image15 from '@/assets/images/image15.jpg';
import image16 from '@/assets/images/image16.jpg';
import image17 from '@/assets/images/image17.jpg';
import image18 from '@/assets/images/image18.jpg';
import image19 from '@/assets/images/image19.jpg';
import image20 from '@/assets/images/image20.jpg';
import image21 from '@/assets/images/image21.jpg';
import image22 from '@/assets/images/image22.jpg';
import image23 from '@/assets/images/image23.jpg';
import image24 from '@/assets/images/image24.jpg';
import image25 from '@/assets/images/image25.jpg';
import image26 from '@/assets/images/image26.jpg';
import image28 from '@/assets/images/image28.jpg';
import image29 from '@/assets/images/image29.jpg';
import image30 from '@/assets/images/image30.jpg';

import image32 from '@/assets/images/image32.jpg';
import image33 from '@/assets/images/image33.jpg';
import image34 from '@/assets/images/image34.jpg';

import image36 from '@/assets/images/image36.jpg';
import image37 from '@/assets/images/image37.jpg';
import image38 from '@/assets/images/image38.jpg';
import image39 from '@/assets/images/image39.jpg';

export default function WorkPage() {
  return (
    <section className='mx-auto px-4 py-10'>
      <div className='flex flex-col items-center gap-y-6'>
        <h1 className='text-4xl md:text-6xl font-bold'>My Work</h1>
        <hr className='w-[100px] md:w-[200px] bg-slate-200 h-[2px] -mt-2' />
      </div>
      <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10'>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image36}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image37}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image38}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image39}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image33}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image34}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image3}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image4}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image5}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image1}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image2}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            Before
          </p>
          <Image
            src={image9}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            Before
          </p>
          <Image
            src={image10}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            After
          </p>
          <Image
            src={image6}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            After
          </p>
          <Image
            src={image7}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            After
          </p>
          <Image
            src={image8}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image11}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image12}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image13}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image14}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image15}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image16}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image17}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image18}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image19}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image20}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image21}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image22}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image23}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image24}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image25}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>
        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden'>
          <Image
            src={image26}
            alt='gallery'
            className='object-fill'
            quality={50}
          />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            Before
          </p>
          <Image src={image32} alt='gallery' className='object-fill' />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            After
          </p>
          <Image src={image28} alt='gallery' className='object-fill' />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            After
          </p>
          <Image src={image29} alt='gallery' className='object-fill' />
        </div>

        <div className='h-[90%] w-[90%] rounded-xl overflow-hidden relative'>
          <div className='bg-black opacity-50 absolute w-[90px] h-10 top-3 left-3 rounded-lg'></div>
          <p className='text-lg font-bold z-10 text-white absolute top-[1.2rem] left-[1.8rem]'>
            After
          </p>
          <Image src={image30} alt='gallery' className='object-fill' />
        </div>
      </div>
    </section>
  );
}
