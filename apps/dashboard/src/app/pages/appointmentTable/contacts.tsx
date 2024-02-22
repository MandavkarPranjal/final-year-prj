import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../../data/Mockdata";
import { useTheme } from "@mui/material";
import Header from "../../components/header/header";
import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAppointmentModal from "./addappointmentmodal";
// import editappointmentmodal from "./editappointmentmodal";
import EditAppointmentModal from './editappointmentmodal';
import { co } from "@fullcalendar/core/internal-common";
import { number } from "yup";

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

  
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false); 
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [userId, setUserId] = useState(number);

  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);


  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 2000);

    setRefreshInterval(interval);

    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
    }
  };
  }, []);

  const fetchData = () => {
    axios
      .get<Appointment[]>("http://localhost:3000/appointment/all")
      .then((res) => setAppointment(res.data))
      .catch((err) => {
        setError(err.message);
      });
    };

  

  const handleEditOpenModal = (user: any) => {
        const stringNumber = user.id;
        // const id = Number(stringNumber);
        // console.log(stringNumber);
        
        
        setEditMode(true);
        setOpenEditModal(true);
        
        setUserId(stringNumber);
        console.log(userId);
        // console.log('global userID', userId);
    
        // setEditMode(true);
        // setOpenEditModal(true); // Open the Edit Appointment modal
        // setFormData(selectedAppointment);
        // console.log(selectedRowId);
    
    
      };
      const handleEditCloseModal = () => {
            setEditMode(false);
            setOpenEditModal(false); // Close the Edit Appointment modal
          }
        
          const handleEditAppointment = (data: Appointment) => {
            // Handle editing appointment here
          }

      const handleOpenAddModal = () => {
            setOpenAddModal(true); // Open the Add Appointment modal
          };
        
          const handleCloseAddModal = () => {
            setOpenAddModal(false); // Close the Add Appointment modal
          };
        
          const handleAddAppointment = (data: Appointment) => {
            // Handle adding appointment here
            
          } 

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
    {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
              <div>
                <EditIcon
                  onClick={() =>  handleEditOpenModal(params.row)}
                  // color="primary"
                  sx={{ cursor: "pointer", fontSize:25, marginRight: 1.5}}
                >
                  Edit
                </EditIcon>
                <DeleteIcon
                  // onClick={() => handleDeleteAppointment(params.row.id)}
                  // color="secondary"
                  sx={{ cursor: "pointer", fontSize:25}}
                >
                  Delete
                </DeleteIcon>
              </div>
            ),
          },
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

      <Button onClick={handleOpenAddModal} variant="contained">
        Add Appointment
      </Button>

      

      <EditAppointmentModal
        open={openEditModal}
        onClose={handleEditCloseModal}
        handleEditAppointment={handleEditAppointment}
        appId={userId}

        // formData={formData}
        // setFormData={setFormData}
      />

       <AddAppointmentModal
        open={openAddModal}
        onClose={handleCloseAddModal}
        handleAddAppointment={handleAddAppointment}
        // formData={formData}
        // setFormData={setFormData}
       />

    </Box>
  )
}

export default Contacts;

