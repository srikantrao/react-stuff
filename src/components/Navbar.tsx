import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full bg-white px-2 ring-[1.5px] ring-gray-300">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 outline-none bg-transparent"
        />
      </div>
      {/* Icons */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <Image
            src="/message.png"
            alt="message"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative">
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <div className="absolute -top-3 -right-3 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-xs">
            <span className="text-xs text-white">1</span>
          </div>
        </div>
        {/* User */}
        <div className="flex flex-col">
          <span className="text-sm font-medium leading-3">John Doe</span>
          <span className="text-xs text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
          className="cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
