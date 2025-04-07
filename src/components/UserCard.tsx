import Image from "next/image";

export const UserCard = ({
  type,
}: {
  type: "admin" | "teacher" | "student" | "parent" | "staff";
}) => {
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1">
      <div className="flex justify-between items-center gap-2">
        <span className="text-xs bg-white text-green rounded-full py-1 px-2">
          2024/25
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1, 234</h1>
      <h2 className="text-sm text-gray-500 capitalize">{type}</h2>
    </div>
  );
};

export default UserCard;
