import UserCard from "@/components/UserCard";

export const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
