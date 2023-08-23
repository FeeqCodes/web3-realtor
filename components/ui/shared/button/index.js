

const SIZE = {

  sm: "py-2 px-4",
  md: " py-3 px-8"
}



export default function Button({children, className, size="md", variant="indigo"}) {

  const sizeClass = SIZE[size]

  const variants = {
    indigo: `bg-indigo hover:bg-indigoLight ${
      "hover:bg-indigoLight"
    }`,
  };

  return (
    <>
      <button className={`text-white text-lg  rounded-[5px] ${sizeClass} ${variants[variant]}  ${className}`}>
        {children}
      </button>
    </>
  );
}
