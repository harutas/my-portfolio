import Link from 'next/link';
import { Pagenation } from '@/components/works/Pagenation';
import Article from '@/components/works/article/Article';
import { getWorksList } from '@/libs/client';
import { WORKS_PER_PAGE } from '@/app/config';

const Works = async () => {
  const data = await getWorksList({
    offset: 0,
    limit: WORKS_PER_PAGE,
  });

  return (
    <div className='py-6'>
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-8 lg:px-16'>
        {/* sub header */}
        <h2 className='mb-6 text-center text-5xl text-gray-800 sm:text-6xl'>My Works</h2>
        {/* works list */}
        <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3'>
          {data.contents.map((work) => (
            // article - start
            <Link key={work.id} href={`/works/${work.id}`}>
              <Article work={work} />
            </Link>
          ))}
        </div>
        <Pagenation totalCount={data.totalCount} />
      </div>
    </div>
  );
};

export default Works;
