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
    position: { x: -55, y: -370 },
    data: {},
  },
  {
    id: "resource-00",
    type: "quest",
    position: { x: 140, y: -285 },
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
    position: { x: 30, y: -200 },
    data: {
      title: "[Bio-Hacker Bootcamp](https://www.genspace.org/classes)",
      byLine: "@ Genspace",
    },
  },
  {
    id: "resource-03",
    type: "quest",
    position: { x: -120, y: -285 },
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
    position: { x: -120, y: -110 },
    data: {
      title: "Biological Machines",
      byLine: "Intro Experiments Pt.1",
    },
  },
  {
    id: "start-20",
    type: "section",
    position: { x: 175, y: -110 },
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
    position: { x: 200, y: 120 },
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
    position: { x: -170, y: -10 },
    data: {
      title:
        "[Transform Bacteria to Glow Green](https://www.notion.so/Bio-Quest-1-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80)",
      byLine: "(Inserting GFP DNA)",
    },
  },
  {
    id: "start-03",
    type: "quest",
    position: { x: -165, y: 80 },
    data: {
      title:
        "[Using Bacteria as Bio-Factories](https://www.notion.so/Bio-Quest-2-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611)",
      byLine: "(Replicating & Harvesting GFP DNA)",
    },
  },
  {
    id: "start-30",
    type: "section",
    position: { x: 20, y: 230 },
    data: {
      title: "Community Experiments",
      byLine: "Dig Deeper",
    },
  },
  // --- plant evolution
  {
    id: "resource-05",
    type: "quest",
    position: { x: -300, y: 250 },
    data: {
      title:
        "[Plant Structures](https://www.enrole.com/nybg/jsp/course.jsp?courseId=204BOT315O&categoryId=ROOT)",
      byLine: "@ NY Botanical Gardens (Online)",
      variant: "course",
    },
  },
  {
    id: "botanicalPharm-00",
    type: "section",
    position: { x: 20, y: 380 },
    data: {
      title: "Botanical Pharmacy",
      byLine:
        "ft. [Open Plant @ Genspace](https://www.genspace.org/community-projects)",
    },
  },
  // {
  //   id: "botanicalPharm-01",
  //   type: "quest",
  //   position: { x: -600, y: 530 },
  //   data: {
  //     title: "Growing Marchantia on Soil",
  //     byLine: "(From Thallus to Spores/Gemmae)",
  //   },
  // },
  {
    id: "botanicalPharm-02",
    type: "quest",
    position: { x: -10, y: 460 },
    data: {
      title:
        "[Growing Marchantia Made Easy](https://www.notion.so/BQ-03-Marchantia-Growing-Propagating-a12fc5a6694843c288961d1637a93e6b?pvs=4)",
      byLine: "(From Thallus Cliipings or Gemmae)",
    },
  },
  {
    id: "botanicalPharm-03",
    type: "quest",
    position: { x: 130, y: 535 },
    data: {
      title: "[Backing Up Plant Species]()",
      byLine: "AKA Storing Plants in a Freezer",
    },
  },
  {
    id: "botanicalPharm-40",
    type: "section",
    position: { x: -40, y: 600 },
    data: {
      title: "Genetically Editing Marchantia",
      byLine: "Turning it Red to know we edited it",
    },
  },
  {
    id: "botanicalPharm-41",
    type: "quest",
    position: { x: -70, y: 680 },
    data: {
      title: "[Constructing our Plasmid Backbone]()",
      byLine: "DNA construct we'll insert into plants holding extra genes",
    },
  },
  {
    id: "botanicalPharm-42",
    type: "quest",
    position: { x: -75, y: 755 },
    data: {
      title:
        "[Genetically Modifying Marchantia to be Red](https://www.notion.so/BQ-04-Genetically-Modifying-Marchantia-to-be-Purple-Spore-Transformation-using-Aggrobactereum-a030bde32c0f4dd3ac5ab660b332156c?pvs=4)",
      byLine: "Plant Cell/Tissue Transformation",
    },
  },
  {
    id: "botanicalPharm-50",
    type: "section",
    position: { x: -25, y: 840 },
    data: {
      title: "Growing Chemicals via Plants",
      byLine: "(Gene Transfer w/ Agrobacterium)",
    },
  },
  {
    id: "botanicalPharm-51",
    type: "quest",
    position: { x: -215, y: 940 },
    data: { title: "Medical-Grade Insulin", byLine: "TODO" },
  },
  {
    id: "botanicalPharm-52",
    type: "quest",
    position: { x: -20, y: 950 },
    data: { title: "Medical-Grade Testosterone", byLine: "TODO" },
  },
  {
    id: "botanicalPharm-53",
    type: "quest",
    position: { x: 220, y: 940 },
    data: { title: "Medical-Grade Estrogen", byLine: "TODO" },
  },
  {
    id: "botanicalPharm-30",
    type: "section",
    position: { x: 0, y: 1040 },
    data: { title: "Processing for Human Use", byLine: "TODO" },
  },
  {
    id: "plantGrowth-10",
    type: "section",
    position: { x: -870, y: 420 },
    data: { title: "Plant Growth Hacking" },
  },
  {
    id: "plantGrowth-11",
    type: "quest",
    position: { x: -1020, y: 475 },
    data: { title: "Speed Breeding Cabinet" },
  },
  {
    id: "plantGrowth-12",
    type: "quest",
    position: { x: -915, y: 540 },
    data: { title: "Repressive Gene Knockout", byLine: "(w/ CRISPR)" },
  },
  {
    id: "plantGrowth-13",
    type: "quest",
    position: { x: -770, y: 495 },
    data: { title: "Polyploiding" },
  },
  // --- env monitoring + litigation
  {
    id: "envJustice-00",
    type: "section",
    position: { x: -460, y: 420 },
    data: {
      title: "Environmental Justice",
      byLine:
        "ft. [Soverign Science](https://www.instagram.com/sovereign.science/)",
    },
  },
  {
    id: "envJustice-01",
    type: "quest",
    position: { x: -655, y: 620 },
    data: {
      title: "Environmental Data Stewardship",
      byLine: "(Currnet & Past)",
    },
  },
  {
    id: "envJustice-10",
    type: "section",
    position: { x: -305, y: 490 },
    data: {
      title: "Sampling",
    },
  },
  {
    id: "envJustice-11",
    type: "quest",
    position: { x: -435, y: 555 },
    data: {
      title: "Soil Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-12",
    type: "quest",
    position: { x: -245, y: 555 },
    data: {
      title: "Water Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-13",
    type: "quest",
    position: { x: -340, y: 620 },
    data: {
      title: "Air Sampling",
      byLine: "(Collection & Analysis)",
    },
  },
  {
    id: "envJustice-20",
    type: "section",
    position: { x: -495, y: 715 },
    data: {
      title: "Environmental Litigation 101",
      byLine: "(Case Building Strategy)",
    },
  },
  // --- fermentation production
  {
    id: "bioFerm-00",
    type: "section",
    position: { x: 620, y: 400 },
    data: {
      title: "Microbe-Brewery Crew",
      byLine: "Cellular Fermentation of Chemicals & Food",
    },
  },
  {
    id: "bioFerm-01",
    type: "quest",
    position: { x: 500, y: 500 },
    data: {
      title: "[Starter Bio-Reactor = Pio-Reactors](https://pioreactor.com/)",
      byLine: "Don't build your own bio-reactor (yet)",
      variant: "course",
    },
  },
  {
    id: "bioFerm-02",
    type: "quest",
    position: { x: 640, y: 570 },
    data: {
      title: "[Brewing a Simple Protein]()",
      byLine: "Automating Yeast Growth + GFP Florescence",
    },
  },
  {
    id: "bioFerm-10",
    type: "section",
    position: { x: 470, y: 680 },
    data: {
      title: "Edible Protein Production",
      byLine: "Proteins Produced w/ Yeast",
    },
  },
  {
    id: "bioFerm-40",
    type: "section",
    position: { x: 1260, y: 680 },
    data: {
      title: "Medical-Grade Insulin",
      byLine: "Proteins Produced w/ Yeast",
    },
  },
  {
    id: "bioFerm-20",
    type: "section",
    position: { x: 1460, y: 680 },
    data: {
      title: "Bio-based Haber-Bosch",
      byLine: "Eznymes Produced w/ Bacteria",
    },
  },
  {
    id: "bioFerm-30",
    type: "section",
    position: { x: 1020, y: 680 },
    data: {
      title: "Bacteria-based Jet Fuel",
      byLine:
        "Produced w/ Bacteria. [Seriously](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6195743/).",
    },
  },
  // --- TODO: engineering spider silk
  {
    id: "bioFerm-50",
    type: "section",
    position: { x: 760, y: 680 },
    data: {
      title: "Spider Silk via Yeast",
      byLine:
        "ft. [Open Plant @ Genspace](https://www.genspace.org/community-projects)",
    },
  },
  // --- hardware
  {
    id: "hardware-00",
    type: "quest",
    position: { x: 290, y: -35 },
    data: {
      title:
        "[3D Printing Crash Course](https://www.notion.so/SH-00-3D-Mold-Modeling-Printing-1e3dafc3be414c54ab6eb16deb730541?pvs=4)",
      byLine: "Setup and Overview of How to Print",
      variant: "hardware",
    },
  },
  {
    id: "hardware-01",
    type: "quest",
    position: { x: 320, y: 250 },
    data: {
      title:
        "[Smartphone Florescence Microscope](https://www.notion.so/HQ-01-DIY-Florescence-Microscopy-827063aa9b7f456b8764c5c2c3af3fd4?pvs=4)",
      byLine: "$50 + Smartphone > $5,000+ microscope",
      variant: "hardware",
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
    source: "hardware-00",
    target: "start-01",
    className: "ugc-edge--hardware",
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
    target: "botanicalPharm-00",
  },
  {
    source: "start-30",
    target: "envJustice-00",
  },
  {
    source: "start-30",
    target: "bioFerm-00",
  },
  // --- plant evol
  {
    source: "resource-05",
    target: "botanicalPharm-00",
  },
  {
    source: "botanicalPharm-00",
    target: "botanicalPharm-01",
  },
  {
    source: "botanicalPharm-00",
    target: "botanicalPharm-02",
  },
  {
    source: "botanicalPharm-01",
    target: "botanicalPharm-03",
  },
  {
    source: "botanicalPharm-02",
    target: "botanicalPharm-03",
  },
  {
    source: "botanicalPharm-02",
    target: "botanicalPharm-40",
  },
  {
    source: "botanicalPharm-40",
    target: "botanicalPharm-41",
  },
  {
    source: "botanicalPharm-41",
    target: "botanicalPharm-42",
  },
  {
    source: "start-02",
    target: "hardware-01",
    className: "ugc-edge--hardware",
  },
  {
    source: "hardware-01",
    target: "botanicalPharm-50",
    className: "ugc-edge--hardware",
  },
  {
    source: "hardware-01",
    target: "bioFerm-02",
    className: "ugc-edge--hardware",
  },
  {
    source: "start-30",
    target: "plantGrowth-10",
  },
  {
    source: "botanicalPharm-42",
    target: "botanicalPharm-50",
  },
  {
    source: "plantGrowth-10",
    target: "plantGrowth-11",
  },
  {
    source: "plantGrowth-10",
    target: "plantGrowth-12",
  },
  {
    source: "plantGrowth-10",
    target: "plantGrowth-13",
  },
  {
    source: "botanicalPharm-50",
    target: "botanicalPharm-51",
  },
  {
    source: "botanicalPharm-50",
    target: "botanicalPharm-52",
  },
  {
    source: "botanicalPharm-50",
    target: "botanicalPharm-53",
  },
  {
    source: "botanicalPharm-51",
    target: "botanicalPharm-30",
  },
  {
    source: "botanicalPharm-52",
    target: "botanicalPharm-30",
  },
  {
    source: "botanicalPharm-53",
    target: "botanicalPharm-30",
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
    source: "bioFerm-00",
    target: "bioFerm-02",
  },
  {
    source: "bioFerm-01",
    target: "bioFerm-02",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-10",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-20",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-30",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-40",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-50",
  },
].map((e) => ({
  ...e,
  id: `e--${e.source}--${e.target}`,
  // @ts-ignore
  className:
    e.className != null
      ? e.className
      : e.source?.includes("resource") || e.target?.includes("resource")
      ? "ugc-edge--course"
      : "ugc-edge",
}));
