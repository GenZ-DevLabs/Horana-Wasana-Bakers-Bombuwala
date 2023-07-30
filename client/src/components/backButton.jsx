export default function BackButton() {
  return (
    <div className="fixed top-24 left-20">
      <a
        className="flex py-2 px-4 border-2 text-white bg-primary rounded-2xl items-center"
        href="../"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </a>
    </div>
  );
}
