import { client } from '@/libs/client';
import { Work } from '@/app/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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
      <div className=''>
        <h1>Project:</h1>
        <p>{work.title}</p>
        <h1>仕様技術</h1>
        <p>
          {work.tags.map((tag) => {
            return <span key={tag.id}>{tag.tag} </span>;
          })}
        </p>
        <Image
          src={work.eyecatch.url}
          width={work.eyecatch.width}
          height={work.eyecatch.height}
          alt=''
        />
      </div>
      <div className=''>
        <h1>About:</h1>
        <p>{work.description}</p>
      </div>
    </>
  );
}
