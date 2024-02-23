  import { Box, Grid, Typography, useTheme } from "@mui/material";
  import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
  import { tokens } from "../../theme";
  import { mockDataTeam } from "../../../data/Mockdata";
  import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
  import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
  import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
  import Header from "../../components/header/header";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { number } from "yup";
import EditTeamModal from "./editTeamModal";
import DeleteTeamModal from "./deleteTeamModal";
import { debounce } from 'lodash';

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

    const [openEditModal, setOpenEditModal] = useState(false);
    const [userId, setUserId] = useState(number);

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    // const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(
    //   null
    // );

    // useEffect(() => {
    //   fetchData();
  
    //   const interval = setInterval(() => {
    //     fetchData();
    //   }, 8000);
  
    //   setRefreshInterval(interval);
  
    //   return () => {
    //     if (refreshInterval) {
    //       clearInterval(refreshInterval);
    //     }
    //   };
    // }, []);
  
    // const fetchData = () => {
    //   axios
    //     .get<Team[]>('http://localhost:3000/users')
    //     .then((res) => setTeam(res.data))
    //     .catch((err) => {
    //       setError(err.message);
    //     });
    // };
  

    // useEffect(() => {
    //   axios
    //     .get<Team[]>("http://localhost:3000/users")
    //     .then((res) => setTeam(res.data))
    //     .catch(err => {
    //     setError(err.message);
    // });
    // }, []);

    
  const fetchData = useCallback(() => {
    axios
      .get<Team[]>('http://localhost:3000/users')
      .then((res) => {
        setTeam(res.data);
        console.log('Data Received:', res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const debouncedFetchData = useCallback(debounce(() => fetchData(), 500), [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



    const handleEditOpenModal = (user: any) => {
      const stringNumber = user.id;
      setOpenEditModal(true);
  
      setUserId(stringNumber);
      console.log(userId);
    };
    const handleEditCloseModal = () => {
      setOpenEditModal(false);
      debouncedFetchData.cancel();
      fetchData();
      debouncedFetchData();
    };

    const handleDeleteOpenModal = (user: any) => {
      setOpenDeleteModal(true);
      setUserId(user.id);
    
    };
  
    const handleDeleteCloseModal = () => {
      setOpenDeleteModal(false);
      debouncedFetchData.cancel();
      // fetchData();
      debouncedFetchData();
    }
  



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
      {
        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        renderCell: (params) => (
          <div>
            <EditIcon
              onClick={() => handleEditOpenModal(params.row)}
              // color="primary"
              sx={{ cursor: 'pointer', fontSize: 25, marginRight: 1.5 }}
            >
              Edit
            </EditIcon>
            <DeleteIcon
              onClick={() => handleDeleteOpenModal(params.row)}
              color="secondary"
              sx={{ cursor: 'pointer', fontSize: 25 }}
            >
              Delete
            </DeleteIcon>
          </div>
        ),
      },

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


          
      <EditTeamModal
        open={openEditModal}
        onClose={handleEditCloseModal}
        appId={userId}
      />

 <DeleteTeamModal
        open={openDeleteModal}
        onClose={handleDeleteCloseModal}
        // handleDeleteAppointment={}
        appId={userId}
      /> 
        




      </Box>
    )
  }

  export default Team;