import "./index.css";
import { useState } from "react";
import landlogo from "./assets/images/landlogo.svg";
import landimage from "./assets/images/landimage.png";
import airbnd from "./assets/images/airbnb.png";
import malichimp from "./assets/images/malichimp.png";
import mashable from "./assets/images/mashable.png";
import microsoft from "./assets/images/microsofy.png";
import sportify from "./assets/images/sportify.png";
import google from "./assets/images/google.png";
import feature from "./assets/images/feature-1.png";
import feature2 from "./assets/images/feature-2.png";
import avatar from "./assets/images/avatar.png";
import { Server, UsersRound, Globe2, ShoppingCart } from "lucide-react";
import Pricingcard from "./components/pricingcard/pricingcard";
import Questions from "./components/questions/questions";
import Contact from "./components/contacts/contact";

function App() {

   const [menuOpen, setMenuOpen] = useState(false);
return ( 
<div className="">
   {/* NavBar */}
<header className="fixed left-0 top-0 z-50 w-full bg-white px-4 py-3 shadow sm:px-6">
      <div className="flex items-center gap-3">
        <img src={landlogo} alt="Landwind" className="h-10 w-10 rounded-full" />
        <span className="text-xl font-semibold">Landwind</span>

        {/* Tablet and laptop navigation */}
        <nav className="ml-auto hidden items-center gap-4 text-sm font-semibold md:flex lg:gap-5 lg:text-base">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#company">Company</a>
          <a className="nav-link" href="#marketplace">Marketplace</a>
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#team">Team</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="flex h-11 items-center rounded bg-violet-600 px-4 font-bold transition hover:scale-105 cursor-pointer text-white" href="#download">
            Download
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="ml-auto rounded border px-3 py-2 text-sm font-semibold md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav id="mobile-menu" className="mt-3 flex flex-col gap-3 border-t pt-3 font-semibold md:hidden">
          <a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a className="nav-link" href="#company" onClick={() => setMenuOpen(false)}>Company</a>
          <a className="nav-link" href="#marketplace" onClick={() => setMenuOpen(false)}>Marketplace</a>
          <a className="nav-link" href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a className="nav-link" href="#team" onClick={() => setMenuOpen(false)}>Team</a>
          <a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-link text-violet-600" href="#download" onClick={() => setMenuOpen(false)}>Download</a>
        </nav>
      )}
    </header>

  {/* Body*/}
  <div className="grid grid-cols-1 lg:grid-cols-2 mt-18 m-3 pt-24">
    {/* Left-Side*/}
    <div className="p-2">
      <h1 className="lg:text-6xl text-4xl font-extrabold">Building Digital<br/>
      Products & Brands.
      </h1>
      <p className="mt-4 text-Neutral-400 opacity-50 font-stretch-extra-expanded">
      This free and open-source landing page template was built using the utility 
      classes from Tailwind CSS and based on the components from the Flowbite 
      Library and the Blocks System.
      </p>
      <div className="mt-15">
      <button className="rounded-lg border border-neutral-300 px-4 py-2 mr-5 hover:bg-stone-200 cursor-pointer transition hover:scale-105"> 🐱View on Github</button>
      <button className="rounded-lg border border-neutral-300 px-4 py-2  hover:bg-stone-200 cursor-pointer transition hover:scale-105">Get Figma File</button>
      </div>
    </div>
    
    {/* Right-Side*/}
    <div className="flex h-[400px]">
      <img src={landimage} alt="image" className="w-full object-contain"/>
    </div>
  </div>
  <div className="flex flex-wrap items-center justify-center gap-6 opacity-50 md:flex-nowrap md:gap-8">
  <img src={airbnd} alt="Airbnb" className="h-auto w-28 md:w-43" />
  <img src={google} alt="Google" className="h-auto w-28 md:w-43" />
  <img src={microsoft} alt="Microsoft" className="h-auto w-28 md:w-43" />
  <img src={sportify} alt="Spotify" className="h-auto w-28 md:w-43" />
  <img src={malichimp} alt="Mailchimp" className="h-auto w-28 md:w-43" />
  <img src={mashable} alt="Mashable" className="h-auto w-28 md:w-43" />
</div>


{/* Tools Section*/}
<section className="w-full bg-gray-50 pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 mt-7 max-w-7xl mx-auto px-6">
    {/* Left-Side*/}
    <div className="p-2 mt-18">
      <h1 className="text-3xl font-extrabold">Work with the tools you already use
      </h1>
      <p className="mt-4 text-Neutral-400 opacity-50 font-stretch-extra-expanded border-b-2 border-gray-300 pb-8">
     Deliver great service experiences fast - without the complexity of 
     traditional ITSM solutions. Accelerate critical development work, 
     eliminate toil, and deploy changes with ease.
      </p>
      <div className="mt-15 text-base/8 font-bold">
    ☑️ Continuous integration and deployment<br/>
    ☑️ Development workflow<br/>
    ☑️ Knowledge management<br/>
       </div>
       
      <div className="mt-6">
      <p className="text-Neutral-400 opacity-50 ">Deliver great service experiences fast - without the complexity of 
      traditional ITSM solutions.</p>
      </div>

      <div className="flex h-[400px] lg:mt-50 mt-10">
      <img src={feature2} alt="image" className="w-full object-contain transition hover:scale-105 cursor-pointer"/>
    </div>
    </div>
    
    {/* Right-Side*/}
    <div className="mt-10 lg:mt-18">
      <div className="h-[250px] sm:h-[350px] lg:h-[400px]">
      <img src={feature} alt="image" className="w-full object-contain transition hover:scale-105 cursor-pointer"/>
      </div>
      <div className="p-2 mt-10 lg:mt-18 ">
      <h1 className="text-3xl font-extrabold">We invest in the world’s potential</h1>
      <p className="mt-4 text-Neutral-400 opacity-50 font-stretch-extra-expanded border-b-2 border-gray-300 pb-8">
     Deliver great service experiences fast - without the complexity of 
     traditional ITSM solutions. Accelerate critical development work, 
     eliminate toil, and deploy changes with ease.
      </p>
      <div className="mt-15 text-base/8 font-bold">
    ☑️ Dynamic reports and dashboards<br/>
    ☑️ Templates for everyone<br/>
    ☑️ Development workflow<br/>
    ☑️ Limitless business automation<br/>
    ☑️ Knowledge management<br/>
       </div>

      <div className="mt-6">
      <p className="text-Neutral-400 opacity-50 ">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
      </div>
      </div>
    </div>
    </div>
</section>

  {/* Trusted-Section*/}
<section className="w-full pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 mt-7 max-w-7xl mx-auto px-6">
    {/* Left-Side*/}
    <div className="p-2 lg:mt-18">
      <p className="text-violet-600 font-semibold text-xl">Trusted Worldwide</p>
      <p className="font-black text-3xl lg:mt-3">Trusted by over 600 million users and 10,000 teams.</p>
      <p className="opacity-50 mt-3 font-medium border-b-2 border-gray-300 pb-8">Our rigorous security and compliance standards are at the heart of 
        all we do. We work tirelessly to protect you and your customers.</p>
      <p className="text-violet-600 font-semibold mt-7 hover:text-violet-400 cursor-pointer">Explore Legality Guide ➔</p>
      <p className="text-violet-600 font-semibold mt-4 hover:text-violet-400 cursor-pointer">Visit the Trust Center ➔</p>
    </div>
    
    {/* Right-Side*/}
    <div className="mt-16 p-4 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:pl-12">
  <div>
    <Server className="mb-5 h-12 w-12 text-violet-600 transition hover:scale-105 cursor-pointer" strokeWidth={2}/>
    <p className="text-3xl font-bold">99.99% uptime</p>
    <p className="mt-3 text-lg leading-8 text-gray-500">For Landwind, with zero maintenance downtime</p>
  </div>

  <div>
    <UsersRound className="mb-5 h-12 w-12 text-violet-600 transition hover:scale-105 cursor-pointer" strokeWidth={2} />
    <p className="text-3xl font-bold">600M+ Users</p>
    <p className="mt-3 text-lg leading-8 text-gray-500">Trusted by over 600 million users around the world</p>
  </div>

  <div>
    <Globe2 className="mb-5 h-12 w-12 text-violet-600 transition hover:scale-105 cursor-pointer" strokeWidth={2} />
    <p className="text-3xl font-bold">100+ countries</p>
    <p className="mt-3 text-lg leading-8 text-gray-500">Have used Landwind to create functional websites</p>
  </div>

  <div>
    <ShoppingCart className="mb-5 h-12 w-12 text-violet-600 transition hover:scale-105 cursor-pointer" strokeWidth={2}/>
    <p className="text-3xl font-bold">5+ Million</p>
    <p className="mt-3 text-lg leading-8 text-gray-500">Transactions per day
    </p>
  </div>
</div>
</div>
</section>

  {/*Google CEO*/}
<section className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-4xl text-center">
        <div className="text-8xl font-serif text-slate-400">“</div>

        <p className="lg:text-2xl text-1xl font-bold leading-relaxed text-slate-900">
          Landwind is just awesome. It contains tons of predesigned components
          and pages starting from login screen to complex dashboard.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <img src={avatar} alt="Micheal Gough" className="h-9 w-9 rounded-full"/>
          <span className="font-semibold">Micheal Gough</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500">CEO at Google</span>
        </div>
      </div>
    </section>
    
      {/*Price Card*/}
<section className="mt-9 flex min-h-screen justify-center p-4">
  <div className="w-full text-center">
    <p className="text-3xl font-extrabold sm:text-4xl lg:text-3xl">
      Designed for business teams like yours
    </p>

    <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
      Here at Landwind we focus on markets where technology, innovation, and
      capital can unlock long-term value and drive economic growth.
    </p>

    <div className="flex justify-center p-4 sm:p-8">
      <Pricingcard />
    </div>
  </div>
</section>

  {/*FAQ-Section*/}
<Questions />

  {/*Free-Trial*/}
<section className=" bg-slate-50 p-9 mt-20">
      <div className="text-center text-base/8">
        <p className=" text-3xl font-extrabold mt-20">
          Start your free trial today
        </p>
        <p className="mt-4 text-gray-400">Try Landwind Platform for 30 days. No credit card required.</p>
        <button className="rounded-lg bg-violet-600 mt-7 px-4 py-1 font-semibold cursor-pointer text-white transition hover:bg-violet-500">
        Free trial for 30 days</button>
          </div>
</section>

{/*Contact Details*/}
        <Contact />

         {/*Footer*/}
<section className=" bg-slate-50 p-9 mt-20 border-t border-gray-200">
      <div className="text-center text-base/8">
      <div className="flex w-full gap-5 m-3 px-6 py-3 justify-center">
  <div>
    <img src={landlogo} alt="Purple"className="h-10 w-10 rounded-full"/>
  </div>
  <span className="mt-1 text-2xl font-semibold">Landwind</span>
  </div>
        <p className="mt-4 text-gray-400">© 2021-2022 Landwind™. All Rights Reserved. Built with <span className="text-violet-600">Flowbite</span> and <span className="text-violet-600">Tailwind CSS.</span></p>
        </div>
</section>

</div>
  )};
export default App
