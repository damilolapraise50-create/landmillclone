function pricingcard() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
<div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg cursor-pointer transition hover:scale-105">
      <h3 className="text-xl font-bold text-slate-900">Starter</h3>

      <p className="mt-2 text-sm text-slate-500">Best option for personal use & for your next project.</p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-extrabold text-slate-900">$29</span>
        <span className="mb-1 text-slate-500">/ month</span>
      </div>

      <ul className="my-8 space-y-4">
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
       Individual configuration
        </li>
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
          No setup, or hidden fees
        </li>
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
      <p>Team size: <span className="font-semibold">1 developer</span></p>
        </li>
         <li className="flex gap-3">
          <span className="text-green-500">✓</span>
      <p>Premium Support: <span className="font-semibold">6 months</span></p>
        </li>
         <li className="flex gap-3">
          <span className="text-green-500">✓</span>
     <p>Free updates: <span className="font-semibold">6 months</span></p>
      </li>
      </ul>

      <button className="w-full rounded-lg bg-violet-600 px-4 py-3 font-semibold cursor-pointer  text-white transition hover:bg-violet-500">
        Get Started
      </button>
    </div>

    <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg cursor-pointer transition hover:scale-105">
      <h3 className="text-xl font-bold text-slate-900">Company</h3>

      <p className="mt-2 text-sm text-slate-500">Relevant for multiple users, extended & premium support.</p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-extrabold text-slate-900">$99</span>
        <span className="mb-1 text-slate-500">/ month</span>
      </div>

      <ul className="my-8 space-y-4">
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
      Individual configuration
        </li>
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
          No setup, or hidden fees
        </li>
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
     <p>Team size: <span className="font-semibold">10 developers</span></p>
        </li>
         <li className="flex gap-3">
          <span className="text-green-500">✓</span>
      <p>Premium Support:<span className="font-semibold">24 months</span></p>
        </li>
         <li className="flex gap-3">
          <span className="text-green-500">✓</span>
     <p>Free updates:<span className="font-semibold">24 months</span></p>
      </li>
      </ul>

      <button className="w-full rounded-lg bg-violet-600 px-4 py-3 font-semibold cursor-pointer text-white transition hover:bg-violet-500">
        Get Started
      </button>
    </div>


    <div className="mx-auto w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition hover:scale-105 cursor-pointer">
      <h3 className="text-xl font-bold text-slate-900">Enterprise</h3>

      <p className="mt-2 text-sm text-slate-500">Best for large scale uses and extended redistribution rights.</p>

      <div className="mt-6 flex items-end gap-1">
        <span className="text-5xl font-extrabold text-slate-900">$499</span>
        <span className="mb-1 text-slate-500">/ month</span>
      </div>

      <ul className="my-8 space-y-4">
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
       Individual configuration
        </li>
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
          No setup, or hidden fees
        </li>
        <li className="flex gap-3">
          <span className="text-green-500">✓</span>
          <p>Team size: <span className="font-semibold">100+ developers</span></p>
        </li>
         <li className="flex gap-3">
          <span className="text-green-500">✓</span>
      <p>Premium Support: <span className="font-semibold">36 months</span></p>
        </li>
         <li className="flex gap-3">
          <span className="text-green-500">✓</span>
     <p>Free updates: <span className="font-semibold">36 months</span></p>
      </li>
      </ul>

      <button className="w-full rounded-lg bg-violet-600 px-4 py-3 font-semibold cursor-pointer text-white transition hover:bg-violet-500">
        Get Started
      </button>
    </div>

    </div>
    
  );
}
export default pricingcard