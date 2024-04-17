import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
        <div>
          <div>Company</div>
          <div className="font-semibold">Dsign</div>
        </div>
        <div>
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-none py-3 px-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            Post a job
          </button>
        </div>
      </div>

      <div>Dashboard</div>
    </>
  );
}
