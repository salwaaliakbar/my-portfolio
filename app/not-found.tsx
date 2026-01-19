import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100">404</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">Page Not Found</p>
      <p className="mt-2 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <Link className="mt-5 flex items-center gap-1 hover:gap-3 rounded-full bg-linear-to-r from-[#06B6D4] via-[#0EA5E9] to-[#06B6D4] px-4 md:px-6 py-2 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3),0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6),0_15px_40px_rgba(0,0,0,0.4)] hover:scale-105"
        role="button" 
        href="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default page;