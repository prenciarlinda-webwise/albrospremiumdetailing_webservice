export interface Location {
  slug: string;
  name: string;
  county: string;
  state: string;
  geo: {
    latitude: string;
    longitude: string;
  };
  description: string;
  landmarks: string[];
  neighborhoods: string[];
  meta: {
    title: string;
    description: string;
  };
}

export const locations: Location[] = [
  {
    slug: "san-jose",
    name: "San Jose",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.3382",
      longitude: "-121.8863"
    },
    description: "San Jose, the heart of Silicon Valley, deserves premium car care. Our mobile detailing team serves all San Jose neighborhoods, from Willow Glen to Almaden Valley, bringing showroom-quality results to your driveway.",
    landmarks: ["SAP Center", "Santana Row", "San Jose State University", "Downtown San Jose"],
    neighborhoods: ["Willow Glen", "Almaden Valley", "Rose Garden", "Evergreen", "Cambrian", "Silver Creek"],
    meta: {
      title: "Mobile Car Detailing San Jose, CA | Same-Day Service | Albros",
      description: "Premium mobile car detailing in San Jose. We come to your home or office in Willow Glen, Almaden, Rose Garden & all San Jose neighborhoods. Book your detail today!"
    }
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.3541",
      longitude: "-121.9552"
    },
    description: "Located in the tech hub of Santa Clara, we provide convenient mobile car detailing for busy professionals. From Levi's Stadium to Santa Clara University, we bring professional detailing to you.",
    landmarks: ["Levi's Stadium", "Santa Clara University", "Great America", "Intel Headquarters"],
    neighborhoods: ["Mission Santa Clara", "Central Park", "Bowers", "Rivermark"],
    meta: {
      title: "Mobile Car Detailing Santa Clara, CA | Same-Day Service | Albros",
      description: "Professional mobile car detailing in Santa Clara. Convenient at-home service near Levi's Stadium, SCU & all Santa Clara areas. 5-star rated detailing service!"
    }
  },
  {
    slug: "sunnyvale",
    name: "Sunnyvale",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.3688",
      longitude: "-122.0363"
    },
    description: "Sunnyvale's tech professionals trust us for premium mobile car detailing. We service the entire city, from Downtown Sunnyvale to Lakewood, with meticulous attention to detail.",
    landmarks: ["Downtown Sunnyvale", "Sunnyvale Town Center", "LinkedIn Campus", "Google Sunnyvale"],
    neighborhoods: ["Downtown", "Lakewood", "Cherry Chase", "Birdland", "Ponderosa"],
    meta: {
      title: "Mobile Car Detailing Sunnyvale, CA | Same-Day Service | Albros",
      description: "Top-rated mobile car detailing in Sunnyvale. We come to your location in Downtown, Lakewood & beyond. Professional products, exceptional results!"
    }
  },
  {
    slug: "mountain-view",
    name: "Mountain View",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.3861",
      longitude: "-122.0839"
    },
    description: "Home to Google and countless tech innovators, Mountain View residents demand the best. Our mobile detailing service delivers premium results at your home, office, or the Googleplex.",
    landmarks: ["Googleplex", "Castro Street", "Shoreline Amphitheatre", "Computer History Museum"],
    neighborhoods: ["Old Mountain View", "Cuesta Park", "Waverly Park", "Shoreline West", "Rex Manor"],
    meta: {
      title: "Mobile Car Detailing Mountain View, CA | Same-Day Service | Albros",
      description: "Professional mobile car detailing in Mountain View. Serving Castro Street, Cuesta Park & all neighborhoods. Convenient detailing that comes to you!"
    }
  },
  {
    slug: "palo-alto",
    name: "Palo Alto",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.4419",
      longitude: "-122.1430"
    },
    description: "Palo Alto's discerning residents choose Albros Premium for mobile car detailing. From Stanford University to Downtown, we provide luxury-level service at your convenience.",
    landmarks: ["Stanford University", "University Avenue", "Stanford Shopping Center", "Palo Alto Art Center"],
    neighborhoods: ["Downtown", "Professorville", "Crescent Park", "Old Palo Alto", "Barron Park"],
    meta: {
      title: "Mobile Car Detailing Palo Alto, CA | Same-Day Service | Albros",
      description: "Premium mobile car detailing in Palo Alto. Expert service near Stanford, University Ave & all Palo Alto areas. Luxury results, convenient mobile service!"
    }
  },
  {
    slug: "cupertino",
    name: "Cupertino",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.3230",
      longitude: "-122.0322"
    },
    description: "In the heart of Apple's hometown, we deliver tech-forward mobile detailing with old-school attention to detail. Cupertino residents trust us for premium car care.",
    landmarks: ["Apple Park", "Cupertino Village", "Main Street Cupertino", "De Anza College"],
    neighborhoods: ["Monta Vista", "Garden Gate", "Oak Valley", "Homestead Villa", "Rancho Rinconada"],
    meta: {
      title: "Mobile Car Detailing Cupertino, CA | Same-Day Service | Albros",
      description: "Expert mobile car detailing in Cupertino. Serving Apple Park, Monta Vista & all neighborhoods. Premium products, professional results. Book today!"
    }
  },
  {
    slug: "milpitas",
    name: "Milpitas",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.4323",
      longitude: "-121.8996"
    },
    description: "Milpitas residents enjoy the convenience of our mobile detailing service. Whether you're near Great Mall or in the residential hills, we bring professional car care to you.",
    landmarks: ["Great Mall", "Milpitas Square", "Ed Levin County Park", "McCarthy Ranch"],
    neighborhoods: ["Calaveras Hills", "Sunnyhills", "Augustine", "Midtown", "Town Center"],
    meta: {
      title: "Mobile Car Detailing Milpitas, CA | Same-Day Service | Albros",
      description: "Top-rated mobile car detailing in Milpitas. Serving Great Mall area, Calaveras Hills & beyond. We come to you with professional-grade equipment!"
    }
  },
  {
    slug: "fremont",
    name: "Fremont",
    county: "Alameda County",
    state: "CA",
    geo: {
      latitude: "37.5485",
      longitude: "-121.9886"
    },
    description: "As one of the East Bay's largest cities, Fremont deserves premium mobile car care. From Mission San Jose to Niles, our team covers all of Fremont with exceptional service.",
    landmarks: ["Tesla Factory", "Mission San Jose", "Niles District", "Pacific Commons"],
    neighborhoods: ["Mission San Jose", "Niles", "Centerville", "Warm Springs", "Irvington"],
    meta: {
      title: "Mobile Car Detailing Fremont, CA | Same-Day Service | Albros",
      description: "Premium mobile car detailing in Fremont. Serving Mission San Jose, Niles, Warm Springs & all areas. Expert detailing that comes to your location!"
    }
  },
  {
    slug: "campbell",
    name: "Campbell",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.2872",
      longitude: "-121.9500"
    },
    description: "Campbell's charming downtown and residential neighborhoods deserve the best car care. Our mobile detailing team serves all of Campbell with premium products and techniques.",
    landmarks: ["Downtown Campbell", "Pruneyard Shopping Center", "Campbell Community Center", "Los Gatos Creek Trail"],
    neighborhoods: ["Downtown", "Central Campbell", "Hacienda", "San Tomas"],
    meta: {
      title: "Mobile Car Detailing Campbell, CA | Same-Day Service | Albros",
      description: "Professional mobile car detailing in Campbell. Serving Downtown, Pruneyard area & all neighborhoods. Convenient, premium car care at your location!"
    }
  },
  {
    slug: "los-gatos",
    name: "Los Gatos",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.2358",
      longitude: "-121.9624"
    },
    description: "Los Gatos is known for its beautiful homes and luxury vehicles. Our premium mobile detailing service matches the high standards of this exceptional community.",
    landmarks: ["Downtown Los Gatos", "Los Gatos Creek Trail", "Netflix Headquarters", "Vasona Lake"],
    neighborhoods: ["Downtown", "Almond Grove", "Blossom Hill", "Monte Sereno border", "Shannon Heights"],
    meta: {
      title: "Mobile Car Detailing Los Gatos, CA | Same-Day Service | Albros",
      description: "Luxury mobile car detailing in Los Gatos. Premium service for Downtown, Almond Grove & all Los Gatos neighborhoods. We treat your car like our own!"
    }
  },
  {
    slug: "saratoga",
    name: "Saratoga",
    county: "Santa Clara County",
    state: "CA",
    geo: {
      latitude: "37.2638",
      longitude: "-122.0230"
    },
    description: "Saratoga's exclusive neighborhoods and luxury vehicles require expert care. Our mobile detailing team specializes in high-end vehicles and delivers exceptional results.",
    landmarks: ["Big Basin Way", "Hakone Gardens", "Saratoga Village", "Mountain Winery"],
    neighborhoods: ["Saratoga Village", "Saratoga Woods", "Quito Village", "Monte Sereno"],
    meta: {
      title: "Mobile Car Detailing Saratoga, CA | Same-Day Service | Albros",
      description: "Premium mobile car detailing in Saratoga. Expert care for luxury vehicles. Serving Saratoga Village, Hakone area & all Saratoga neighborhoods!"
    }
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    county: "San Francisco County",
    state: "CA",
    geo: {
      latitude: "37.7749",
      longitude: "-122.4194"
    },
    description: "The City by the Bay presents unique detailing challenges with its fog and city grime. Our mobile team navigates SF's neighborhoods to deliver premium results anywhere.",
    landmarks: ["Golden Gate Bridge", "Union Square", "Fisherman's Wharf", "Mission District"],
    neighborhoods: ["Marina", "Pacific Heights", "SOMA", "Mission", "Castro", "Nob Hill", "Richmond", "Sunset"],
    meta: {
      title: "Mobile Car Detailing San Francisco, CA | Same-Day Service | Albros",
      description: "Professional mobile car detailing in San Francisco. Serving Marina, Pacific Heights, Mission & all SF neighborhoods. Premium detailing that comes to you!"
    }
  },
  {
    slug: "oakland",
    name: "Oakland",
    county: "Alameda County",
    state: "CA",
    geo: {
      latitude: "37.8044",
      longitude: "-122.2712"
    },
    description: "Oakland's diverse communities deserve top-quality car care. From the hills to Jack London Square, our mobile detailing team serves all Oakland neighborhoods.",
    landmarks: ["Lake Merritt", "Jack London Square", "Rockridge", "Oakland Hills"],
    neighborhoods: ["Rockridge", "Temescal", "Montclair", "Grand Lake", "Piedmont Avenue", "Fruitvale"],
    meta: {
      title: "Mobile Car Detailing Oakland, CA | Same-Day Service | Albros",
      description: "Top-rated mobile car detailing in Oakland. Serving Rockridge, Montclair, Lake Merritt area & beyond. Professional detailing at your home or office!"
    }
  },
  {
    slug: "san-benito-county",
    name: "San Benito County",
    county: "San Benito County",
    state: "CA",
    geo: {
      latitude: "36.8508",
      longitude: "-121.3153"
    },
    description: "We extend our premium mobile detailing services to San Benito County. Residents in Hollister and surrounding areas enjoy the same exceptional service as our Bay Area clients.",
    landmarks: ["Downtown Hollister", "Pinnacles National Park", "San Juan Bautista Mission"],
    neighborhoods: ["Hollister", "San Juan Bautista", "Tres Pinos", "Ridgemark"],
    meta: {
      title: "Mobile Car Detailing San Benito County | Same-Day Service | Albros",
      description: "Premium mobile car detailing in San Benito County. Serving Hollister, San Juan Bautista & surrounding areas. Professional results, convenient service!"
    }
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};
