import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Filosophy() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                  <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Nuestra filosofia</h2>
                <p className="mt-4 text-lg text-gray-500">

                </p>
             
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto 
                    Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto &rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">

                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://www.intramed.net/UserFiles/vinetas/95357.jpg"
                        alt="Image"
                      />

                    </div>
                    <div className="text-base font-medium text-gray-700">Juana, cofundadora</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-70 lg:w-auto lg:w-auto lg:max-w-none"
                src="https://www.ims-medical.es/storage/app/uploads/public/5af/029/fe2/thumb_64_1903_591_0_0_auto.jpg"
                alt="Inbox user interface"/>

                <img className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://www.intramed.net/UserFiles/vinetas/95357.jpg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vision / Objetivos</h2>
                <p className="mt-4 text-lg text-gray-500"/>
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto 
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto 
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto 
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Vision y Objetivos</h2>
                <p className="mt-4 text-lg text-gray-500">
                Texto texto texto texto texto Texto texto texto texto texto Texto texto texto texto texto Texto texto texto texto texto
                Texto texto texto texto texto Texto texto texto texto texto
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Ver mas
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://www.ims-medical.es/storage/app/uploads/public/5af/029/fe2/thumb_64_1903_591_0_0_auto.jpg"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
