import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MainCard from 'components/MainCard';
import PartsMasterDatatable from './DataTable';
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export default function PartMasterPage() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Part Master</Typography>
      </Grid>
      <Grid item xs={12}>
        <MainCard sx={{ mt: 2, padding: 2 }} content={false}>
          <Grid container spacing={2}>
            <Grid item xs={2} alignItems="flex-end">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={10} label="Age">
                  <MenuItem value={10}>Monthly</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained">Create New</Button>
            </Grid>
            <Grid item xs={12}>
              <PartsMasterDatatable />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}
