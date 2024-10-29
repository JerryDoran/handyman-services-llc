import Logo from '@/components/logo';
import Navigation from '@/components/navigation';

export default function Header() {
  return (
    <header className='bg-slate-100 flex items-center justify-between lg:px-8 px-4 py-5 sticky top-0 z-20 gap-4'>
      <Logo />
      <Navigation />
    </header>
  );
}
