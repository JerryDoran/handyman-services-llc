export function MobileServices() {
  const services = [
    {
      title: 'Kitchen & Bathroom Remodeling',
      description:
        'Transform your kitchen and bathroom with modern updates and expert craftsmanship.',
      icon: '🔨', // Replace with an icon/image if needed
    },
    {
      title: 'Painting & Drywall',
      description:
        'Professional interior and exterior painting and drywall installation or repair.',
      icon: '🎨',
    },
    {
      title: 'Carpentry',
      description:
        'High-quality carpentry work for custom cabinetry, trim, and woodwork.',
      icon: '🪚',
    },
    {
      title: 'Landscaping Design',
      description:
        'Enhance your outdoor space with custom landscape design and curb appeal services.',
      icon: '🌿',
    },
    {
      title: 'Basements',
      description:
        'Turn your basement into a functional living space with expert finishing and sealing.',
      icon: '🏠',
    },
  ];

  return (
    <section className='py-16 px-4 md:px-8 lg:px-16 bg-gray-50'>
      <h2 className='text-xl font-bold text-center mb-4'>Services</h2>
      <p className='text-sm text-center text-gray-600 mb-10'>
        From remodeling to landscaping, I offer a wide range of handyman
        services to meet your needs.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white flex gap-4 items-center rounded-lg p-2 text-center hover:shadow-lg transition-shadow duration-300'
          >
            <div className='text-sm'>{service.icon}</div>{' '}
            {/* Replace with icon/image if needed */}
            <h3 className='text-sm font-semibold mb-2'>{service.title}</h3>
            {/* <p className='text-gray-700 text-xs'>{service.description}</p> */}
          </div>
        ))}
      </div>
      <h2 className='mt-6 font-semibold text-gray-500'>
        Don&apos;t see a service you need? Just ask.
      </h2>
    </section>
  );
}
