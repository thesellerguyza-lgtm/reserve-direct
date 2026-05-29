export const WHATSAPP_NUMBER = "27826764239";

const img = (id: string, k: string, size = "max1024x768") =>
  `https://cf.bstatic.com/xdata/images/hotel/${size}/${id}.jpg?k=${k}&o=`;

export const HERO_IMAGES = [
  img("856284250", "d7b9851ddf95dc2c07197a02be4cd27e05f5336f4cdbe334c8514f9acfe29ff6"),
  img("856317542", "6065f449b3f49c1a511d90caf8fd508deaaab99b18ec3eabeb84457c79af9d62"),
  img("856283034", "16381c4e203051cacfe284077e99d1f3842624b10e0c248052b95874ca5e01a2"),
];

export const GALLERY = {
  villaExterior: img("856284250", "d7b9851ddf95dc2c07197a02be4cd27e05f5336f4cdbe334c8514f9acfe29ff6"),
  pool: img("856317542", "6065f449b3f49c1a511d90caf8fd508deaaab99b18ec3eabeb84457c79af9d62"),
  bar: img("856296908", "6231582c1930e0491eae1dbe45217d69da0da72cb2e10c4219c7068ad5c18bbe"),
  kingBed: img("856283034", "16381c4e203051cacfe284077e99d1f3842624b10e0c248052b95874ca5e01a2"),
  bedroomTub: img("856284368", "896e79f70c6d6d3a1ab9eb6a8296cd64d25746f133b719061f0f96add3b90626"),
  shower: img("856284347", "65a6652bb13763c7ee3d368339f32f40ccb4069a66a35b8b2be7620fe3894540"),
  kingTub: img("856284299", "562b87308ab42d7ac85e7ee3166926b7dcdc94906eb1ec9ce56857c94a3b81c4"),
  deskTv: img("856284264", "88ac36a9d2b4cc92af1f00e18e44ff92f4ad65501faaa8749d81f1e9c7ad3ec4"),
};

export type Suite = {
  id: string;
  name: string;
  price: number; // ZAR per night
  guests: number;
  size: string;
  bed: string;
  description: string;
  features: string[];
  images: string[];
};

export const SUITES: Suite[] = [
  {
    id: "mountain-view-suite",
    name: "Suite with Mountain View",
    price: 950,
    guests: 2,
    size: "36 m²",
    bed: "1 Queen bed",
    description:
      "A serene retreat featuring panoramic mountain views, a freestanding bathtub and a private terrace to soak up the African sunsets.",
    features: ["Mountain view", "Freestanding bathtub", "Private terrace", "Air conditioning", "Free Wi-Fi"],
    images: [GALLERY.kingBed, GALLERY.bedroomTub, GALLERY.shower, GALLERY.villaExterior],
  },
  {
    id: "deluxe-suite",
    name: "Deluxe Suite",
    price: 1050,
    guests: 2,
    size: "40 m²",
    bed: "1 King bed",
    description:
      "Our most spacious double, with a sculptural king bed, a stand-alone tub by the window and a relaxed lounge corner.",
    features: ["King bed", "Lounge area", "Rain shower", "Bathrobes & slippers", "Tea / coffee maker"],
    images: [GALLERY.kingTub, GALLERY.deskTv, GALLERY.shower, GALLERY.pool],
  },
  {
    id: "single-suite",
    name: "Single Suite",
    price: 850,
    guests: 1,
    size: "28 m²",
    bed: "1 Single bed",
    description:
      "A calm, sunlit suite designed for solo travellers — everything you need for work, rest and a great cup of coffee.",
    features: ["Work desk", "Flat-screen TV", "En-suite shower", "Microwave & kettle", "Wardrobe"],
    images: [GALLERY.deskTv, GALLERY.shower, GALLERY.kingBed],
  },
  {
    id: "single-suite-plus",
    name: "Single Suite Plus",
    price: 950,
    guests: 1,
    size: "32 m²",
    bed: "1 Single bed",
    description:
      "An upgraded single with a deeper view of the bushveld and access to the infinity pool deck and bar.",
    features: ["Premium view", "Pool deck access", "Bathtub & shower", "Safe & linens", "Dining nook"],
    images: [GALLERY.bedroomTub, GALLERY.villaExterior, GALLERY.bar, GALLERY.pool],
  },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
