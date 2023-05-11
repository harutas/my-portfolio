import Image from 'next/image';

const Works = () => {
  const workData = [
    {
      id: 1,
      title: 'New trends in Tech',
      content:
        'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
      imageURL:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
      imageAlt: 'Photo by Minh Pham',
      stackBatches: ['React', 'TypeScript'],
    },
    {
      id: 2,
      title: 'New trends in Tech',
      content:
        'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
      imageURL:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
      imageAlt: 'Photo by Minh Pham',
      stackBatches: ['React', 'TypeScript'],
    },
  ];

  const worksList = workData.map((work) => {
    return (
      // article - start
      <div key={work.id} className='flex flex-col overflow-hidden rounded-lg border bg-white'>
        <div className='group relative block h-48 overflow-hidden bg-gray-100 md:h-64'>
          <Image
            src={work.imageURL}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33.3vw'
            priority={true}
            alt={work.imageAlt}
            className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
          />
        </div>

        <div className='flex flex-1 flex-col p-4 sm:p-6'>
          <h2 className='mb-2 text-lg font-semibold text-gray-800'>
            <p className='transition duration-100 hover:text-indigo-500 active:text-indigo-600'>
              {work.title}
            </p>
          </h2>

          <p className='mb-8 text-gray-500'>{work.content}</p>

          <div className='mt-auto flex items-end justify-between'>
            {work.stackBatches.map((stack) => (
              <span key={stack} className='rounded border px-2 py-1 text-sm text-gray-500'>
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
      // article - end
    );
  });

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        {/* <!-- text - start --> */}
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            Blog
          </h2>

          <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
            This is a section of some simple filler text, also known as placeholder text. It shares
            some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>
        {/* <!-- text - end --> */}

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
          {worksList}
        </div>
      </div>
    </div>
  );
};

export default Works;
