import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectAnidados = () => {
  const [region, setRegion] = useState("");
  const [department, setDepartment] = useState("");
  const [town, setTown] = useState("");



  return (
    
    <div>
      <h2>Select anidados</h2>
      <h3>Colombia</h3>
      <pre>
        {region} - {department} - {town}
      </pre>

      <SelectList
        key="1342"
        title="Region"
        url="https://api-colombia.com/api/v1/Region"
        handleChange={(e) => setRegion(e.target.value)}
      />

      {region && (
        <SelectList
          key="1234"
          title="Department"
          url={`https://api-colombia.com/api/v1/department`}
          handleChange={(e) => setDepartment(e.target.value)}
        />
      )}

      {department && (
        <SelectList
          key="13512"
          title="Cities"
          url={`https://api-colombia.com/api/v1/department/${department}/cities`}
          handleChange={(e) => setTown(e.target.value)}
        />
      )}

    </div>
  );
};

export default SelectAnidados;
/**
 *

 *
 */
