import { useQuery } from "@tanstack/react-query";
import { TEquipment } from "./types";
// import { supaClient } from "../query/supaClient";

// DATA (ditching external database)
const localEquipments: TEquipment[] = [
  {
    name: "Stovetop Pressure Cooker",
    url: "https://www.instructables.com/How-to-Sterilize-Autoclavable-Materials-at-Home-us/",
    type: "autoclave",
    description: null,
  },
  {
    name: "Pio-Reactor",
    url: "https://pioreactor.com/",
    type: "bioreactor",
    description: null,
  },
  {
    name: "pocket PCR",
    url: "https://gaudi.ch/PocketPCR/",
    type: "pcr",
    description: null,
  },
  {
    name: "Car Battery Welder",
    url: "https://www.youtube.com/watch?v=PV5oLPLUzrM",
    type: "welding",
    description: null,
  },
  {
    name: "Hot Plate + Magnetic Stirrer",
    url: "https://www.vevor.com/magnetic-stirrer-c_11062/vevor-magnetic-stirrer-hot-plate-digital-hotplate-magnetic-stirrer-2000-rpm-2l-p_010525136888",
    type: "hot plate",
    description: null,
  },
  {
    name: "miniPCR",
    url: "https://www.minipcr.com/product/minipcr-mini8-thermal-cycler/",
    type: "pcr",
    description: null,
  },
  {
    name: "Pipettes (Eppendorf)",
    url: "https://www.ebay.com/itm/175714301206",
    type: "pipettes",
    description: "0.5-10µl, 10-100µl",
  },
  {
    name: "40-400x Smartphone Microscope",
    url: "https://carson.com/product/ms-040sp-beginner-40x-400x-dual-led-lighting-compound-microscope-and-smartphone-adapter/",
    type: "microscope",
    description: null,
  },
  {
    name: "The Odin Home Lab Kit",
    url: "https://www.the-odin.com/genetic-engineering-home-lab-kit/",
    type: "all-in-one",
    description: "",
  },
  {
    name: "IQCrew IN50 Inverted Microscope",
    url: "https://www.amazon.com/40X-200X-Science-Discovery-Inverted-Microscope/dp/B07FCXQQ7H",
    type: "microscope",
    description: "",
  },
  {
    name: "LED/Filters for Fluorescence Microscopy",
    url: "https://undergroundgardenclub.notion.site/TQ-01-DIY-Florescence-Microscopy-827063aa9b7f456b8764c5c2c3af3fd4?pvs=4",
    type: "microscope",
    description: "LED Build to Illuminate/Filter Fluorescent Proteins",
  },
  {
    name: "Pipette Stand",
    url: "https://ivyxscientific.com/collections/all/products/linear-micropipette-pipettor-stand",
    type: "racks",
    description: null,
  },
  {
    name: "Pipettes (IVYX Scientific)",
    url: "https://ivyxscientific.com/collections/all/products/6_micropipettes_kit",
    type: "pipettes",
    description:
      "0.1-2.5μl, 0.5-10μl, 10-100μl, 100-1000μl, 1000-5000μl, 2-10ml",
  },
  {
    name: "Bio-Reactor (Binomica)",
    url: "https://experiment.com/projects/affordable-and-accessible-experimental-evolution-for-the-classroom",
    type: "bioreactor",
    description: "Funded and In Development",
  },
  {
    name: "0-55ºC Incubator (IVYX Scientific)",
    url: "https://ivyxscientific.com/collections/incubators/products/5l-lab-incubator",
    type: "incubator",
    description: null,
  },
  {
    name: "10K RPM Micro Centrifuge (Qor Labs)",
    url: "https://qorlabs.com/products/mini-centrifuge-10-000-rpm",
    type: "centrifuge",
    description: null,
  },
];

// FETCHES
export const useEquipments = () => {
  return useQuery<TEquipment[]>({
    queryKey: ["equipments"],
    queryFn: () => localEquipments,
    refetchInterval: 1000 * 15,
  });
};
