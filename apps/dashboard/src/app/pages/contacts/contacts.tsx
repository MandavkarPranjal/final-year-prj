import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../../data/Mockdata";
import { useTheme } from "@mui/material";
import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  age: number;
  gender: string;
  phoneNumber: string;
  bookingDate: string;
}

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [appointment, setAppointment] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Appointment[]>("http://localhost:3000/appointment/all")
      .then((res) => setAppointment(res.data))
      .catch(err => {
       setError(err.message);
  });
  }, []);

  const columns: GridColDef[] = [
    {field: 'id', headerName:'ID', flex: 0.5},
    {field: "firstName", headerName: "Firstname", flex: 1},
    {field: 'lastName', headerName:'Lastname', flex: 1, cellClassName: 'name-column--cell'},
    {field: 'address' , headerName: 'Address', flex: 1},
    {field: 'age', headerName:'Age', headerAlign: "left", align: "left"},
    {field: 'gender', headerName:'gender', flex: 1 },
    {field: 'phoneNumber', headerName:'Phone Number', flex: 1 },
    {field: 'bookingDate' ,headerName: 'Booking Date', flex: 1},
    {field: 'bookingTime' ,headerName: 'Booking Time', flex: 1},
  ]; 

  return (
    <Box m="20px">
      <Header title="APPOINTMENTS" subtitle="List of all appiontments"/>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            fontSize: "0.9rem",
            borderBottom: "none"
          },
          "& .MuiData-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
            borderRadius: "0 0 4px 4px"
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        <DataGrid
          rows={appointment}
          columns={columns}
          components={{Toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Contacts;