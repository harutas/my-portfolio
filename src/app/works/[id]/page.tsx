'use client';
import { client } from '@/libs/client';
import { Work } from '@/app/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import WebsiteButton from '@/components/button/WebsiteButton';
import GithubButton from '@/components/button/GithubButton';
import BackButton from '@/components/button/BackButton';

// SSG(Static Site Generation)
export async function generateStaticParams() {
  const data = await client.get({
    endpoint: 'works',
  });
  const works = data.contents as Work[];

  return works.map((work) => ({
    id: work.id,
  }));
}

const getWorks = async (id: string): Promise<Work> => {
  const data = await client.get({
    endpoint: 'works',
    contentId: id,
  });
  return data;
};

export default async function WorksDetailPage({ params }: { params: { id: string } }) {
  const work = await getWorks(params.id).catch(() => {
    notFound();
  });
  return (
    <>
      <div className='container mx-auto px-2 lg:px-8 my-6'>
        <div className='mx-auto'>
          <div>
            <p className='text-xl mb-2'>Project</p>
            <h2 className='text-5xl font-semibold mb-4'>{work.title}</h2>
            <p className='text-xl mb-2'>Stacks</p>
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
        <div className='flex justify-end flex-wrap gap-1 mb-4'>
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
