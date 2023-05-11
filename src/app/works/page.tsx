import Article from '@/components/works/Article';
import type { Work } from '@/app/types';

const Works = () => {
  const workData: Work[] = [
    {
      id: '1',
      title: 'New trends in Tech',
      content:
        'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
      imageURL:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
      imageAlt: 'Photo by Minh Pham',
      stackBatches: ['React', 'TypeScript'],
    },
    {
      id: '2',
      title: 'New trends in Tech',
      content:
        'This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.',
      imageURL:
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',
      imageAlt: 'Photo by Minh Pham',
      stackBatches: ['React', 'TypeScript'],
    },
  ];

  return (
    <div className='bg-white py-6 sm:py-8 lg:py-12'>
      <div className='mx-auto max-w-screen-2xl px-4 md:px-8'>
        {/* <!-- text - start --> */}
        <div className='mb-10 md:mb-16'>
          <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'>
            My Works
          </h2>
        </div>
        {/* <!-- text - end --> */}

        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8'>
          {workData.map((work: Work) => (
            <Article key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
