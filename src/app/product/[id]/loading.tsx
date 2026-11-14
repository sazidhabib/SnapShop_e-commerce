export default function ProductLoading() {
  return (
    <div className="max-w-[1170px] mx-auto px-4 mt-12 animate-pulse">
      <div className="h-4 w-48 bg-gray-200 rounded mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
          <div className="flex sm:flex-col gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-20 bg-gray-200 rounded-lg" />
            ))}
          </div>
          <div className="flex-1 bg-gray-200 rounded-lg h-[400px]" />
        </div>
        <div className="md:col-span-5 flex flex-col space-y-4">
          <div className="h-8 w-3/4 bg-gray-200 rounded" />
          <div className="h-5 w-1/3 bg-gray-200 rounded" />
          <div className="h-8 w-1/4 bg-gray-200 rounded" />
          <div className="h-20 w-full bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-200 rounded mt-6" />
        </div>
      </div>
    </div>
  );
}
