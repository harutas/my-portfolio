import { getWorksList, getWorksDetail } from '@/libs/client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import WebsiteButton from '@/components/button/WebsiteButton';
import GithubButton from '@/components/button/GithubButton';
import BackButton from '@/components/button/BackButton';

// Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false;

// SSG(Static Site Generation)
export async function generateStaticParams() {
  const { contents } = await getWorksList();

  const paths = contents.map((work) => {
    return {
      id: work.id,
    };
  });

  return [...paths];
}

export default async function WorksDetailPage({ params: { id } }: { params: { id: string } }) {
  const work = await getWorksDetail(id);
  if (!work) {
    notFound();
  }
  return (
    <>
      <div className='container mx-auto px-2 lg:px-8 my-6'>
        <div className='mx-auto'>
          <div>
            <p className='text-xl font-semibold mb-2'>
              Project{' '}
              {work.subtitle && <span className='font-normal text-lg'> -{work.subtitle}-</span>}
            </p>
            <h2 className='text-5xl font-semibold underline-left-to-right mb-4'>{work.title}</h2>

            <p className='text-xl font-semibold mb-2'>Stack</p>
            {work.tags.map((tag) => {
              return (
                <span
                  key={tag.id}
                  className='text-sm md:text-2xl font-semibold inline-block py-1 px-2 rounded-lg text-sky-600 bg-sky-200 first:ml-0 last:mr-0 mr-1 mb-2'
                >
                  {tag.tag}
                </span>
              );
            })}
          </div>
        </div>
        <div className='flex justify-end flex-wrap gap-2 mb-4'>
          <WebsiteButton websiteURL={work.websiteURL} />
          <GithubButton githubURL={work.githubURL} />
          <BackButton />
        </div>
        <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
          <Image
            src={work.eyecatch.url}
            width={work.eyecatch.width}
            height={work.eyecatch.height}
            priority={true}
            className='w-full h-full border-gray-300 border-2 border-dashed mb-2'
            alt=''
          />
          <div className='mx-auto'>
            <p className='text-3xl font-semibold mb-2'>About</p>
            <p className='text-md'>{work.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
