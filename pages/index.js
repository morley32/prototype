import React from "react";
import Image from "next/image";
const NavItem = props => (
  <li >
    <a 
      href={props.href}
      className="text-sm font-bold text-grey-400 px-2 py-1 hover:bg-gray-200 rounded transition-colors duration-300"
    >
      {props.text}
    </a>
    
    
  </li>
);

export default () => ( 
  
    
    <div className="container mx-auto ">
      <nav className="flex justify-between p-4">
        <div className="flex items-center">
          <div className="inline-block h-6 w-6 rounded-full bg-gray-400" />
          <span className="ml-2">Support Ukraine</span>
        </div>
        <div>
          <ul className="flex space-x-2">
            <NavItem href="/donate" text="Donate" />
            <NavItem href="/news" text="Current News" />
            <NavItem href="/history" text="History" />
            <NavItem href="/login" text="Login" />
            <NavItem href="/sign-up" text="sign up" />
          </ul>
        </div>
      </nav>
      <div className="text-center md:text-left md:flex max-w-3xl mx-auto mt-24 space-x-3 px-2">
        <h1 className="font-bold text-6xl leading-tight">Slava Ukraini </h1>
        <p className="text-xl font-light">
          Help out the Ukrainian people in anyway you can. They are truly hurting and 
          need our assistance during this trying time.
        </p>

      </div>

      <div className="w-60 mx-auto">
        <Image src={"/undraw_ukraine_biyg.svg"} width={500} height={500}
        layout="responsive" />
        <form onSubmit={(event) => {
          console.log("TODO submit form")
        }}>
          <input 
          type="text" 
          placeholder="Enter your email..."
          className="bg-white rounded border border-gray-300 p-2"
          />
          <button type="submit">Join the news letter</button>
        </form>
      </div>

    </div>
    
  )

