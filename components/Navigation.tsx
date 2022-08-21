import React, {FC} from "react"

const nav = [
    {
        name:"home",
        icon:"",
        url:"/"
    },
    {
        name: "skills",
        icon:"",
        url:""
    },
    {
        name: "projects",
        icon:"",
        url:""
    },
    {
        name: "contact",
        icon:"",
        url:""
    }
]
const Navigation:FC  = () => {
    return (
      <nav className="hidden md:flex w-fit p-0.5 border-black border-2 rounded-3xl space-x-3 items-center 2xl:border-4 2xl:p-2 2xl:rounded-full">
        {
            nav.map((link,index)=>{
                return <button className="hidden border-black border-2 rounded-3xl text-2xl w-32 md:block lg:w-40 lg:text-2xl xl:w-48 xl:text-3xl 2xl:border-4 2xl:w-72 2xl:text-6xl 2xl:rounded-full" key={index}>{link.name.toUpperCase()}</button>
            })
        }

      </nav>
    )
  }
  
export default Navigation