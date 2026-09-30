import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

function Questions () {
    const [openQuestion, setOpenQuestion] = useState(null);

    return (
        <div>
<section className="p-5 flex mt-9  justify-center">
      <div className="text-center w-full max-w-4xl text-center">
        <p className=" text-3xl font-extrabold">
         Frequently asked questions
        </p> 
        
    <section>
        <div className="border-b border-gray-200 cursor-pointer">
            <button onClick={() => setOpenQuestion(openQuestion === 1 ? null : 1)}className="flex w-full items-center justify-between py-4 text-left">
  <span className="text-base font-medium opacity-50 cursor-pointer">Can I use Landwind in open-source projects?</span>
  {openQuestion === 1 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
</button>
      {openQuestion === 1 && (
  <div className="border-t border-gray-200 text-base text-left leading-relaxed text-slate-500">
    <p>
            Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.<br/>
            Check out this guide to learn how to{" "}
            <a href="#" className="text-violet-600">get started</a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
  </div>
)} </div>

       <div className="border-b border-gray-200 cursor-pointer">
            <button onClick={() => setOpenQuestion(openQuestion === 2 ? null : 2)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="text-base font-medium opacity-50 cursor-pointer">Is there a Figma file availabe</span>
{openQuestion === 2 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {openQuestion === 2 &&(
        <div className="border-t border-gray-200 text-left text-base leading-relaxed text-slate-500">
          <p>
            Landwind is first conceptualized and designed using the Figma software so everything you see in the library
             has a design equivalent in our Figma file.<br/>
            Check out theo{" "}
            <a href="#" className="text-violet-600">Figma design system</a>{" "}
            based on the utility classes from Tailwind CSS and components from Landwind.
          </p>
        </div>
      )}</div>

       <div className="border-b border-gray-200 cursor-pointer">
            <button onClick={() => setOpenQuestion(openQuestion === 3 ? null : 3)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="text-base font-medium opacity-50 cursor-pointer">What are the differences between Landwind and Tailwind</span>
        {openQuestion === 3 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {openQuestion === 3 &&(
        <div className="border-t border-gray-200 text-left text-base leading-relaxed text-slate-500">
          <p>
            The main difference is that the core components from Landwind are open source under the MIT license, 
            whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone 
            components, whereas Tailwind UI offers sections of pages.
            However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no 
            technical reason stopping you from using the best of two worlds.
            Learn more about these technologies:<br/>
            Check out this guide to learn how to{" "}<br/>
            <ul>
            <li><a href="#" className="text-violet-600">Landwind Pro</a>{" "}</li>
            <li><a href="#" className="text-violet-600">Tailwind UI</a>{" "}</li>
            </ul>
          </p>
        </div>
      )}</div>

       <div className="border-b border-gray-200 cursor-pointer">
            <button onClick={() => setOpenQuestion(openQuestion === 4 ? null : 4)} className="flex w-full items-center justify-between py-4 text-left">
        <span className="text-base font-medium opacity-50 cursor-pointer">Can I use Landwind in open-source projects?</span>
{openQuestion === 4 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      {openQuestion === 4 && (
        <div className="border-t border-gray-200 text-left text-base leading-relaxed text-slate-500">
          <p>
            The main difference is that the core components from Landwind are open source under the MIT license,
             whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone 
             components, whereas Tailwind UI offers sections of pages.
            However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no 
            technical reason stopping you from using the best of two worlds.
            Learn more about these technologies:<br/>
            <a href="#" className="text-violet-600">Tailwind Pro</a>{" "}
            <a href="#" className="text-violet-600">Tailwind</a>{" "}
          </p>
        </div>
      )}</div>
      
    </section>
    </div>
</section>

        </div>
)
}

export default Questions