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

  useEffect(() => {
    axios
      .get<Appointment[]>("http://localhost:3000/appointment/all")
      .then((res) => setAppointment(res.data))
      .catch(err => {
       setError(err.message);
  });
  }, []);

  

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
                  onClick={() => handleEditOpenModal(params.row)}
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


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Button, useTheme } from '@mui/material';
// import { DataGrid, GridColDef, GridRowSelectionModel, GridToolbar } from '@mui/x-data-grid';
// import Header from '../../components/header/header';
// import AddAppointmentModal from './addappointmentmodal';
// import { tokens } from '../../theme';
// import EditAppointmentModal from './editappointmentmodal'; // Fix: Changed 'editappointmentmodal' to 'EditAppointmentModal'
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { number, string } from 'yup';

// interface Appointment {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   address: string;
//   age: number;
//   gender: string;
//   phoneNumber: string;
//   Specialization: string;
//   bookingDate: string;
//   bookingTime: string;
// }

// const Contacts = () => {
//   const [appointments, setAppointments] = useState<Appointment[]>([]);
//   const [editMode, setEditMode] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   // const [openModal, setOpenModal] = useState(false);
//   const [openAddModal, setOpenAddModal] = useState(false); 
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [userId, setUserId] = useState();
//   const [users, setUsers] = useState([]);

//   const [editUserModalState, setEditModalState] = useState(null);
  
//   // const [selectedRowId, setSelectedRowId] = useState<number | null>(null);
//   // const [formData, setFormData] = useState<Appointment>({
//   //   id: 0,
//   //   firstName: '',
//   //   lastName: '',
//   //   email: '',
//   //   address: '',
//   //   age: 0,
//   //   gender: '',
//   //   phoneNumber: '',
//   //   Specialization: '',
//   //   bookingDate: '',
//   //   bookingTime: '',
//   // });

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const getRowId = (row: Appointment) => row.id;

//   const handleSelectionModelChange = (SelectionModel: GridRowSelectionModel) => {
//     if (SelectionModel.length > 0) {
//       setSelectedRowId(SelectionModel[0] as number);
//     } else {
//       setSelectedRowId(null);
//     }
//   }

//   useEffect(() => {
//     axios
//       .get<Appointment[]>("http://localhost:3000/appointment/all")
//       .then((res) => setAppointments(res.data))
//       // .then((res) => res.json())
//       // .then((json) => {
//       //   console.log('API Response', json);
//       //   setUsers(json)
//       // })
//       // .catch(err => {
//       //   setError(err.message);
//       // });
//   }, [onError]);
//   // const handleEditOpenModal = (selectedAppointment) => {
//   //   setEditMode(true);
//   //   setOpenEditModal(true);
//   //   setFormData(selectedAppointment);
//   // };

//   // const editUser = async (userId: { id: any; }) => {
//   //   const stringNumber = userId.id;
//   //   const id = Number(stringNumber);
//   //   console.log(id);

//   //   try {
//   //     setUserId(id);

      

//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

//   const editExistingUser = async (userData) => {
//     try {
//       // Make a PUT request to update user data
//       const response = await axios.put(`http://192.168.0.103:3000/api/update-user/${userData.id}`, {
//         id : userData.id,
//         username: userData.userN,
//         email: userData.email,
//         phone: userData.phone
//       });

//       console.log('Server response:', response.data);

//       // Close the modal or form
//       // setEditUserModalOpen(false);
//     } catch (error) {
//       console.error('Error editing user', error);
//       // if (error.response) {
//       //   console.log("Response data:", error.response.data);
//       //   console.log("Response status:", error.response.status);
//       //   console.log("Response headers:", error.response.headers);
//       // }
//     }
//   };

  
//   const handleDeleteAppointment = (appointmentId) => {
//     // Handle deleting appointment here
//     // You may want to show a confirmation dialog before deleting
//     // and then make an API call to delete the appointment
//   };
  

//     const columns: GridColDef[] = [
//     {field: 'id', headerName:'ID', flex: 0.5},
//     {field: "firstName", headerName: "Firstname", flex: 1, editable: editMode},
//     {field: 'lastName', headerName:'Lastname', flex: 1, cellClassName: 'name-column--cell', editable: editMode},
//     {field: 'email' ,headerName: 'Email', flex: 1, editable: editMode},
//     {field: 'address' , headerName: 'Address', flex: 1, editable: editMode},
//     {field: 'age', headerName:'Age', headerAlign: "left", align: "left",editable: editMode},
//     {field: 'gender', headerName:'gender', flex: 1, editable: editMode},
//     {field: 'phoneNumber', headerName:'Phone Number', flex: 1 ,editable: editMode},
//     {field: 'Specialization' ,headerName: 'Specialization', flex: 1, editable: editMode},
//     {field: 'bookingDate' ,headerName: 'Booking Date', flex: 1, editable: editMode},
//     {field: 'bookingTime' ,headerName: 'Booking Time', flex: 1, editable: editMode},
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       flex: 1,
//       renderCell: (params) => (
//         <div>
//           <EditIcon
//             onClick={() => handleEditOpenModal(params.row)}
//             // color="primary"
//             sx={{ cursor: "pointer", fontSize:25, marginRight: 1.5}}
//           >
//             Edit
//           </EditIcon>
//           <DeleteIcon
//             onClick={() => handleDeleteAppointment(params.row.id)}
//             // color="secondary"
//             sx={{ cursor: "pointer", fontSize:25}}
//           >
//             Delete
//           </DeleteIcon>
//         </div>
//       ),
//     },
   
//   ]; 

 
//   const handleEditOpenModal = (userId: any) => {
//     const stringNumber = userId.id;
//     const id = Number(stringNumber);
//     console.log(id);

//     // setEditMode(true);
//     // setOpenEditModal(true); // Open the Edit Appointment modal
//     // setFormData(selectedAppointment);
//     // console.log(selectedRowId);


//   };

//   const handleEditCloseModal = () => {
//     setEditMode(false);
//     setOpenEditModal(false); // Close the Edit Appointment modal
//   }

//   const handleEditAppointment = (data: Appointment) => {
//     // Handle editing appointment here
//   }

//   const handleOpenAddModal = () => {
//     setOpenAddModal(true); // Open the Add Appointment modal
//   };

//   const handleCloseAddModal = () => {
//     setOpenAddModal(false); // Close the Add Appointment modal
//   };

//   const handleAddAppointment = (data: Appointment) => {
//     // Handle adding appointment here
    
//   } 

//   return (
//     <Box m="20px">
//       <Header title="APPOINTMENTS" subtitle="List of Appointments " />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             fontSize: "0.9rem",
//             borderBottom: "none",
//           },
//           "& .MuiData-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//             borderRadius: "0 0 4px 4px",
//           },
//           "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//             color: colors.grey[100] + " !important",
//           },
//         }}
//       >
//         <DataGrid
//           rows={appointments}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//           getRowId={getRowId}
//           // checkboxSelection
//           onRowSelectionModelChange={handleSelectionModelChange}
//           rowSelectionModel={selectedRowId !== null ? [selectedRowId] : []}
//         >
          
//         </DataGrid>

//         {/* <DataTable /> */}
//       </Box>

//       {/* <Button
//         onClick={handleEditOpenModal}
//         variant="contained"
//         sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}
//       >
//         Edit
//       </Button> */}

//       <EditAppointmentModal
//         open={openEditModal}
//         onClose={handleEditCloseModal}
//         handleEditAppointment={handleEditAppointment}
//         formData={formData}
//         setFormData={setFormData}
//       />   

//       <Button onClick={handleOpenAddModal} variant="contained">
//         Add Appointment
//       </Button>

//       <AddAppointmentModal
//         open={openAddModal}
//         onClose={handleCloseAddModal}
//         handleAddAppointment={handleAddAppointment}
//         formData={formData}
//         setFormData={setFormData}
//       />
//     </Box>
//   );
// }

// export default Contacts;