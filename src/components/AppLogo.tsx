import Link from 'next/link'

const AppLogo = () => {
  return (
    <Link href='/' className="btn btn-ghost btn-sm shadow italic bg-lime-50 tracking-tight font-mono w-fit flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span className='text-md'>GoloG</span>
    </Link>
  );
};

export default AppLogo;
