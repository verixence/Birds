export type PieceCategory =
  | "Functional Ceramics"
  | "Planters & Decor"
  | "Decorative & Artistic"
  | "Festive & Gifting";

export interface ImageLike {
  imageUrl?: string;
  alt: string;
}

export interface HandcraftedPiece extends ImageLike {
  id: string;
  title: string;
  category: PieceCategory;
  tag?: string;
}

export interface FestiveItem extends ImageLike {
  id: string;
  title: string;
  highlight: string;
}

export interface InstagramTile extends ImageLike {
  id: string;
  label?: string;
}

// Handcrafted pieces mapped to provided gallery images
export const handcraftedPieces: HandcraftedPiece[] = [
  {
    id: "cups-mugs",
    title: "Wall Pocket Vases",
    category: "Planters & Decor",
    imageUrl:
      "/gallery/d86d5d821cbfdf37fae0ab2a59358b29-17ed0d3d-950c-4f02-a88b-2d148b48c268.png",
    alt: "Soft organic wall vases with flowers",
    tag: "Wall blooms",
  },
  {
    id: "tea-saucers",
    title: "Soap & Trinket Dishes",
    category: "Functional Ceramics",
    imageUrl:
      "/gallery/822eb955a90a814707a7010e071e8ef0-009e231e-bf5d-4861-aecf-5e79945fbb51.png",
    alt: "Minimal ceramic soap dishes with blue lines",
    tag: "By the sink",
  },
  {
    id: "bowls-snack",
    title: "Figure Sculpture",
    category: "Decorative & Artistic",
    imageUrl:
      "/gallery/bc8e217e83312f4f9f025a93818153b0-38556598-0123-4e95-a509-415b6e118e00.png",
    alt: "Decorative female sculpture with petal dress",
    tag: "Story piece",
  },
  {
    id: "plates-platters",
    title: "Everyday Dinnerware",
    category: "Functional Ceramics",
    imageUrl:
      "/gallery/7f3b644d9fc73a88a33418fffc5c6440-12a40599-c1dd-4c87-8cf4-b031fa774e00.png",
    alt: "Stacked ceramic dinnerware set in green glaze",
    tag: "Table stories",
  },
  {
    id: "cone-planters",
    title: "Bubble Glaze Plates",
    category: "Functional Ceramics",
    imageUrl:
      "/gallery/d0dfe61b3187d894199d58620e333de6-5acf6dc0-70b8-4b4a-a190-6ee3d568190b.png",
    alt: "Bubble-patterned blue and white ceramic plates",
    tag: "Playful glaze",
  },
  {
    id: "bird-planters",
    title: "Elephant Planter",
    category: "Planters & Decor",
    imageUrl:
      "/gallery/5a332dcbeb3046d92208bbfbcd1a77c7-d49717a2-4465-4b82-b5a1-820dd260aa3b.png",
    alt: "Elephant planter with bright orange flowers",
    tag: "Garden companion",
  },
  {
    id: "indoor-pots",
    title: "Owl Sculpture",
    category: "Decorative & Artistic",
    imageUrl:
      "/gallery/c9c27ff4de8ff172510b6d037ac98fdd-6860056b-af12-4320-80ad-e06777478d0d.png",
    alt: "Terracotta owl sculpture being carved",
    tag: "Studio favourite",
  },
  {
    id: "ceramic-birds",
    title: "Ceramic Birds & Animals",
    category: "Decorative & Artistic",
    imageUrl:
      "/gallery/9231e4681d95ccae43857b6a065fd8a7-b25303e4-8962-4b06-90d1-f66e07483818.png",
    alt: "Figure sculpture holding a flower above a perforated dress",
    tag: "Playful details",
  },
  {
    id: "starfish-decor",
    title: "Elephant Sculpture",
    category: "Decorative & Artistic",
    imageUrl:
      "/gallery/b9e10dc56a43c2beba9a0394dcf9e51c-1c8f7d70-cd6f-46b1-abad-31e2c1003741.png",
    alt: "Light-toned elephant sculpture on linen backdrop",
    tag: "Gentle presence",
  },
  {
    id: "sculptural-pieces",
    title: "Espresso Cups",
    category: "Functional Ceramics",
    imageUrl:
      "/gallery/a8d91efe33fe31206f840ae96ba8e7b0-cb3145b7-81fc-4ed3-9fd7-082a4f1de145.png",
    alt: "Blue ceramic espresso cups around latte art",
    tag: "Morning shots",
  },
];

// Festive & gifting mapped to remaining gallery images
export const festiveItems: FestiveItem[] = [
  {
    id: "diwali-collection",
    title: "Diwali Glow",
    highlight: "Warm glazes and soft silhouettes for festive tables.",
    imageUrl:
      "/gallery/c0cecf979cb378ea526c827f052900eb-c2615226-8a24-4dc9-9d8b-afd4bf21f31e.png",
    alt: "Pastel gradient ceramic trays in a staggered layout",
  },
  {
    id: "ganesh-idols",
    title: "Ganesh Idols",
    highlight:
      "Hand-sculpted Ganesh idols that carry warmth, blessing, and gentle detail.",
    imageUrl:
      "/gallery/image-10c69681-1066-4e05-88a6-aef3d2419860.png",
    alt: "Clay Ganesh idol sculpture in progress",
  },
  {
    id: "gift-hampers",
    title: "Curated Gift Hampers",
    highlight: "Stacks of cups and plates ready to be gifted in sets.",
    imageUrl:
      "/gallery/5e30abff5d81e903dd1b4aa1d6b4fcdf-5ee438d5-a6ee-45ea-8094-4661cd3f26c0.png",
    alt: "Shelves filled with colourful dripping-glaze mugs and bowls",
  },
  {
    id: "seasonal-themes",
    title: "Seasonal Palettes",
    highlight: "Limited pieces in colours that shift with the seasons.",
    imageUrl:
      "/gallery/8b5250a37155582e9c3f25df1b69a964-5b43217a-a958-4c30-b8db-ff47c6baa5cd.png",
    alt: "Neutral sculptural vase in a studio setting",
  },
];

// Ceramic Gallery section — images by category name
export const instagramTiles: InstagramTile[] = [
  {
    id: "ceramic-birds",
    imageUrl: "/gallery/Ceramic Birds.png",
    alt: "Ceramic Birds — handmade ceramics and studio moments",
    label: "Ceramic Birds",
  },
  {
    id: "handcrafted-grid",
    imageUrl: "/gallery/Handcrafted grid.png",
    alt: "Handcrafted grid of ceramic pieces",
    label: "Handcrafted grid",
  },
  {
    id: "studio-process",
    imageUrl: "/gallery/Studio process.png",
    alt: "Studio process — making ceramics by hand",
    label: "Studio process",
  },
  {
    id: "gifting-ideas",
    imageUrl: "/gallery/Gifting ideas.png",
    alt: "Gifting ideas — ceramics for thoughtful gifts",
    label: "Gifting ideas",
  },
  {
    id: "planters-decor",
    imageUrl: "/gallery/Planters%20%26%20decor.png",
    alt: "Planters & decor — ceramic planters and home decor",
    label: "Planters & decor",
  },
  {
    id: "layered-glazes",
    imageUrl: "/gallery/Layered glazes.png",
    alt: "Layered glazes — hand-applied ceramic glazes",
    label: "Layered glazes",
  },
];
