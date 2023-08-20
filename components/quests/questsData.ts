import { Edge, Node } from "reactflow";

type TNodeDataExtras = {
  data: { title?: string; byLine?: string; variant?: string };
};

// ===============================
// NODES
// ===============================
export const questNodes: (Node & TNodeDataExtras)[] = [
  // --- welcome content/ideas
  {
    id: "welcome-00",
    type: "start",
    position: { x: -83, y: -1379 },
    data: {
      title:
        "WELCOME TO THE [⚘ UNDERGROUND GARDEN CLUB ⚘](https://undergroundgarden.club)",
      byLine: "Choose a Path, Start Experimenting, Reinvent Yourself",
      minWidth: "440px;",
    },
  },
  {
    id: "welcomePaths-10",
    type: "section",
    position: { x: -616, y: -1117 },
    data: {
      title: "Microbe-based Proteins",
      byLine: "Alternatives to Plant & Animal Proteins",
    },
  },
  {
    id: "welcomePaths-11",
    type: "quest",
    position: { x: -660, y: -824 },
    data: {
      title:
        "[Gyser Microbes that Make Edible Protein](https://www.naturesfynd.com/yellowstone)",
      link: "https://www.naturesfynd.com/yellowstone",
      padding: false,
      thumbnailAlt: "Yellowstone National Park Gyser",
      thumbnailUrl: "/naturefynd.jpg",
      variant: "course",
      videoUrl: "https://www.youtube.com/watch?v=sodONlWRiE0",
    },
  },
  {
    id: "welcomePaths-12",
    type: "quest",
    position: { x: -656, y: -1028 },
    data: {
      title: "[Fungi Flour for Protein Rich Bread](https://hyfe.tech/)",
      link: "https://hyfe.tech/",
      padding: false,
      thumbnailAlt: "Hyfe Foods Cofounders",
      thumbnailUrl: "/hyfefoods.jpeg",
      variant: "course",
      videoUrl: "https://www.youtube.com/watch?v=Qv-4bUTi3js&t=1005s",
    },
  },
  {
    id: "welcomePaths-20",
    type: "section",
    position: { x: -299, y: -1142 },
    data: {
      title: "Plant Anatomy Engineering",
      byLine: "Drought Resistance to Capturing Carbon",
    },
  },
  {
    id: "welcomePaths-21",
    type: "quest",
    position: { x: -309, y: -845 },
    data: {
      title:
        "[Helping Plants Survive Droughts](https://www.youtube.com/watch?v=tAG3VRV-sY0&t=130s)",
      byLine: "Ft. Prof. Jenn Brophy",
      link: "https://www.youtube.com/watch?v=tAG3VRV-sY0&t=130s",
      padding: false,
      variant: "course",
      videoUrl: "https://www.youtube.com/watch?v=tAG3VRV-sY0&t=130s",
    },
  },
  {
    id: "welcomePaths-22",
    type: "quest",
    position: { x: -335, y: -1056 },
    data: {
      title:
        "[Enhanced CO2 Capturing Trees](https://www.youtube.com/watch?v=6OknnFuDQE8)",
      link: "https://www.youtube.com/watch?v=6OknnFuDQE8",
      padding: false,
      thumbnailAlt: "Living Carbon Cofounders",
      thumbnailUrl: "/livingcarbon3.jpg",
      variant: "course",
      videoUrl: "https://www.youtube.com/watch?v=6OknnFuDQE8",
    },
  },
  {
    id: "welcomePaths-30",
    type: "section",
    position: { x: 635, y: -1133 },

    data: {
      title: "Green House Gas Removal",
      byLine: "CO2, Methane (CH4), and NO2",
    },
  },
  {
    id: "welcomePaths-31",
    type: "quest",
    position: { x: 673, y: -1056 },

    data: {
      title:
        "[CO2 Mineralizing Bacteria in Crop Fields](https://youtu.be/Dw5pzPIG5es?t=238)",
      link: "https://youtu.be/Dw5pzPIG5es?t=238",
      padding: false,
      thumbnailAlt: "Aerial photo of farm",
      thumbnailUrl: "/andes.jpeg",
      variant: "course",
      videoUrl: "https://youtu.be/Dw5pzPIG5es?t=238",
    },
  },
  {
    id: "welcomePaths-32",
    type: "quest",
    position: { x: 692, y: -853 },
    data: {
      title:
        "[Atmospheric Methane Eating Bacteria](https://www.youtube.com/watch?v=k3KZDcpD9Bs)",
      byLine: "FYI LOTS OF WORK STILL TO BE DONE HERE",
      link: "https://www.youtube.com/watch?v=k3KZDcpD9Bs",
      padding: false,
      thumbnailAlt: "Photo of methanotrophs",
      thumbnailUrl: "/methanotrophs.png",
      variant: "course",
      videoUrl: "https://www.youtube.com/watch?v=k3KZDcpD9Bs",
    },
  },
  {
    id: "welcomePaths-40",
    type: "section",
    position: { x: 355, y: -1141 },
    data: {
      title: "Frontier Materials",
      byLine: "Rethinking Fashion and Function",
    },
  },
  {
    id: "welcomePaths-41",
    type: "quest",
    position: { x: 359, y: -1050 },
    data: {
      title:
        "[Bio-Luminescent Embelshiments](https://aradhitaparasrampuria.net/work-1/bioembellishments-298zt)",
      byLine:
        "Ft. [Aradhita Parasrampuria](https://aradhitaparasrampuria.net/work-1/bioembellishments-298zt)",
      link: "https://aradhitaparasrampuria.net/work-1/bioembellishments-298zt",
      padding: false,
      thumbnailAlt: "Photo of methanotrophs",
      thumbnailUrl: "/biobeads3.jpeg",
      variant: "course",
      // videoUrl:
      //   "https://aradhitaparasrampuria.net/work-1/bioembellishments-298zt",
    },
  },
  {
    id: "welcomePaths-42",
    type: "quest",
    position: { x: 338, y: -834 },
    data: {
      title:
        "[Affordable Caskets using Fungi/Mycellium](https://www.youtube.com/watch?v=AurhO4Lf1Is)",
      link: "https://www.youtube.com/watch?v=AurhO4Lf1Is",
      padding: false,
      thumbnailAlt: "Photo of mycellium casket",
      thumbnailUrl: "/loopbiotech.jpeg",
      variant: "course",
      videoUrl: "https://www.youtube.com/watch?v=AurhO4Lf1Is",
    },
  },
  {
    id: "welcomePaths-50",
    type: "section",
    position: { x: 5, y: -1135 },

    data: {
      title: "Environmental Stewardship & Healing",
      byLine: "Observing and Rejuvinating",
    },
  },
  {
    id: "welcomePaths-51",
    type: "quest",
    position: { x: 8, y: -1053 },

    data: {
      title:
        "[Soil, Air, and Water Stewardship](https://mediahub.unl.edu/media/19127)",
      byLine:
        "Ft. [Soverign Science](https://www.instagram.com/sovereign.science/)",
      link: "https://www.instagram.com/sovereign.science/",
      padding: false,
      thumbnailAlt: "Photo of water sample reading",
      thumbnailUrl: "/soverignscience.png",
      variant: "course",
      videoUrl:
        "https://mediahub.unl.edu/uploads/c6ce8a16-c0ed-11ec-85b2-005056832e99/media.mp4",
    },
  },
  {
    id: "welcomePaths-52",
    type: "quest",
    position: { x: 24, y: -833 },
    data: {
      title:
        "[Permaculture and Health](https://vimeo.com/ondemand/downthecarrothole)",
      byLine: "Ft. Down the Carrot Hole Documentary",
      link: "https://vimeo.com/ondemand/downthecarrothole",
      padding: false,
      thumbnailAlt: "Overhead photo of garden",
      thumbnailUrl: "/downthecarrothole.jpeg",
      variant: "course",
      videoUrl:
        "https://v2.kickstarter.com/1692300996-GyYtwQnXLGSk8PRooOoNXvcvFae%2BUxBZ9dsTmWLNxuY%3D/projects/4381903/video-1171035-hls_playlist.m3u8",
    },
  },

  // --- start experimenting
  {
    id: "start-00",
    type: "start",
    position: { x: -97, y: -529 },
    data: {
      title: "Start Experimenting Here",
      byLine: "Connect with Community and Grow Together",
      minWidth: "440px",
      variant: "joinClub",
    },
  },
  {
    id: "resource-00",
    type: "quest",
    position: { x: 151, y: -354 },
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
    position: { x: 21, y: -281 },
    data: {
      title: "[Bio-Hacker Bootcamp](https://www.genspace.org/classes)",
      byLine: "[@ Genspace](https://www.genspace.org)",
      link: "https://www.genspace.org/classes",
    },
  },
  {
    id: "resource-03",
    type: "quest",
    position: { x: -147, y: -356 },
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
    position: { x: -262, y: -185 },
    data: {
      title: "Biological Machines",
      byLine: "Intro Experiments Pt.1",
    },
  },
  {
    id: "start-20",
    type: "section",
    position: { x: 32, y: -194 },
    data: {
      title: "Biological Materials",
      byLine: "Intro Experiments Pt.2",
    },
  },
  {
    id: "hardware-00",
    type: "quest",
    position: { x: 7, y: -120 },
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
    position: { x: -15, y: 21 },
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
    position: { x: -28, y: -46 },
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
    position: { x: -334, y: -115 },
    data: {
      title:
        "[Transform Bacteria to Glow Green](https://undergroundgardenclub.notion.site/BQ-01-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80?pvs=4)",
      byLine: "Inserting GFP DNA",
      link: "https://undergroundgardenclub.notion.site/BQ-01-Transforming-E-Coli-to-Have-Plasmids-Containing-GFP-1039a40e1891435289dd4426fba93e80?pvs=4",
    },
  },
  {
    id: "start-03",
    type: "quest",
    position: { x: -337, y: -42 },
    data: {
      title:
        "[Using Bacteria as Bio-Factories](https://undergroundgardenclub.notion.site/BQ-02-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611?pvs=4)",
      byLine: "Replicating & Harvesting GFP DNA",
      link: "https://undergroundgardenclub.notion.site/BQ-02-Harvesting-Our-E-Coli-for-Plasmids-with-GFP-genes-38e61bf4635341049efef2e4810bd611?pvs=4",
    },
  },
  {
    id: "start-30",
    type: "section",
    position: { x: 318, y: -188 },
    data: {
      title: "Tools for Transformation",
      byLine: "Intro Experiments Pt.3",
    },
  },
  {
    id: "hardware-01",
    type: "quest",
    position: { x: 351, y: -117 },
    data: {
      title: "[Siri + GPT4](https://github.com/Yue-Yang/ChatGPT-Siri)",
      byLine: "Audio-Based AI Assistance",
      link: "https://github.com/Yue-Yang/ChatGPT-Siri",
    },
  },
  {
    id: "hardware-02",
    type: "quest",
    position: { x: 302, y: -48 },
    data: {
      title:
        "[Build Smartphone Florescence Microscope](https://undergroundgardenclub.notion.site/TQ-01-DIY-Florescence-Microscopy-827063aa9b7f456b8764c5c2c3af3fd4?pvs=4)",
      byLine: "Intro to Quantum Mechanics + Electrical Work",
      // variant: "hardware",
      link: "https://undergroundgardenclub.notion.site/TQ-01-DIY-Florescence-Microscopy-827063aa9b7f456b8764c5c2c3af3fd4?pvs=4",
    },
  },
  // TODO: come up w/ experiment to exemplify this
  // {
  //   id: "start-40",
  //   type: "section",
  //   position: { x: -862, y: -185 },
  //   data: {
  //     title: "Safety & Ethics",
  //     byLine: "Intro Experiments Pt.4",
  //   },
  // },
  {
    id: "communityIntro-00",
    type: "start",
    position: { x: -54, y: 191 },
    data: {
      title: "Community Experiments",
      byLine: "Dig Deeper, Show Others the Way",
    },
  },
  // --- plant evolution
  {
    id: "resource-05",
    type: "quest",
    position: { x: -297, y: 273 },
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
    position: { x: -650, y: 307 },
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
    data: { title: "Home Grown Insulin", byLine: "Coming Soon" },
  },
  {
    id: "botanicalPharm-52",
    type: "quest",
    position: { x: 0, y: 1050 },
    data: { title: "Home Grown Testosterone", byLine: "Coming Soon" },
  },
  {
    id: "botanicalPharm-53",
    type: "quest",
    position: { x: 230, y: 1040 },
    data: { title: "Home Grown Estrogen", byLine: "Coming Soon" },
  },
  // {
  //   id: "botanicalPharm-30",
  //   type: "section",
  //   position: { x: 10, y: 1140 },
  //   data: { title: "Processing for Human Use", byLine: "Cp,omg" },
  // },
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
      title: "Environmental Defense and Case Building",
      byLine: "How to Leverage Federal Laws/Regulations",
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
  // --- welcome/paths
  {
    source: "welcome-00",
    target: "welcomePaths-10",
  },
  {
    source: "welcome-00",
    target: "welcomePaths-20",
  },
  {
    source: "welcome-00",
    target: "welcomePaths-30",
  },
  {
    source: "welcome-00",
    target: "welcomePaths-40",
  },
  {
    source: "welcome-00",
    target: "welcomePaths-50",
  },
  {
    source: "welcomePaths-10",
    target: "welcomePaths-11",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-10",
    target: "welcomePaths-12",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-20",
    target: "welcomePaths-21",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-20",
    target: "welcomePaths-22",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-30",
    target: "welcomePaths-31",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-30",
    target: "welcomePaths-32",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-40",
    target: "welcomePaths-41",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-40",
    target: "welcomePaths-42",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-50",
    target: "welcomePaths-51",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-50",
    target: "welcomePaths-52",
    className: "ugc-edge--course",
  },

  {
    source: "welcomePaths-11",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-12",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-21",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-22",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-31",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-32",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-41",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-42",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-51",
    target: "start-00",
    className: "ugc-edge--course",
  },
  {
    source: "welcomePaths-52",
    target: "start-00",
    className: "ugc-edge--course",
  },

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
    source: "hardware-00",
    target: "start-01",
    // className: "ugc-edge",
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
    source: "resource-04",
    target: "start-01",
    // className: "ugc-edge",
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
  updatable: false,
  // type: "smoothstep",
  // @ts-ignore
  className:
    e.className != null
      ? e.className
      : e.source?.includes("resource") || e.target?.includes("resource")
      ? "ugc-edge--course"
      : "ugc-edge",
}));
