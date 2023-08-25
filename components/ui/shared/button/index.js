

const SIZE = {

  sm: "py-2 px-4",
  md: "py-3 px-8",
  lg: "py-4 px-12 rounded-[10px]"
}



export default function Button({children, className, size="md", variant="indigo", ...rest}) {

  const sizeClass = SIZE[size]

  const variants = {
    indigo: `bg-indigo hover:bg-indigoLight ${
      "hover:bg-indigoLight"
    }`,
  };

  return (
    <>
      <button 
        {...rest}
        className={`text-white text-sm rounded-[20px] ${sizeClass} ${variants[variant]}  ${className}`}>
        {children}
      </button>
    </>
  );
}
