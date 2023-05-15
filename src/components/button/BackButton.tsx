import Link from "next/link";

const BackButton = () => {
  return (
    <Link href={"/works"}>
      <button className="flex justify-around items-center text-xl w-28 font-semibold rounded py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white">
        <span>Go back</span>
      </button>
    </Link>
  );
};

export default BackButton;
