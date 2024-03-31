
// ------------------------------------------Finally ----------------------------------------------


import { Box, Button } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import Header from '../../components/header/header';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddAppointmentModal from './addappointmentmodal';
import EditAppointmentModal from './editappointmentmodal';
import DeleteAppointmentModal from './deleteAppointmentModal';
import { debounce } from 'lodash';
import { User } from '../../context/user-data-transfer';

interface Appointment {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  age: number;
  gender: string;
  phoneNumber: string;
  bookingDate: string;
  Specialization : string;
  bookingTime : string;
}

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [appointment, setAppointment] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [userId, setUserId] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  // const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);


  const fetchData = useCallback(() => {
    setUser(JSON.parse(localStorage.getItem('User') ?? '{}'));
    
    if(user?.role.includes('DOCTOR')) {
      axios
      .get<Appointment[]>(`http://localhost:3000/appointment/doctorAppointments/${user?.id}`)
      .then((res) => {
        setAppointment(res.data);
        console.log('Data Received:', res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
    }
    else {
      axios
        .get<Appointment[]>('http://localhost:3000/appointment/all')
        .then((res) => {
          setAppointment(res.data);
          console.log('Data Received:', res.data);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [user?.id, user?.role]);

  const debouncedFetchData = useCallback(debounce(() => fetchData(), 5000), [fetchData]);

  useEffect(() => {
    fetchData();
  });




  const handleEditOpenModal = (user: Appointment) => {
    setOpenEditModal(true);
    setUserId(user.id);
  };

  const handleEditCloseModal = () => {
    setOpenEditModal(false);
    debouncedFetchData.cancel();
    fetchData();
    debouncedFetchData();
  };

  const handleOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
    // fetchData();
    debouncedFetchData.cancel();
    debouncedFetchData();
  };

  const handleDeleteOpenModal = (user: Appointment) => {
    setOpenDeleteModal(true);
    setUserId(user.id);
  };

  const handleDeleteCloseModal = () => {
    setOpenDeleteModal(false);
    debouncedFetchData.cancel();
    // fetchData();
    debouncedFetchData();
  };

 


  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    { field: 'firstName', headerName: 'Name', flex: 1 },
    // { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell', valueGetter: (params) => `${params.row.firstname} ${params.row.lastname}`,},
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'age', headerName: 'Age', headerAlign: 'left', align: 'left' },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },
    { field: 'bookingDate', headerName: 'Booking Date', flex: 1 },
    { field: 'Specialization', headerName: 'Specialization', flex: 1 },
    { field: 'bookingTime', headerName: 'Booking Time', flex: 1 },
  ];

  if (!user?.role.includes('DOCTOR')) {
    columns.push(
      { field: 'user.name', headerName: 'Doctor', flex:1, valueGetter: (params) => params.row.user.name,},
    )
    columns.push({
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <div>
          <EditIcon
            onClick={() => handleEditOpenModal(params.row)}
            sx={{ cursor: 'pointer', fontSize: 25, marginRight: 1.5 }}
          />
          <DeleteIcon
            onClick={() => handleDeleteOpenModal(params.row)}
            sx={{ cursor: 'pointer', fontSize: 25 }}
          />
        </div>
      ),
    });
  }

  return (
        <Box m="20px">
          <>
      <Header title="APPOINTMENTS" subtitle="List of all appiontments" />
      {!user?.role.includes('DOCTOR') && (
           <Button onClick={handleOpenAddModal} variant="contained" color='secondary'
      sx={{position:'absolute',
           ml:135,
           mb:'5'
    }}
      >
        Add Appointment
      </Button>
      )}
      </>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            fontSize: '0.9rem',
            borderBottom: 'none',
          },
          '& .MuiData-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
            borderRadius: '0 0 4px 4px',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
         
        <DataGrid
          rows={appointment}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />

        
      </Box>

    

      <EditAppointmentModal
        open={openEditModal}
        onClose={handleEditCloseModal}
        appId={userId}
      />
{/* 
      <Button onClick={debouncedFetchData} variant="contained">
        Refresh Data
      </Button> */}


      <AddAppointmentModal
        open={openAddModal}
        onClose={handleCloseAddModal}
        
      />

      <DeleteAppointmentModal
        open={openDeleteModal}
        onClose={handleDeleteCloseModal}
        appId={userId}
      />
    </Box>
  );
};

export default Contacts;

