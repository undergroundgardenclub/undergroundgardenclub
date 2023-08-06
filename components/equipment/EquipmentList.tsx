import { groupBy, orderBy } from "lodash";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useEquipments } from "./useEquipment";
import { StyledResourceList } from "../resources/ResourceList";
import { ResourcePanel } from "../resources/ResourcePanel";

export const EquipmentList = () => {
  const { data: equipments } = useEquipments();
  const [searchText, setSearchText] = useState("");
  // RENDER
  return (
    <StyledResourceList>
      <div className="resource-list__search">
        <MagnifyingGlassIcon />
        <input
          value={searchText}
          placeholder="Search equipment"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      {/* weird syntax, but sorting on first arr index bc its the type string */}
      {orderBy(Object.entries(groupBy(equipments, "type")), [0])?.map(
        ([type, equipments]) => (
          <>
            <div className="resource-list__divider">
              {type} <hr />
            </div>
            <div className="resource-list__list">
              {equipments
                ?.filter((equipment) =>
                  searchText.length === 0
                    ? true
                    : Object.values(equipment)
                        .map(String)
                        .join(" ")
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                )
                ?.map((equipment) => (
                  <ResourcePanel key={equipment.id} resource={equipment} />
                ))}
            </div>
          </>
        )
      )}
    </StyledResourceList>
  );
};
