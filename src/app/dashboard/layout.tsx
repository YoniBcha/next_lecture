import "./style.css";

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
      <div className="flex h-screen">
        <div className="flex flex-col h-full">
          <div className="">{users}</div>
          <div className=""> {revenue}</div>
        </div>
        <div className="">{notification}</div>
      </div>
    </>
  );
}
