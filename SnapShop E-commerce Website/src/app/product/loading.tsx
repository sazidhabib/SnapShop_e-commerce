export default function ProductsLoading() {
  return (
    <div className="w-full max-w-[1170px] mx-auto px-4 mt-12 animate-pulse">
      <div className="h-8 w-60 bg-gray-200 rounded mb-4" />
      <div className="h-4 w-40 bg-gray-200 rounded mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col w-[270px]">
            <div className="h-[250px] bg-gray-200 rounded-md" />
            <div className="h-4 w-3/4 bg-gray-200 rounded mt-3" />
            <div className="h-4 w-1/4 bg-gray-200 rounded mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
