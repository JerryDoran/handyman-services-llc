import Logo from '@/components/logo';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-slate-100 flex flex-col items-center md:flex-row justify-between lg:px-8 px-4 py-5 sticky top-0 z-20 gap-4'>
      <Logo />
      <div className='flex flex-col gap-2 md:flex-row md:gap-8'>
        <div className='flex items-center gap-2'>
          <Phone className='size-4 text-neutral-500' />
          <p className='text-sm text-neutral-500'>330-880-9749</p>
        </div>
        <Link href='/#contact' className='flex items-center gap-2'>
          <Mail className='size-4 text-neutral-500' />
          <p className='text-sm text-neutral-500'>Get a free estimate</p>
        </Link>
      </div>
    </header>
  );
}
