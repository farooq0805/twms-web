import Box from '@mui/material/Box';
import AgGrid from 'components/AgGrid.jsx';

function createData(part_no, part_name, hsn_code, dimension, weight) {
  return { part_no, part_name, hsn_code, dimension, weight };
}

const rows = [
  createData(84564564, 'Camera Lens', 40, 2, 40570),
  createData(98764564, 'Laptop', 300, 0, 180139),
  createData(98756325, 'Mobile', 355, 1, 90989),
  createData(98652366, 'Handset', 50, 1, 10239),
  createData(13286564, 'Computer Accessories', 100, 1, 83348),
  createData(86739658, 'TV', 99, 0, 410780),
  createData(13256498, 'Keyboard', 125, 2, 70999),
  createData(98753263, 'Mouse', 89, 2, 10570),
  createData(98753275, 'Desktop', 185, 1, 98063),
  createData(98753291, 'Chair', 100, 0, 14001)
];

const headCells = [
  {
    field: 'part_no',
    minWidth: 170,
    headerName: 'Vehicle Type'
  },
  {
    field: 'part_name',
    minWidth: 170,
    headerName: 'No of Vehicle'
  },
  {
    field: 'hsn_code',
    minWidth: 170,
    headerName: 'Max Weight'
  },
  {
    field: 'dimension',
    minWidth: 170,
    headerName: 'Max Volume'
  },
  {
    field: 'action',
    //minWidth: 300,
    headerName: 'Action'
  }
];

export default function VendorMasterDatatable() {
  return (
    <Box>
      <div style={{ height: '400px' }}>
        <AgGrid
          columnDefs={headCells}
          rowData={rows}
          pagination={true}
          gridOptions={{
            defaultColDef: { resizable: true }
          }}
        />
      </div>
    </Box>
  );
}
