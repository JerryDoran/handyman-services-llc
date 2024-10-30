export default function Footer() {
  return (
    <footer className='bg-black py-7 max-sm:px-4 px-10 w-full flex items-center justify-center'>
      <p className='text-center text-sm text-gray-400 '>
        Copyright &copy; {new Date().getFullYear()} Handyman Services LLC. All
        rights reserved.
      </p>
    </footer>
  );
}
