import Article from '@/components/works/Article';
import { getWorksList } from '@/libs/client';

const Works = async () => {
  const { contents } = await getWorksList();

  return (
    <div className='py-6'>
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-8 lg:px-16'>
        {/* sub header */}
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800 lg:text-3xl'>My Works</h2>
        {/* works list */}
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {contents.map((work) => (
            <Article key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
