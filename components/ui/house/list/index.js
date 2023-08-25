




export default function HouseList({ houses, children }) {
  return (
    <section className="grid grid-cols-2 justify-between h-full  gap-y-16">
      {houses.map((house) => children(house))}
    </section>
  );
}

// {/* Cards wrapper */}
//       <div className="flex gap-8 justify-between h-full  max-w-7xl mx-auto"></div>