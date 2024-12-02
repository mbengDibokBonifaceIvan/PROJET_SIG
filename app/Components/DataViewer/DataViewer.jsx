
import React, { useState } from "react";
import axios from "axios";
import styles from "./DataViewer.css";

const url = "http://localhost:8080/api/candidat";

export default function DataViewer({
  csvData,
  onDeleteCSVRowHandler,
  onEditCSVRowHandler,
  editingRowIndex,
  editingRowData,
  onEditRowDataInputHandler,
  onCancleEditingRowHandler,
  onSaveEditingRowDataHandler,
}) {
  const [monCandidat, setMonCandidat] = useState({ nom: "" }); // Corrected case for "monCandidat"
  
const {nom} = monCandidat;
  const onInputChange = (newName) => {
    setMonCandidat({ ...monCandidat, nom: newName });
  };

  const onSubmit = async (rowIndex, candidat) => {
    const data = {
      Candidat: candidat,
    };
    
    console.log(data);
    console.log(data.Candidat);
    onInputChange(data.Candidat); // Update state with new name
    console.log(data.Candidat);

    try {
      const response = await axios.post(`${url}`, {nom:data.Candidat});
      console.log(response);
      console.log("Succès");
    } catch (error) {
      console.error("Erreur", error);
    }
  };

  let tableBody = null;

  if (csvData) {
    tableBody = csvData.map((row, rowIndex) => {
      if (editingRowIndex === rowIndex) {
        return (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}.</td>
            <td>
              <input
                type="text"
                value={editingRowData.Annee}
                onChange={onEditRowDataInputHandler}
              />
            </td>
            <td>
              <span>{row.Arrondissement}</span>
            </td>
            <td>
              <input
                type="text"
                value={nom}
                onChange={(e) => onInputChange(e.target.value)}
              />
            </td>
            <td>
              <span>{row.PersonnesEligibles}</span>
            </td>
            <td>
              <span>{row.Votants}</span>
            </td>
            <td>
              <span>{row.VotesParCandidat}</span>
            </td>
            <td>
              <button onClick={onCancleEditingRowHandler}>Cancel</button>
              <button onClick={onSaveEditingRowDataHandler}>Save</button>
            </td>
          </tr>
        );
      }

      return (
        <tr key={rowIndex}>
          <td>{rowIndex + 1}.</td>
          <td>
            <span>{row.Annee}</span>
          </td>
          <td>
            <span>{row.Arrondissement}</span>
          </td>
          <td>
            <span>{row.Candidat}</span>
          </td>
          <td>
            <span>{row.PersonnesEligibles}</span>
          </td>
          <td>
            <span>{row.Votants}</span>
          </td>
          <td>
            <span>{row.VotesParCandidat}</span>
          </td>
          <td>
            <button onClick={() => onDeleteCSVRowHandler(rowIndex)}>
              Delete
            </button>
            <button onClick={() => onEditCSVRowHandler(rowIndex)}>Edit</button>
            <button onClick={() => onSubmit(rowIndex, row.Candidat)}>
              Valider
            </button>
          </td>
        </tr>
      );
    });
  }

  return (
    <div className={styles.Container}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Année</th>
            <th>Arrondissement</th>
            <th>Candidat</th>
            <th>Personnes Eligibles</th>
            <th>Votants</th>
            <th>Votes Par Candidat</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
}
