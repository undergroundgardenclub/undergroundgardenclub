import { Edge, Node } from "reactflow";

// ===============================
// NODES
// ===============================
export const questNodes: Node[] = [
  // --- litigation
  {
    id: "start-00",
    type: "start",
    position: { x: -50, y: 0 },
    data: { title: "BEGIN TO PLAY", url: "http://bit.ly/3ySLalS" },
  },
  {
    id: "start-01",
    type: "quest",
    position: { x: 0, y: 100 },
    data: {
      title: "Bio-Plastic Membership Card",
      byLine: "(from Potatoes at the Deli)",
    },
  },
  {
    id: "start-02",
    type: "quest",
    position: { x: -20, y: 170 },
    data: {
      title:
        "[Transforming Bacteria to Glow Green](https://www.notion.so/Bio-Quest-1-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80)",
      byLine: "(Inserting GFP DNA)",
    },
  },
  {
    id: "start-03",
    type: "quest",
    position: { x: 0, y: 250 },
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
    position: { x: -480, y: 485 },
    data: {
      title: "Growing Marchantia Stock",
      byLine: "(Harvesting & Freezing Spores)",
    },
  },
  {
    id: "plantEvolution-02",
    type: "quest",
    position: { x: -510, y: 570 },
    data: {
      title: "Growing Marchantia on Plates/Media",
      byLine: "(Going From Spore to Plant)",
    },
  },
  {
    id: "plantEvolution-03",
    type: "quest",
    position: { x: -500, y: 655 },
    data: {
      title: "GMO'ing Marchantia to Be Red",
      byLine: "(Gene Transfer w/ Agrobacterium)",
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
      byLine: "(w/ Agrobacterium)",
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
        "ft. [Soverign Science @ Genspace](https://www.instagram.com/sovereign.science/)",
    },
  },
  {
    id: "envJustice-01",
    type: "quest",
    position: { x: -150, y: 615 },
    data: {
      title: "Environmental Data/Record Keeping",
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
  // --- plant evol
  {
    source: "plantEvolution-00",
    target: "plantEvolution-01",
  },
  {
    source: "plantEvolution-01",
    target: "plantEvolution-02",
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
].map((e) => ({
  ...e,
  id: `e--${e.source}--${e.target}`,
  className: "ugc-edge",
}));
