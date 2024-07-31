
export default function Dashboard({
  children,
  users,
  notification,
  revenue,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notification: React.ReactNode;
  revenue: React.ReactNode;
}) {
  return (
    <>
      <div className="">{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div className="">{users}</div>
          <div className=""> {revenue}</div>
        </div>
        <div className="flex">{notification}</div>
      </div>
    </>
  );
}
