const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex justify-center items-center p-28 m-3 shadow-lg border border-solid border-[#333]">{children}</div>
    </>
  );
};
export default Card;
