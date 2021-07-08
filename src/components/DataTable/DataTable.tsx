import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
} from "@material-ui/data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 130,
  },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params: GridValueGetterParams) =>
  //       `${params.getValue("firstName") || ""} ${
  //         params.getValue("lastName") || ""
  //       }`,
];

const rows = [
  { id: 1, lastName: "Fry", firstName: "Philip", age: 31 },
  { id: 2, lastName: "Turanga", firstName: "Leela", age: 30 },
  { id: 3, lastName: "Rodriguez", firstName: "Bender", age: null },
  { id: 4, lastName: "Farnsworth", firstName: "Hubert", age: 165 },
  { id: 5, lastName: "Wong", firstName: "Amy", age: 28 },
  { id: 6, lastName: "Conrad", firstName: "Hermes", age: 62 },
  { id: 7, lastName: "Zoidberg", firstName: "John", age: 93 },
  { id: 8, lastName: "Brannigan", firstName: "Zapp", age: 34 },
  { id: 9, lastName: "Kroker", firstName: "Kif", age: 30 },
];

export const DataTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <h2>Cars In Inventory</h2>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};
