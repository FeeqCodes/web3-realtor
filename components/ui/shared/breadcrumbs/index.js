



export default function BreadCrumbs() {
  
  return (
    <>
      {/* Breadcrumbs */}
      <div className="w-full flex justify-end mb-16">
        <div
          style={{
            boxShadow: "8px 4px 10px 0px rgba(0, 0, 0, 0.25) inset",
          }}
          className="bg-white w-[463px] flex gap-8 justify-center items-center py-[24px] px-[62px] text-myText font-medium"
        >
          <h3>Market</h3>
          <h3>Purchased</h3>
          <h3>Admin</h3>
        </div>
      </div>
      {/* Breadcrumbs end */}
    </>
  );
};
