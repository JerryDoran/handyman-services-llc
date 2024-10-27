import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href='/'>
      <div className='flex items-center'>
        <Image src='/handyman-logo.png' alt='Logo' height={60} width={60} />
        <p className='font-semibold text-xl'>Handyman Services LLC</p>
      </div>
    </Link>
  );
}
