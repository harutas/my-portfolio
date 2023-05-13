import Article from '@/components/works/Article';
import type { Work } from '@/app/types';
import { client } from '@/libs/client';

const getWorks = async (): Promise<Work[]> => {
  const data = await client.get({
    endpoint: 'works',
  });
  return data.contents;
};

const Works = async () => {
  const works = await getWorks();

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
          {works.map((work: Work) => (
            <Article key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
