import { Edge, Node } from "reactflow";

type TNodeDataExtras = {
  data: { title?: string; byLine?: string; variant?: string };
};

// ===============================
// NODES
// ===============================
export const questNodes: (Node & TNodeDataExtras)[] = [
  // --- litigation
  {
    id: "start-00",
    type: "start",
    position: { x: -55, y: -200 },
    data: {},
  },
  {
    id: "resource-00",
    type: "quest",
    position: { x: 130, y: -95 },
    data: {
      title:
        "[Bio/Chem Lectures 1-3](https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/video_galleries/lecture-videos/)",
      byLine: "@ MIT Opencourseware",
      variant: "course",
    },
  },
  {
    id: "resource-01",
    type: "quest",
    position: { x: -90, y: -10 },
    data: {
      title: "[Bio-Hacker Bootcamp](https://www.genspace.org/classes)",
      byLine: "@ Genspace",
      variant: "course",
    },
  },
  {
    id: "start-01",
    type: "quest",
    position: { x: 0, y: 75 },
    data: {
      title: "Bio-Plastic Membership Card",
      byLine: "(Deli Potatoes + Cyanotype)",
    },
  },
  {
    id: "resource-02",
    type: "quest",
    position: { x: 250, y: 110 },
    data: {
      title:
        "[Green Fluorescent Protein(GFP)](https://www.youtube.com/watch?v=d-gUPSVX25U)",
      byLine: "What is this thing?",
      variant: "course",
    },
  },
  {
    id: "start-02",
    type: "quest",
    position: { x: -20, y: 190 },
    data: {
      title:
        "[Transforming Bacteria to Glow Green](https://www.notion.so/Bio-Quest-1-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80)",
      byLine: "(Inserting GFP DNA)",
    },
  },
  {
    id: "start-03",
    type: "quest",
    position: { x: 0, y: 270 },
    data: {
      title:
        "[Using Bacteria as Bio-Factories](https://www.notion.so/Bio-Quest-2-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611)",
      byLine: "(Replicating & Harvesting GFP DNA)",
    },
  },
  // --- plant evolution
  {
    id: "plantEvolution-00",
    type: "section",
    position: { x: -450, y: 400 },
    data: {
      title: "Botanical Pharmacy",
      byLine:
        "ft. [Open Plant @ Genspace](https://www.genspace.org/community-projects)",
    },
  },
  {
    id: "plantEvolution-01",
    type: "quest",
    position: { x: -600, y: 520 },
    data: {
      title: "Growing Marchantia on Soil",
      byLine: "(Harvesting & Freezing Spores)",
    },
  },
  {
    id: "plantEvolution-02",
    type: "quest",
    position: { x: -360, y: 520 },
    data: {
      title: "Growing Marchantia on Media",
      byLine: "(Going From Spore to Plant)",
    },
  },
  {
    id: "plantEvolution-03",
    type: "quest",
    position: { x: -540, y: 655 },
    data: {
      title:
        "[Transforming + Growing Purple Marchantia](https://www.notion.so/BQ-04-Genetically-Modifying-Marchantia-to-be-Purple-Spore-Transformation-using-Aggrobactereum-a030bde32c0f4dd3ac5ab660b332156c?pvs=4)",
      byLine: "(Spore Transformation w/ Agrobacterium)",
    },
  },
  {
    id: "plantEvolution-10",
    type: "section",
    position: { x: -570, y: 760 },
    data: { title: "Growth Hacking" },
  },
  {
    id: "plantEvolution-11",
    type: "quest",
    position: { x: -740, y: 835 },
    data: { title: "Speed Breeding Cabinet" },
  },
  {
    id: "plantEvolution-12",
    type: "quest",
    position: { x: -655, y: 900 },
    data: { title: "Repressive Gene Knockout", byLine: "(w/ CRISPR)" },
  },
  {
    id: "plantEvolution-13",
    type: "quest",
    position: { x: -520, y: 855 },
    data: { title: "Polyploiding" },
  },
  {
    id: "plantEvolution-20",
    type: "section",
    position: { x: -350, y: 760 },
    data: {
      title: "Growing Chemicals via Plants",
      byLine: "(Gene Transfer w/ Agrobacterium)",
    },
  },
  {
    id: "plantEvolution-21",
    type: "quest",
    position: { x: -375, y: 835 },
    data: { title: "Insulin" },
  },
  {
    id: "plantEvolution-22",
    type: "quest",
    position: { x: -280, y: 860 },
    data: { title: "Testosterone" },
  },
  {
    id: "plantEvolution-23",
    type: "quest",
    position: { x: -160, y: 830 },
    data: { title: "Estrogen" },
  },
  {
    id: "plantEvolution-30",
    type: "section",
    position: { x: -320, y: 970 },
    data: { title: "Processing for Human Use" },
  },
  // --- env monitoring + litigation
  {
    id: "envJustice-00",
    type: "section",
    position: { x: 0, y: 400 },
    data: {
      title: "Environmental Justice",
      byLine:
        "ft. [Soverign Science](https://www.instagram.com/sovereign.science/)",
    },
  },
  {
    id: "envJustice-01",
    type: "quest",
    position: { x: -155, y: 620 },
    data: {
      title: "Environmental Data Stewardship",
      byLine: "(Currnet & Past)",
    },
  },
  {
    id: "envJustice-10",
    type: "section",
    position: { x: 215, y: 490 },
    data: {
      title: "Sampling",
    },
  },
  {
    id: "envJustice-11",
    type: "quest",
    position: { x: 85, y: 550 },
    data: {
      title: "Soil Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-12",
    type: "quest",
    position: { x: 275, y: 550 },
    data: {
      title: "Water Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-13",
    type: "quest",
    position: { x: 180, y: 615 },
    data: {
      title: "Air Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-20",
    type: "section",
    position: { x: 25, y: 715 },
    data: {
      title: "Environmental Litigation 101",
      byLine: "(Case Building Strategy)",
    },
  },
  // --- bio-production of b-carotene pigments
  {
    id: "bioPigments-00",
    type: "section",
    position: { x: 660, y: 400 },
    data: {
      title: "Orange Pigment Bio-Production",
      byLine: "(Carrots' Beta-Carotene)",
    },
  },
  {
    id: "bioPigments-10",
    type: "section",
    position: { x: 520, y: 495 },
    data: {
      title: "Bacteria-based Production",
      byLine: "(E. Coli)",
    },
  },
  {
    id: "bioPigments-20",
    type: "section",
    position: { x: 860, y: 495 },
    data: {
      title: "Enzyme-based Production",
      byLine: "(aka 'Cell Free')",
    },
  },
  // --- TODO: engineering spider silk
];

// ===============================
// EDGES
// ===============================
export const questEdges: Edge[] = [
  // --- start
  {
    source: "start-00",
    target: "start-01",
  },
  {
    source: "resource-00",
    target: "start-01",
  },
  {
    source: "resource-00",
    target: "resource-01",
  },
  {
    source: "resource-01",
    target: "start-01",
  },
  {
    source: "resource-02",
    target: "start-02",
  },
  {
    source: "start-01",
    target: "start-02",
  },
  {
    source: "start-02",
    target: "start-03",
  },
  // --- start ->>>> section headers
  {
    source: "start-03",
    target: "plantEvolution-00",
  },
  {
    source: "start-03",
    target: "envJustice-00",
  },
  {
    source: "start-03",
    target: "bioPigments-00",
  },
  // --- plant evol
  {
    source: "plantEvolution-00",
    target: "plantEvolution-01",
  },
  {
    source: "plantEvolution-00",
    target: "plantEvolution-02",
  },
  {
    source: "plantEvolution-01",
    target: "plantEvolution-03",
  },
  {
    source: "plantEvolution-02",
    target: "plantEvolution-03",
  },
  {
    source: "plantEvolution-03",
    target: "plantEvolution-10",
  },
  {
    source: "plantEvolution-03",
    target: "plantEvolution-20",
  },
  {
    source: "plantEvolution-10",
    target: "plantEvolution-11",
  },
  {
    source: "plantEvolution-10",
    target: "plantEvolution-12",
  },
  {
    source: "plantEvolution-10",
    target: "plantEvolution-13",
  },
  {
    source: "plantEvolution-20",
    target: "plantEvolution-21",
  },
  {
    source: "plantEvolution-20",
    target: "plantEvolution-22",
  },
  {
    source: "plantEvolution-20",
    target: "plantEvolution-23",
  },
  {
    source: "plantEvolution-21",
    target: "plantEvolution-30",
  },
  {
    source: "plantEvolution-22",
    target: "plantEvolution-30",
  },
  {
    source: "plantEvolution-23",
    target: "plantEvolution-30",
  },
  // --- env justice
  {
    source: "envJustice-00",
    target: "envJustice-01",
  },
  {
    source: "envJustice-00",
    target: "envJustice-10",
  },
  {
    source: "envJustice-10",
    target: "envJustice-11",
  },
  {
    source: "envJustice-10",
    target: "envJustice-12",
  },
  {
    source: "envJustice-10",
    target: "envJustice-13",
  },
  {
    source: "envJustice-01",
    target: "envJustice-20",
  },
  {
    source: "envJustice-11",
    target: "envJustice-20",
  },
  {
    source: "envJustice-12",
    target: "envJustice-20",
  },
  {
    source: "envJustice-13",
    target: "envJustice-20",
  },
  // --- pigment bio production
  {
    source: "bioPigments-00",
    target: "bioPigments-10",
  },
  {
    source: "bioPigments-00",
    target: "bioPigments-20",
  },
].map((e) => ({
  ...e,
  id: `e--${e.source}--${e.target}`,
  // @ts-ignore
  className:
    e.source?.includes("resource") || e.target?.includes("resource")
      ? "ugc-edge--resource"
      : "ugc-edge",
}));
