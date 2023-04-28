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
    position: { x: -55, y: -320 },
    data: {},
  },
  {
    id: "resource-00",
    type: "quest",
    position: { x: 140, y: -235 },
    data: {
      title:
        "[Introductory Bio/Chem](https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/video_galleries/lecture-videos/)",
      byLine: "Lectures 1-3 @ MIT Opencourseware",
      variant: "course",
    },
  },
  {
    id: "resource-01",
    type: "quest",
    position: { x: 30, y: -150 },
    data: {
      title: "[Bio-Hacker Bootcamp](https://www.genspace.org/classes)",
      byLine: "@ Genspace",
    },
  },
  {
    id: "resource-03",
    type: "quest",
    position: { x: -120, y: -235 },
    data: {
      title:
        "[Getting Up to Speed on Bio](https://openlearninglibrary.mit.edu/courses/course-v1:OCW+Pre-7.01+1T2020/course/)",
      byLine: "Lectures 1-3 @ MIT Opencourseware",
      variant: "course",
    },
  },
  {
    id: "start-10",
    type: "section",
    position: { x: -120, y: -60 },
    data: {
      title: "Biological Machines",
      byLine: "Intro Experiments Pt.1",
    },
  },
  {
    id: "start-20",
    type: "section",
    position: { x: 175, y: -60 },
    data: {
      title: "Biological Materials",
      byLine: "Intro Experiments Pt.2",
    },
  },
  {
    id: "start-01",
    type: "quest",
    position: { x: 160, y: 40 },
    data: {
      title:
        "[Bio-Plastic Membership Card](https://www.notion.so/BQ-00-Bio-Plastic-Member-Card-d41d6259d586492fa3a7c9d880367099?pvs=4)",
      byLine: "(Deli Potatoes + Homemade Glycerol)",
    },
  },
  // {
  //   id: "resource-02",
  //   type: "quest",
  //   position: { x: -220, y: 0 },
  //   data: {
  //     title:
  //       "[Green Fluorescent Protein(GFP)](https://www.youtube.com/watch?v=d-gUPSVX25U)",
  //     byLine: "What is this thing?",
  //     variant: "course",
  //   },
  // },
  {
    id: "resource-04",
    type: "quest",
    position: { x: 140, y: 120 },
    data: {
      title:
        "[Fundamentals of Materials Structure](https://openlearninglibrary.mit.edu/courses/course-v1:MITx+3.012S.1x+1T2019/course/)",
      byLine: "Unit 1 @ MIT Opencourseware",
      variant: "course",
    },
  },
  {
    id: "start-02",
    type: "quest",
    position: { x: -170, y: 40 },
    data: {
      title:
        "[Transform Bacteria to Glow Green](https://www.notion.so/Bio-Quest-1-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80)",
      byLine: "(Inserting GFP DNA)",
    },
  },
  {
    id: "start-03",
    type: "quest",
    position: { x: -165, y: 130 },
    data: {
      title:
        "[Using Bacteria as Bio-Factories](https://www.notion.so/Bio-Quest-2-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611)",
      byLine: "(Replicating & Harvesting GFP DNA)",
    },
  },
  {
    id: "start-30",
    type: "section",
    position: { x: 20, y: 240 },
    data: {
      title: "Community Experiments",
      byLine: "Dig Deeper",
    },
  },
  // --- plant evolution
  {
    id: "resource-05",
    type: "quest",
    position: { x: -540, y: 250 },
    data: {
      title:
        "[Plant Structures](https://www.enrole.com/nybg/jsp/course.jsp?courseId=204BOT315O&categoryId=ROOT)",
      byLine: "@ NY Botanical Gardens (Online)",
      variant: "course",
    },
  },
  {
    id: "plantEvolution-00",
    type: "section",
    position: { x: -480, y: 435 },
    data: {
      title: "Botanical Pharmacy",
      byLine:
        "ft. [Open Plant @ Genspace](https://www.genspace.org/community-projects)",
    },
  },
  // {
  //   id: "plantEvolution-01",
  //   type: "quest",
  //   position: { x: -600, y: 530 },
  //   data: {
  //     title: "Growing Marchantia on Soil",
  //     byLine: "(From Thallus to Spores/Gemmae)",
  //   },
  // },
  {
    id: "plantEvolution-02",
    type: "quest",
    position: { x: -530, y: 530 },
    data: {
      title:
        "[Growing Marchantia Made Easy](https://www.notion.so/BQ-03-Marchantia-Growing-Propagating-a12fc5a6694843c288961d1637a93e6b?pvs=4)",
      byLine: "(From Thallus Cliipings or Gemmae)",
    },
  },
  {
    id: "plantEvolution-03",
    type: "quest",
    position: { x: -390, y: 605 },
    data: {
      title: "[Backing Up Plant Lines]()",
      byLine: "(Storing Plants in a Fridge)",
    },
  },
  {
    id: "plantEvolution-04",
    type: "quest",
    position: { x: -630, y: 680 },
    data: {
      title:
        "[Smartphone Florescence Microscope](https://www.nature.com/articles/s41598-023-29182-y)",
      byLine: "($50 + Smartphone)",
      variant: "course",
    },
  },
  {
    id: "plantEvolution-05",
    type: "quest",
    position: { x: -540, y: 755 },
    data: {
      title:
        "[Genetically Modifying Marchantia](https://www.notion.so/BQ-04-Genetically-Modifying-Marchantia-to-be-Purple-Spore-Transformation-using-Aggrobactereum-a030bde32c0f4dd3ac5ab660b332156c?pvs=4)",
      byLine: "(Plant Cell/Tissue Transformation)",
    },
  },
  {
    id: "plantEvolution-10",
    type: "section",
    position: { x: -870, y: 420 },
    data: { title: "Plant Growth Hacking" },
  },
  {
    id: "plantEvolution-11",
    type: "quest",
    position: { x: -1020, y: 475 },
    data: { title: "Speed Breeding Cabinet" },
  },
  {
    id: "plantEvolution-12",
    type: "quest",
    position: { x: -915, y: 540 },
    data: { title: "Repressive Gene Knockout", byLine: "(w/ CRISPR)" },
  },
  {
    id: "plantEvolution-13",
    type: "quest",
    position: { x: -770, y: 495 },
    data: { title: "Polyploiding" },
  },
  {
    id: "plantEvolution-20",
    type: "section",
    position: { x: -525, y: 840 },
    data: {
      title: "Growing Chemicals via Plants",
      byLine: "(Gene Transfer w/ Agrobacterium)",
    },
  },
  {
    id: "plantEvolution-21",
    type: "quest",
    position: { x: -575, y: 940 },
    data: { title: "Insulin", byLine: "TODO" },
  },
  {
    id: "plantEvolution-22",
    type: "quest",
    position: { x: -470, y: 950 },
    data: { title: "Testosterone", byLine: "TODO" },
  },
  {
    id: "plantEvolution-23",
    type: "quest",
    position: { x: -330, y: 940 },
    data: { title: "Estrogen", byLine: "TODO" },
  },
  {
    id: "plantEvolution-30",
    type: "section",
    position: { x: -515, y: 1040 },
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
    position: { x: -135, y: 620 },
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
    position: { x: 85, y: 555 },
    data: {
      title: "Soil Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-12",
    type: "quest",
    position: { x: 275, y: 555 },
    data: {
      title: "Water Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  // {
  //   id: "envJustice-13",
  //   type: "quest",
  //   position: { x: 180, y: 615 },
  //   data: {
  //     title: "Air Sampling",
  //     byLine: "(Collection & Analysis)",
  //   },
  // },
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
      title: "Microbe-Brewery Crew",
      byLine: "Cellular Fermentation of Chemicals & Food",
    },
  },
  {
    id: "bioPigments-01",
    type: "quest",
    position: { x: 500, y: 500 },
    data: {
      title: "[DIY Bio-Reactor: Pio-Reactors](https://pioreactor.com/)",
      byLine: "Don't build your own bio-reactor (yet)",
      variant: "course",
    },
  },
  {
    id: "bioPigments-02",
    type: "quest",
    position: { x: 640, y: 570 },
    data: {
      title: "[Brewing a Simple Protein]()",
      byLine: "Automating Yeast Growth + GFP Florescence",
    },
  },
  {
    id: "bioPigments-10",
    type: "section",
    position: { x: 470, y: 680 },
    data: {
      title: "Edible Protein Production",
      byLine: "Proteins Produced w/ Yeast",
    },
  },
  {
    id: "bioPigments-20",
    type: "section",
    position: { x: 760, y: 680 },
    data: {
      title: "Bio-based Haber-Bosch",
      byLine: "Eznymes Produced w/ Bacteria",
    },
  },
  {
    id: "bioPigments-30",
    type: "section",
    position: { x: 1020, y: 680 },
    data: {
      title: "Bacteria-based Jet Fuel",
      byLine:
        "Produced w/ Bacteria. [Seriously](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6195743/).",
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
    target: "resource-01",
    className: "ugc-edge",
  },
  {
    source: "resource-00",
    target: "resource-01",
  },
  {
    source: "start-20",
    target: "start-01",
    className: "ugc-edge",
  },
  {
    source: "resource-02",
    target: "start-02",
  },
  {
    source: "resource-03",
    target: "resource-01",
  },
  {
    source: "resource-01",
    target: "start-10",
    className: "ugc-edge",
  },
  {
    source: "start-10",
    target: "start-02",
    className: "ugc-edge",
  },
  {
    source: "resource-01",
    target: "start-20",
    className: "ugc-edge",
  },
  {
    source: "start-01",
    target: "resource-04",
  },
  {
    source: "start-01",
    target: "start-30",
  },
  {
    source: "start-02",
    target: "start-03",
  },
  {
    source: "start-03",
    target: "start-30",
  },
  // --- start ->>>> section headers
  {
    source: "start-30",
    target: "plantEvolution-00",
  },
  {
    source: "start-30",
    target: "envJustice-00",
  },
  {
    source: "start-30",
    target: "bioPigments-00",
  },
  // --- plant evol
  {
    source: "resource-05",
    target: "plantEvolution-00",
  },
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
    source: "plantEvolution-02",
    target: "plantEvolution-05",
  },
  {
    source: "plantEvolution-04",
    target: "plantEvolution-05",
  },
  {
    source: "start-30",
    target: "plantEvolution-10",
  },
  {
    source: "plantEvolution-05",
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
    target: "bioPigments-02",
  },
  {
    source: "bioPigments-01",
    target: "bioPigments-02",
  },
  {
    source: "bioPigments-02",
    target: "bioPigments-10",
  },
  {
    source: "bioPigments-02",
    target: "bioPigments-20",
  },
  {
    source: "bioPigments-02",
    target: "bioPigments-30",
  },
].map((e) => ({
  ...e,
  id: `e--${e.source}--${e.target}`,
  // @ts-ignore
  className:
    e.className != null
      ? e.className
      : e.source?.includes("resource") || e.target?.includes("resource")
      ? "ugc-edge--resource"
      : "ugc-edge",
}));
