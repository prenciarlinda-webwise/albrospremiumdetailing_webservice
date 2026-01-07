export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  price: number | null;
  priceLabel: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: "free-assessment",
    name: "Free Vehicle Assessment",
    shortName: "Free Assessment",
    description: "Not sure which detailing service is right for your car? Let us take a look—for free! Our expert technicians will assess your vehicle's condition and recommend the perfect service package.",
    price: 0,
    priceLabel: "FREE",
    duration: "1 hour",
    features: [
      "Complete vehicle inspection",
      "Paint condition assessment",
      "Interior evaluation",
      "Personalized service recommendation",
      "No obligation quote"
    ]
  },
  {
    id: "premium-wash",
    name: "Premium Wash",
    shortName: "Premium Wash",
    description: "Our entry-level professional wash delivers a thorough clean that exceeds typical car wash standards. Perfect for regular maintenance.",
    price: 80,
    priceLabel: "$80",
    duration: "1 hour",
    features: [
      "Exterior hand wash - gentle yet thorough wash that removes dirt without harming paint",
      "Spot-free rinse with purified water",
      "Hand dry with premium microfiber towels",
      "Tire and wheel cleaning",
      "Window cleaning inside and out"
    ]
  },
  {
    id: "deluxe-wash",
    name: "Deluxe Wash",
    shortName: "Deluxe Wash",
    description: "Elevate your vehicle's cleanliness with our comprehensive deluxe wash package. Includes everything in Premium plus interior care.",
    price: 165,
    priceLabel: "$165",
    duration: "2 hours",
    features: [
      "Complete exterior hand wash",
      "Spot-free purified rinse",
      "Premium hand dry",
      "Interior vacuum",
      "Dashboard and console wipe-down",
      "Door jamb cleaning",
      "Air freshener application"
    ],
    popular: true
  },
  {
    id: "interior-detail",
    name: "Albros Premium Interior Detail",
    shortName: "Interior Detail",
    description: "Transform your vehicle's interior with our comprehensive detailing service. We clean, condition, and protect every surface.",
    price: 200,
    priceLabel: "$200",
    duration: "2 hours",
    features: [
      "Deep interior vacuum - carpets, mats, seats, and trunk",
      "Dashboard and console detail - cleans and conditions all surfaces",
      "Leather/vinyl conditioning",
      "Door panel cleaning",
      "Cup holder and storage compartment cleaning",
      "Headliner spot cleaning",
      "Air vent cleaning",
      "Interior window cleaning"
    ]
  },
  {
    id: "exterior-detail",
    name: "Albros Premium Exterior Detail",
    shortName: "Exterior Detail",
    description: "Restore your vehicle's exterior shine with our professional exterior detailing service. Protection meets perfection.",
    price: 185,
    priceLabel: "$185",
    duration: "2 hours",
    features: [
      "Scratch-free hand wash",
      "Spot-free rinse",
      "Clay bar treatment for paint decontamination",
      "Paint sealant application",
      "Tire dressing",
      "Wheel detailing and protection",
      "Trim restoration",
      "Chrome polishing"
    ]
  },
  {
    id: "all-in-detail",
    name: "Albros Premium All-in Detail",
    shortName: "All-in Detail",
    description: "Our signature complete detailing package combines interior and exterior services for the ultimate vehicle transformation. The best value for comprehensive care.",
    price: 285,
    priceLabel: "$285",
    duration: "4 hours",
    features: [
      "Complete interior vacuum and steam clean",
      "Dashboard and console conditioning",
      "Leather treatment and protection",
      "Full exterior hand wash",
      "Clay bar decontamination",
      "Paint sealant application",
      "Wheel and tire detail",
      "Engine bay cleaning",
      "Headlight restoration"
    ],
    popular: true
  },
  {
    id: "biohazard-cleanup",
    name: "Clean & Safe Biohazard Package",
    shortName: "Biohazard Cleanup",
    description: "Professional cleanup of biological substances like vomit, which can pose health risks. We sanitize and deodorize to restore your vehicle to a safe, clean state.",
    price: null,
    priceLabel: "Contact for Quote",
    duration: "Varies",
    features: [
      "Thorough removal of biological material",
      "Deep sanitization with hospital-grade disinfectants",
      "Odor neutralization treatment",
      "Surface decontamination",
      "Air quality restoration",
      "Health-safe cleaning protocols"
    ]
  },
  {
    id: "fleet-management",
    name: "Fleet Management Services",
    shortName: "Fleet Services",
    description: "Keep your business fleet looking professional with our customized fleet management detailing programs. Volume discounts and scheduled maintenance available.",
    price: null,
    priceLabel: "Custom Quote",
    duration: "Varies",
    features: [
      "Customized service packages",
      "Volume pricing discounts",
      "Scheduled maintenance programs",
      "Priority booking",
      "Dedicated account manager",
      "Detailed service reports",
      "Flexible scheduling"
    ]
  }
];

export const serviceAreas = [
  "San Jose",
  "Santa Clara",
  "Sunnyvale",
  "Mountain View",
  "Palo Alto",
  "Cupertino",
  "Milpitas",
  "Fremont",
  "Campbell",
  "Los Gatos",
  "Saratoga",
  "San Francisco",
  "Oakland",
  "San Benito County"
];
