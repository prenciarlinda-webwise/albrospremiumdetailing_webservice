import Image from "next/image";

const galleryImages = [
  {
    src: "/images/car-detailing-san-jose-california.webp",
    alt: "Car detailing service in San Jose California",
    title: "San Jose Detailing"
  },
  {
    src: "/images/interior-detailing-san-jose.webp",
    alt: "Interior car detailing in San Jose",
    title: "Interior Detail"
  },
  {
    src: "/images/exterior-detailing-bay-area.webp",
    alt: "Exterior car detailing in Bay Area",
    title: "Exterior Detail"
  },
  {
    src: "/images/professional-hand-car-wash.webp",
    alt: "Professional hand car wash service",
    title: "Hand Wash"
  },
  {
    src: "/images/mobile-detailing-service-bay-area.webp",
    alt: "Mobile car detailing service Bay Area",
    title: "Mobile Service"
  },
  {
    src: "/images/luxury-car-detailing-bmw.webp",
    alt: "Luxury BMW car detailing",
    title: "Luxury Vehicles"
  },
  {
    src: "/images/full-car-detailing-services.webp",
    alt: "Full car detailing services",
    title: "Full Detail"
  },
  {
    src: "/images/hand-car-wash-campbell.webp",
    alt: "Hand car wash in Campbell CA",
    title: "Campbell Service"
  },
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-28 bg-white" id="gallery">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
            See the Albros Premium Difference
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Real results from real customers across the Bay Area. Every vehicle receives
            our signature attention to detail.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${
                index === 0 || index === 5 ? "aspect-square" : "aspect-[4/3]"
              }`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes={index === 0 || index === 5
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
