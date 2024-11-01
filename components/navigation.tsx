'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMedia } from 'react-use';

import { Mail, Menu, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MobileServices } from './mobile-services';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const isMobile = useMedia('(max-width: 1024px)', false);

  function onClick(href: string) {
    router.push(href);
    setIsOpen(false);
  }

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant='outline'
            size='sm'
            className='font-normal bg-transparent hover:bg-white/40 hover:text-white border-none focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'
          >
            <Menu className='text-black size-4' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='px-2 border-none text-black/90 z-50 pt-4'
        >
          <Image
            src='/handyman-logo.png'
            alt='mobile menu image'
            width={50}
            height={50}
          />
          <nav className='flex flex-col gap-y-2 pt-16'>
            <Button
              variant='ghost'
              onClick={() => onClick('/')}
              className='w-full justify-start bg-white/10 hover:bg-neutral-100 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition text-slate-900 text-base'
            >
              Home
            </Button>
            <Button
              variant='ghost'
              onClick={() => onClick('/gallery')}
              className='w-full justify-start bg-white/10 hover:bg-neutral-100 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition text-slate-900 text-base'
            >
              My Work
            </Button>
          </nav>
          <MobileServices />

          <div className='text-center ml-4 flex flex-col gap-4'>
            <div className='flex items-center gap-2 mt-10 mx-auto px-4 py-2 text-base bg-black/70 rounded-lg text-white font-semibold'>
              Call
              <Phone className='size-4 font-semibold' />
              <p className='text-base font-semibold'>330-880-9749</p>
            </div>
            <p className='font-semibold text-neutral-500'>
              For your free estimate
            </p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className='lg:flex gap-x-2 hidden'>
      <Link
        href='/'
        className='hover:bg-slate-200 hover:text-slate-800 transition px-4 py-1 rounded-lg text-neutral-500'
      >
        Home
      </Link>
      <Link
        href='/gallery'
        className='hover:bg-slate-200 hover:text-slate-800 transition px-2 py-1 rounded-lg text-neutral-500 mr-4'
      >
        My Work
      </Link>
      <div className='flex items-center gap-1 mr-4'>
        <Phone className='size-4 text-neutral-500' />
        <p className='text-sm text-neutral-500'>330-880-9749</p>
      </div>
      <Link href='/#contact' className='flex items-center gap-1'>
        <Mail className='size-4 text-neutral-500' />
        <p className='text-sm text-neutral-500'>Get a free estimate</p>
      </Link>
    </nav>
  );
}
