import React from "react";



const LINKS = [
  {
    href: "/marketplace",
    value: "Buy",
  },
  {
    href: "/marketplace/marketcourses/owned",
    value: "My courses",
  },
  {
    href: "/marketplace/marketcourses/managed",
    value: "Manage Courses",
    requireAdmin: true
  },
]

console.log(LINKS.href)


export default function BreadCrumbs({items}) {
  
  return (
    <>
      {/* Breadcrumbs */}

      <nav>
        <ol
          style={{
            boxShadow: "8px 4px 10px 0px rgba(0, 0, 0, 0.25) inset",
          }}
          className="bg-white w-[463px] flex gap-8 justify-center items-center py-[24px] px-[62px] text-myText font-medium"
        >
          {LINKS.map((item, index) => (
            <React.Fragment key={item.href}>
              <li>
                <a>{item.value}</a>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>

      {/* Breadcrumbs end */}
    </>
  )
};
