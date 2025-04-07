import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] sm:w-[10%] md:w-[10%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School Management</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] sm:w-[90%] md:w-[90%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
