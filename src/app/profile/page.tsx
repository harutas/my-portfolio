import Image from 'next/image';
import githubIcon from 'public/github-mark.png';
import recursionIcon from 'public/Recursion.jpg';

const ProfilePage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen-minus-header'>
      <h2 className='sm:text-6xl text-5xl my-8'>About Me</h2>
      <div className='w-1/2'>
        <p className='text-lg mb-5'>
          コンピュータサイエンスが学べるプラットフォーム「Recursion」でコンピュータサイエンスを基礎から勉強しています。
          <br />
          個人でもReactやVue.jsを使用したWebアプリの開発を行っています。
        </p>
      </div>
      <div className='max-w-md mx-auto p-4'>
        <div className='flex space-x-4'>
          <a
            href='https://github.com/harutas/harutas'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-500 hover:underline'
          >
            <Image src={githubIcon} className='rounded-full' width={40} alt='' />
            <span className='text-xl ml-2'>GitHub</span>
          </a>
          <a
            href='https://recursionist.io/users/harutas'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-500 hover:underline'
          >
            <Image src={recursionIcon} className='rounded-full' width={40} alt='' />
            <span className='text-xl ml-2'>Recursion</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
