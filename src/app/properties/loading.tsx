export default function PropertiesLoading() {
  return (
    <>
      <div className="pt-24 sm:pt-32 pb-10 sm:pb-16 bg-linear-to-r from-primary to-navy">
        <div className="container-custom">
          <div className="skeleton h-4 w-32 mb-4 sm:mb-6" />
          <div className="skeleton h-10 sm:h-12 w-48 sm:w-64 mb-3 sm:mb-4" />
          <div className="skeleton h-5 sm:h-6 w-64 sm:w-96" />
        </div>
      </div>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="skeleton h-10 sm:h-12 rounded-lg" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md">
                <div className="skeleton h-48 sm:h-56 md:h-64" />
                <div className="p-4 sm:p-5">
                  <div className="skeleton h-5 sm:h-6 w-3/4 mb-2" />
                  <div className="skeleton h-4 w-1/2 mb-3 sm:mb-4" />
                  <div className="skeleton h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
