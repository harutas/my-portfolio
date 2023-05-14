import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  const handleClickBack = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/works");
  };
  return (
    <button
      className="flex justify-around items-center text-xl w-32 font-semibold rounded py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white"
      onClick={handleClickBack}
    >
      <span>Go back</span>
    </button>
  );
};

export default BackButton;
