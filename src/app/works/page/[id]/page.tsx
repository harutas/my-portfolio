import Link from 'next/link';
import { Pagenation } from '@/components/works/Pagenation';
import Article from '@/components/works/article/Article';
import { getWorksList } from '@/libs/client';
import { WORKS_PER_PAGE } from '@/app/config';

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

// SSG(Static Site Generation)
export async function generateStaticParams() {
  const data = await getWorksList();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(data.totalCount / WORKS_PER_PAGE)).map((page) => {
    return {
      id: page.toString(),
    };
  });

  return [...paths];
}

const WorksPage = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await getWorksList({
    offset: (Number(id) - 1) * WORKS_PER_PAGE,
    limit: WORKS_PER_PAGE,
  });

  return (
    <div className='py-6'>
      <div className='mx-auto max-w-screen-2xl px-4 sm:px-8 lg:px-16'>
        {/* sub header */}
        <h2 className='mb-6 text-center text-2xl font-bold text-gray-800 lg:text-3xl'>My Work</h2>
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

export default WorksPage;
