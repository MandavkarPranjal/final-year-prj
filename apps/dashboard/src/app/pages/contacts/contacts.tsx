import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../../data/Mockdata";
import { useTheme } from "@mui/material";
import Header from "../../components/header/header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    {field: 'id', headerName:'ID', flex: 0.5},
    {field: 'name', headerName:'Name', flex: 1, cellClassName: 'name-column--cell'},
    {field: 'age', headerName:'Age', headerAlign: "left", align: "left"},
    {field: 'phone', headerName:'Phone Number', flex: 1 },
    {field: 'email', headerName:'Email', flex: 1 },
    {field: 'address' , headerName: 'Address', flex: 1},
    {field: 'Specialization' ,headerName: 'Specialization', flex: 1},
    {field: "BookingDate", headerName: "BookingDate", flex: 1},
    {field: 'BookingTime' ,headerName: 'BookinTime', flex: 1},
  ]; 

  return (
    <Box m="20px">
      <Header title="APPOINTMENTS" subtitle="List of Appointments "/>
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
          "& .name-column--cell": {
            color: colors.greenAccent[300],
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
          rows={mockDataContacts}
          columns={columns}
          components={{Toolbar: GridToolbar}}
        />
      </Box>
    </Box>
  )
}

export default Contacts;