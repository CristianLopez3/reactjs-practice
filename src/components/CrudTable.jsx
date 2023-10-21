import React, { useState } from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ dataDb, setDataToEdit, deleteData }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Anime</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            dataDb.length === 0 ?
              (<td colSpan='3'>No data Available yet</td>) :
              (dataDb.map((el) => {
                {
                  /**  
                  * Le pasamos los metodos del crud por medio de propiedades
                  * a las row con el map, para que asi estas se ejecuten desde la row.
                  * La logica correpondiente queda a cargo de <CrudTablerow />
                   */
                }
                return <CrudTableRow
                  el={el}
                  key={el.id}
                  setDataToEdit={setDataToEdit}
                  deleteData={deleteData}
                />
              }))
          }

        </tbody>
      </table>
    </div>

  );
}

export default CrudTable;