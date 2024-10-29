'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMedia } from 'react-use';

import { Mail, Menu, Phone } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Logo from './logo';

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
            className='font-normal bg-transparent  hover:bg-white/40 hover:text-white border-none  focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition'
          >
            {/* h4 w4 can now be called size-4 */}
            <Menu className='size-4 text-black' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='px-2 border-none text-black/90 z-50'
        >
          <Logo />
          <nav className='flex flex-col gap-y-2 pt-16'>
            <Button
              variant='ghost'
              onClick={() => onClick('/about')}
              className='w-full justify-start bg-white/10 hover:bg-neutral-100 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition text-slate-900 text-base'
            >
              About Me
            </Button>
            <Button
              variant='ghost'
              onClick={() => onClick('/gallery')}
              className='w-full justify-start bg-white/10 hover:bg-neutral-100 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition text-slate-900 text-base'
            >
              My Work
            </Button>

            <div className='absolute bottom-10 ml-4 flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <Phone className='size-4 text-neutral-500' />
                <p className='text-sm text-neutral-500'>330-880-9749</p>
              </div>
              <Link href='/#contact' className='flex items-center gap-2'>
                <Mail className='size-4 text-neutral-500' />
                <p className='text-sm text-neutral-500'>Get a free estimate</p>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className='lg:flex gap-x-2 hidden'>
      <Link
        href='/about'
        className='hover:bg-slate-200 hover:text-slate-800 transition px-4 py-1 rounded-lg text-neutral-500'
      >
        About Me
      </Link>
      <Link
        href='/about'
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
