  import { Box, Grid, Typography, useTheme } from "@mui/material";
  import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
  import { tokens } from "../../theme";
  import { mockDataTeam } from "../../../data/Mockdata";
  import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
  import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
  import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
  import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import axios from "axios";

interface Team{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address_1: string;
  address_2: string;
  role: string;
}

  const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [team, setTeam] = useState<Team[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      axios
        .get<Team[]>("http://localhost:3000/users")
        .then((res) => setTeam(res.data))
        .catch(err => {
        setError(err.message);
    });
    }, []);

    const columns: GridColDef[] = [
      {field: 'firstName', headerName:'FirstName', flex: 1, cellClassName: 'name-column--cell'},
      {field: 'lastName', headerName:'LastName', flex: 1, cellClassName: 'name-column--cell'},
      {field: 'email', headerName:'Email', flex: 1 },
      {field: 'phoneNumber', headerName:'Phone Number', flex: 1 },
      {field: 'address_1', headerName:'Address1', flex: 1, cellClassName: 'name-column--cell'},
      {field: 'address_2', headerName:'Address2', flex: 1, cellClassName: 'name-column--cell'},
      {field: 'role', headerName:'Role', flex: 1,headerAlign: "center", align: "center", renderCell: ({row: {role}}) => {
        return (
          <Box
            width="60%"
            m = "0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            // backgroundColor={
            //   access === "admin"
            //    ? colors.greenAccent[600]
            //    : colors.greenAccent[700]
            // }
            borderRadius="4px"
          >
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "Doctor" && <SecurityOutlinedIcon />}
            {role === "Receptionist" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ml : "5px"}}>
              {role}
            </Typography>
          </Box>
        )
      } },
    ]; 

    return (
      <Box m="20px">
        <Header title="Team" subtitle="Managing the team Members"/>
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
          }}
        >
          <DataGrid
            rows={team}
            columns={columns}
            components={{Toolbar: GridToolbar}}
          />
        </Box>
      </Box>
    )
  }

  export default Team;