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
    position: { x: -85, y: -370 },
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
      link: "https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/video_galleries/lecture-videos/",
    },
  },
  {
    id: "resource-01",
    type: "quest",
    position: { x: 30, y: -200 },
    data: {
      title: "[Bio-Hacker Bootcamp](https://www.genspace.org/classes)",
      byLine: "[@ Genspace](https://www.genspace.org)",
      link: "https://www.genspace.org/classes",
    },
  },
  {
    id: "resource-03",
    type: "quest",
    position: { x: -140, y: -285 },
    data: {
      title:
        "[Getting Up to Speed on Bio](https://www.youtube.com/playlist?list=PLUl4u3cNGP629Egng0HfgRJfXBNTPw1le)",
      byLine:
        "Lectures 1-3 @ [MIT Opencourseware](https://openlearninglibrary.mit.edu/courses/course-v1:OCW+Pre-7.01+1T2020/course/)",
      variant: "course",
      link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP629Egng0HfgRJfXBNTPw1le",
    },
  },
  {
    id: "start-10",
    type: "section",
    position: { x: -220, y: -110 },
    data: {
      title: "Biological Machines",
      byLine: "Intro Experiments Pt.1",
    },
  },
  {
    id: "start-20",
    type: "section",
    position: { x: 50, y: -110 },
    data: {
      title: "Biological Materials",
      byLine: "Intro Experiments Pt.2",
    },
  },
  {
    id: "hardware-00",
    type: "quest",
    position: { x: 30, y: -25 },
    data: {
      title:
        "[3D Printing Crash Course](https://undergroundgardenclub.notion.site/TQ-00-3D-Mold-Modeling-Printing-1e3dafc3be414c54ab6eb16deb730541?pvs=4)",
      byLine: "Setup and Overview of How to Print",
      // variant: "hardware",
      link: "https://undergroundgardenclub.notion.site/TQ-00-3D-Mold-Modeling-Printing-1e3dafc3be414c54ab6eb16deb730541?pvs=4",
    },
  },
  {
    id: "start-01",
    type: "quest",
    position: { x: 10, y: 60 },
    data: {
      title:
        "[Bio-Plastic Membership Card](https://undergroundgardenclub.notion.site/BQ-00-Bio-Plastic-Member-Card-d41d6259d586492fa3a7c9d880367099?pvs=4)",
      byLine: "(Deli Potatoes + Homemade Glycerol)",
      link: "https://undergroundgardenclub.notion.site/BQ-00-Bio-Plastic-Member-Card-d41d6259d586492fa3a7c9d880367099?pvs=4",
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
    position: { x: 0, y: 140 },
    data: {
      title:
        "[Fundamentals of Materials Structure](https://openlearninglibrary.mit.edu/courses/course-v1:MITx+3.012S.1x+1T2019/course/)",
      byLine: "Unit 1 @ MIT Opencourseware",
      variant: "course",
      link: "https://openlearninglibrary.mit.edu/courses/course-v1:MITx+3.012S.1x+1T2019/course/",
    },
  },
  {
    id: "start-02",
    type: "quest",
    position: { x: -320, y: -10 },
    data: {
      title:
        "[Transform Bacteria to Glow Green](https://undergroundgardenclub.notion.site/BQ-01-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80?pvs=4)",
      byLine: "(Inserting GFP DNA)",
      link: "https://undergroundgardenclub.notion.site/BQ-01-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80?pvs=4",
    },
  },
  {
    id: "start-03",
    type: "quest",
    position: { x: -315, y: 80 },
    data: {
      title:
        "[Using Bacteria as Bio-Factories](https://undergroundgardenclub.notion.site/BQ-02-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611?pvs=4)",
      byLine: "(Replicating & Harvesting GFP DNA)",
      link: "https://undergroundgardenclub.notion.site/BQ-02-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611?pvs=4",
    },
  },
  {
    id: "start-30",
    type: "section",
    position: { x: 300, y: -110 },
    data: {
      title: "Tools for Transformation",
      byLine: "Intro Experiments Pt.3",
    },
  },
  {
    id: "hardware-01",
    type: "quest",
    position: { x: 360, y: -15 },
    data: {
      title: "[Siri + GPT4](https://github.com/Yue-Yang/ChatGPT-Siri)",
      byLine: "Audio-Based AI Assistance",
      link: "https://github.com/Yue-Yang/ChatGPT-Siri",
    },
  },
  {
    id: "hardware-02",
    type: "quest",
    position: { x: 330, y: 70 },
    data: {
      title:
        "[Smartphone Florescence Microscope](https://undergroundgardenclub.notion.site/TQ-01-DIY-Florescence-Microscopy-827063aa9b7f456b8764c5c2c3af3fd4?pvs=4)",
      byLine: "$50 + Smartphone > $5,000+ microscope",
      // variant: "hardware",
      link: "https://undergroundgardenclub.notion.site/TQ-01-DIY-Florescence-Microscopy-827063aa9b7f456b8764c5c2c3af3fd4?pvs=4",
    },
  },
  {
    id: "communityIntro-00",
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
    position: { x: -270, y: 250 },
    data: {
      title:
        "[Plant Structures](https://www.enrole.com/nybg/jsp/course.jsp?courseId=204BOT315O&categoryId=ROOT)",
      byLine: "@ NY Botanical Gardens (Online)",
      variant: "course",
      link: "https://www.enrole.com/nybg/jsp/course.jsp?courseId=204BOT315O&categoryId=ROOT",
    },
  },
  {
    id: "resource-06",
    type: "quest",
    position: { x: -630, y: 270 },
    data: {
      title:
        "[Soil Science 1: Physical Properties](https://www.enrole.com/nybg/jsp/course.jsp?courseId=154HRT301&categoryId=10109)",
      byLine: "@ NY Botanical Gardens (Online)",
      variant: "course",
      link: "https://www.enrole.com/nybg/jsp/course.jsp?courseId=154HRT301&categoryId=10109",
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
  {
    id: "botanicalPharm-02",
    type: "quest",
    position: { x: -10, y: 460 },
    data: {
      title:
        "[Growing Marchantia Made Easy](https://undergroundgardenclub.notion.site/BQ-03-Marchantia-Growing-Propagating-in-Sterile-Containers-a12fc5a6694843c288961d1637a93e6b?pvs=4)",
      byLine: "(From Thallus Cliipings or Gemmae)",
      link: "https://undergroundgardenclub.notion.site/BQ-03-Marchantia-Growing-Propagating-in-Sterile-Containers-a12fc5a6694843c288961d1637a93e6b?pvs=4",
    },
  },
  {
    id: "botanicalPharm-03",
    type: "quest",
    position: { x: -10, y: 535 },
    data: {
      title: "[Backing Up Plant Species]()",
      byLine: "AKA Storing Plants in a Freezer",
    },
  },
  {
    id: "botanicalPharm-40",
    type: "section",
    position: { x: -40, y: 610 },
    data: {
      title: "Genetically Editing Marchantia to be Red",
      byLine: "Pt.1 of Gene Editing w/ Agrobacterium",
    },
  },
  {
    id: "botanicalPharm-41",
    type: "quest",
    position: { x: -70, y: 690 },
    data: {
      title:
        "[Designing DNA Parts for Gene Editing Plasmid](https://undergroundgardenclub.notion.site/BQ-04-Designing-DNA-Plasmids-for-Gene-Editing-Bacteria-to-Carry-a220e3af73454d43b1c33b790a478a82?pvs=4)",
      byLine: "Chosing a plasmid, genes, and signaling DNA strands",
      link: "https://undergroundgardenclub.notion.site/BQ-04-Designing-DNA-Plasmids-for-Gene-Editing-Bacteria-to-Carry-a220e3af73454d43b1c33b790a478a82?pvs=4",
    },
  },
  {
    id: "botanicalPharm-42",
    type: "quest",
    position: { x: -90, y: 760 },
    data: {
      title:
        "[Building the Gene Editing Plasmid from DNA Fragments](https://undergroundgardenclub.notion.site/BQ-05-Constructing-DNA-Plasmid-from-DNA-Fragments-for-Gene-Editing-Bacteria-to-Carry-ae091cc26fe3491d8f3638992eb38ca6?pvs=4)",
      byLine:
        "Processes for Combinging DNA Fragments (PCR, Restriction Digest)",
      link: "https://undergroundgardenclub.notion.site/BQ-05-Constructing-DNA-Plasmid-from-DNA-Fragments-for-Gene-Editing-Bacteria-to-Carry-ae091cc26fe3491d8f3638992eb38ca6?pvs=4",
    },
  },
  {
    id: "botanicalPharm-43",
    type: "quest",
    position: { x: -225, y: 855 },
    data: {
      title:
        "[GMO'ing Marchantia: via Spores](https://undergroundgardenclub.notion.site/BQ-06-Option-1-Infecting-Marchantia-with-Gene-Editing-Bacteria-Via-Spores-a030bde32c0f4dd3ac5ab660b332156c?pvs=4)",
      byLine: "Agrobacteria horizontal gene transfer in plant spores",
      // link: "https://undergroundgardenclub.notion.site/BQ-06-Option-1-Infecting-Marchantia-with-Gene-Editing-Bacteria-Via-Spores-a030bde32c0f4dd3ac5ab660b332156c?pvs=4",
    },
  },
  {
    id: "botanicalPharm-44",
    type: "quest",
    position: { x: 135, y: 855 },
    data: {
      title:
        "[GMO'ing Marchantia: via Thallus](https://undergroundgardenclub.notion.site/BQ-06-Option-2-Infecting-Marchantia-with-Gene-Editing-Bacteria-Via-Thallus-cc9adcad905a41439853650cc53b9f3e?pvs=4)",
      byLine: "Agrobacteria horizontal gene transfer in plant clippings",
      // link: "https://undergroundgardenclub.notion.site/BQ-06-Option-2-Infecting-Marchantia-with-Gene-Editing-Bacteria-Via-Thallus-cc9adcad905a41439853650cc53b9f3e?pvs=4",
    },
  },
  {
    id: "botanicalPharm-50",
    type: "section",
    position: { x: -35, y: 950 },
    data: {
      title: "Home Grown Medicine with Marchantia",
      byLine: "Pt.2 of Gene Editing w/ Agrobacterium",
    },
  },
  {
    id: "botanicalPharm-51",
    type: "quest",
    position: { x: -205, y: 1040 },
    data: { title: "Medical-Grade Insulin", byLine: "TODO" },
  },
  {
    id: "botanicalPharm-52",
    type: "quest",
    position: { x: 0, y: 1050 },
    data: { title: "Medical-Grade Testosterone", byLine: "TODO" },
  },
  {
    id: "botanicalPharm-53",
    type: "quest",
    position: { x: 230, y: 1040 },
    data: { title: "Medical-Grade Estrogen", byLine: "TODO" },
  },
  {
    id: "botanicalPharm-30",
    type: "section",
    position: { x: 10, y: 1140 },
    data: { title: "Processing for Human Use", byLine: "TODO" },
  },
  // -- glowing houseplants
  {
    id: "glowingPlants-00",
    type: "section",
    position: { x: 300, y: 410 },
    data: {
      title: "Next Up",
      byLine: "GMO'ing with Synthetic Luciferin",
    },
  },
  // {
  //   id: "glowingPlants-00",
  //   type: "section",
  //   position: { x: 300, y: 410 },
  //   data: {
  //     title: "Glowing Houseplants",
  //     byLine: "GMO'ing with Synthetic Luciferin",
  //   },
  // },
  // -- plant growth hacking
  {
    id: "plantGrowth-10",
    type: "section",
    position: { x: -320, y: 420 },
    data: { title: "Next Up", byLine: "GMO'ing Massive Mutant Plants" },
  },
  // {
  //   id: "plantGrowth-11",
  //   type: "quest",
  //   position: { x: -420, y: 475 },
  //   data: {
  //     title:
  //       "[Speed Breeding Cabinet](https://www.biorxiv.org/content/10.1101/369512v1.full.pdf)",
  //     byLine: "(Ft. John Innes Institute)",
  //   },
  // },
  // {
  //   id: "plantGrowth-12",
  //   type: "quest",
  //   position: { x: -315, y: 540 },
  //   data: { title: "Repressive Gene Knockout", byLine: "(w/ CRISPR)" },
  // },
  // {
  //   id: "plantGrowth-13",
  //   type: "quest",
  //   position: { x: -170, y: 495 },
  //   data: { title: "Polyploiding" },
  // },
  // // --- conspeicious consumption
  // {
  //   id: "consciousConsumption-00",
  //   type: "section",
  //   position: { x: -840, y: 60 },
  //   data: {
  //     title: "Food Justice",
  //     byLine: "Intro Experiments Pt.3",
  //   },
  // },
  // {
  //   id: "consciousConsumption-10",
  //   type: "quest",
  //   position: { x: -1020, y: 140 },
  //   data: {
  //     title: "Checking Food Quality",
  //     byLine: "Nutritional Density W/ Refractometers",
  //   },
  // },
  // {
  //   id: "consciousConsumption-11",
  //   type: "quest",
  //   position: { x: -750, y: 140 },
  //   data: {
  //     title: "Kitchen Herb Gardening",
  //     byLine: "Intro to Indoor Plant Cultivation",
  //   },
  // },
  // --- food justice
  {
    id: "foodJustice-00",
    type: "section",
    position: { x: -600, y: 420 },
    data: {
      title: "Food Justice",
    },
  },
  {
    id: "foodJustice-01",
    type: "quest",
    position: { x: -620, y: 490 },
    data: {
      title: "Food Nutrition Densitiy",
      byLine: "Measuring with Refactometers",
    },
  },
  // --- env monitoring + litigation
  {
    id: "envJustice-00",
    type: "section",
    position: { x: -630, y: 580 },
    data: {
      title: "Environmental Justice",
      // byLine:
      //   "ft. [Soverign Science](https://www.instagram.com/sovereign.science/)",
    },
  },
  {
    id: "envJustice-01",
    type: "quest",
    position: { x: -785, y: 680 },
    data: {
      title: "Environmental Data Stewardship",
      byLine: "Coming Soon",
    },
  },
  {
    id: "envJustice-10",
    type: "section",
    position: { x: -475, y: 690 },
    data: {
      title: "Sampling",
    },
  },
  {
    id: "envJustice-11",
    type: "quest",
    position: { x: -585, y: 755 },
    data: {
      title: "Soil Sampling",
      byLine: "Coming Soon",
    },
  },
  {
    id: "envJustice-12",
    type: "quest",
    position: { x: -415, y: 755 },
    data: {
      title: "Water Sampling",
      byLine: "Coming Soon",
    },
  },
  {
    id: "envJustice-13",
    type: "quest",
    position: { x: -510, y: 820 },
    data: {
      title: "Air Sampling",
      byLine: "Coming Soon",
    },
  },
  {
    id: "envJustice-20",
    type: "section",
    position: { x: -665, y: 915 },
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
    position: { x: 530, y: 470 },
    data: {
      title: "[Starter Bio-Reactor = Pio-Reactors](https://pioreactor.com/)",
      byLine: "Don't build your own bio-reactor (yet)",
      variant: "course",
    },
  },
  {
    id: "bioFerm-02",
    type: "quest",
    position: { x: 580, y: 550 },
    data: {
      title: "[Brewing a Simple Protein]()",
      byLine: "Automating Yeast Growth + GFP Florescence",
    },
  },
  {
    id: "bioFerm-M1",
    type: "section",
    position: { x: 1060, y: 670 },
    data: {
      title: "Bio-based Haber-Bosch",
      byLine: "Eznymes Produced w/ Bacteria",
    },
  },
  {
    id: "bioFerm-M2",
    type: "section",
    position: { x: 930, y: 730 },
    data: {
      title: "Bacteria-based Jet Fuel",
      byLine:
        "Produced w/ Bacteria. [Seriously](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6195743/).",
    },
  },
  {
    id: "bioFerm-M3", // --- TODO: engineering spider silk
    type: "section",
    position: { x: 860, y: 660 },
    data: {
      title: "Spider Silk via Yeast",
      byLine:
        "ft. [Open Plant @ Genspace](https://www.genspace.org/community-projects)",
    },
  },
  {
    id: "bioFerm-10",
    type: "section",
    position: { x: 600, y: 640 },
    data: {
      title: "Edible Protein Production",
      byLine: "Proteins Produced w/ Yeast",
    },
  },
  {
    id: "bioFerm-20",
    type: "section",
    position: { x: 600, y: 820 },
    data: {
      title: "Massive Edible Protein Production",
      byLine: "Turning 55 Gallon Oil Drums into Bio-Reactors",
    },
  },
  // --- bioProspecting
  // {
  //   id: "bioProspecting-00",
  //   type: "section",
  //   position: { x: 1040, y: 50 },
  //   data: {
  //     title: "Finding and Using Exceptional Microbes",
  //     byLine:
  //       "[Ft. Two Frontiers Project](https://github.com/two-frontiers-project/fieldwork-tools)",
  //   },
  // },
  {
    id: "resource-07",
    type: "quest",
    position: { x: 440, y: 250 },
    data: {
      title:
        "[Bio-Prospecting v. Bio-Piracy](https://e360.yale.edu/features/indigenous-maize-who-owns-the-rights-to-mexicos-wonder-plant)",
      byLine: "Who Owns the Rights to Mexico’s ‘Wonder’ Plant?",
      variant: "course",
      link: "https://e360.yale.edu/features/indigenous-maize-who-owns-the-rights-to-mexicos-wonder-plant",
    },
  },
  // {
  //   id: "bioProspecting-10",
  //   type: "quest",
  //   position: { x: 920, y: 140 },
  //   data: {
  //     title:
  //       "Bioluminescent [Fox Fire](https://en.wikipedia.org/wiki/Foxfire) Fungi",
  //     byLine: "[Ft. Fungi For the People](https://fungiforthepeople.org/)",
  //   },
  // },
  // {
  //   id: "bioProspecting-20",
  //   type: "quest",
  //   position: { x: 1220, y: 140 },
  //   data: {
  //     title: "Methane Eating Bacteria",
  //     byLine: "TODO",
  //   },
  // },
  // --- methane
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
    target: "hardware-00",
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
    source: "resource-01",
    target: "start-30",
    className: "ugc-edge",
  },
  {
    source: "start-01",
    target: "resource-04",
  },
  {
    source: "start-01",
    target: "communityIntro-00",
  },
  {
    source: "start-02",
    target: "start-03",
  },
  {
    source: "start-30",
    target: "hardware-01",
  },
  {
    source: "hardware-01",
    target: "hardware-02",
  },
  {
    source: "hardware-02",
    target: "communityIntro-00",
  },
  {
    source: "hardware-00",
    target: "start-01",
  },
  {
    source: "hardware-02",
    target: "botanicalPharm-40",
    className: "ugc-edge--dashed",
  },
  {
    source: "hardware-02",
    target: "bioFerm-02",
    className: "ugc-edge--dashed",
  },
  {
    source: "start-03",
    target: "communityIntro-00",
  },
  // --- start ->>>> section headers
  {
    source: "communityIntro-00",
    target: "botanicalPharm-00",
  },
  {
    source: "communityIntro-00",
    target: "foodJustice-00",
  },
  {
    source: "communityIntro-00",
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
    source: "communityIntro-00",
    target: "plantGrowth-10",
  },
  {
    source: "communityIntro-00",
    target: "glowingPlants-00",
  },
  {
    source: "botanicalPharm-42",
    target: "botanicalPharm-43",
  },
  {
    source: "botanicalPharm-42",
    target: "botanicalPharm-44",
  },
  {
    source: "botanicalPharm-43",
    target: "botanicalPharm-50",
  },
  {
    source: "botanicalPharm-44",
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
  // // --- conspeicious consumption
  // {
  //   source: "consciousConsumption-00",
  //   target: "consciousConsumption-10",
  // },
  // {
  //   source: "consciousConsumption-00",
  //   target: "consciousConsumption-11",
  // },
  // {
  //   source: "consciousConsumption-10",
  //   target: "envJustice-00",
  //   className: "ugc-edge--dashed",
  // },
  // {
  //   source: "consciousConsumption-11",
  //   target: "botanicalPharm-00",
  //   className: "ugc-edge--dashed",
  // },
  // --- food justice
  {
    source: "foodJustice-00",
    target: "foodJustice-01",
  },
  {
    source: "foodJustice-01",
    target: "envJustice-00",
  },
  // --- env justice
  {
    source: "resource-06",
    target: "envJustice-00",
  },
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
    target: "bioFerm-M1",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-M2",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-M3",
  },
  {
    source: "bioFerm-02",
    target: "bioFerm-10",
  },
  {
    source: "bioFerm-10",
    target: "bioFerm-20",
  },
  // bio-prospecting
  // {
  //   source: "bioProspecting-00",
  //   target: "bioProspecting-10",
  // },
  // {
  //   source: "bioProspecting-00",
  //   target: "bioProspecting-20",
  // },
  // {
  //   source: "bioProspecting-00",
  //   target: "resource-07",
  // },
  {
    source: "resource-07",
    target: "botanicalPharm-00",
    // className: "ugc-edge--dashed",
  },
  {
    source: "resource-07",
    target: "bioFerm-00",
    // className: "ugc-edge--dashed",
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
