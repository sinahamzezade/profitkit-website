/** Local stills in /public/media — no remote Unsplash at runtime. */
export const FACES = [
  { src: "/media/face-1.jpg", alt: "Operator portrait" },
  { src: "/media/face-2.jpg", alt: "Operator portrait" },
  { src: "/media/face-3.jpg", alt: "Operator portrait" },
  { src: "/media/face-4.jpg", alt: "Operator portrait" },
] as const;

export const SKUS = {
  parka: { src: "/media/parka.jpg", alt: "Field parka" },
  tote: { src: "/media/tote.jpg", alt: "Harbor tote" },
  mug: { src: "/media/mug.jpg", alt: "Kiln mug" },
  kit: { src: "/media/kit.jpg", alt: "Throw kit" },
} as const;

export const SCENES = {
  packing: {
    src: "/media/packing.jpg",
    alt: "Packed orders on a warehouse bench",
  },
  desk: { src: "/media/desk.jpg", alt: "Analytics on a laptop" },
  floor: { src: "/media/floor.jpg", alt: "Warehouse aisle" },
} as const;
