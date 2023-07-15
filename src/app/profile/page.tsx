import Image from 'next/image';
import githubIcon from 'public/github-mark.png';
import recursionIcon from 'public/Recursion.jpg';

const ProfilePage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen-minus-header'>
      <h2 className='sm:text-6xl text-5xl my-8'>About Me</h2>
      <div className='sm:w-1/2 px-4'>
        <p className='text-base mb-5'>
          2021年10月からコンピュータサイエンスが学べるプラットフォーム「Recursion」でコンピュータサイエンスを基礎から勉強しています。
          <br />
          個人でもReactやVue.jsを使用したWebアプリの開発を行っています。
        </p>
      </div>
      <div className='max-w-md mx-auto p-4'>
        <div className='flex space-x-16'>
          <a
            href='https://github.com/harutas/harutas'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-500 hover:underline'
          >
            <Image src={githubIcon} className='rounded-full' width={35} alt='' />
            <span className='text-base ml-2'>GitHub</span>
          </a>
          <a
            href='https://recursionist.io/users/harutas'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-blue-500 hover:underline'
          >
            <Image src={recursionIcon} className='rounded-full' width={40} alt='' />
            <span className='text-base ml-2'>Recursion</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
