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
        title="Region"
        url=""
        handleChange={(e) =>  setRegion(e.target.value)}
      />

      {region && (
        <SelectList
          title="Departamentos"
          url=""
          handleChange={(e) => setDepartment(e.target.value)}
        />
      )}

      {department && (
        <SelectList
          title="Municipios"
          url=""
          handleChange={(e) => setTown(e.target.value)}
        />
      )}
    </div>
  );
};

export default SelectAnidados;
/**
 *
 * fetch("https://api-colombia.com/api/v1/Department/15/cities").then(res=> res.json()).then(json=>console.log(json)).catch(err => err)
 *
 */
