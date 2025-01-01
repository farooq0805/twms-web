import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import VendorMasterDatatable from './DataTable';
export default function TripsPage() {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Trips</Typography>
      </Grid>
      <Grid item xs={12}>
        <MainCard sx={{ mt: 2, padding: 2 }} content={false}>
          <Grid container spacing={2}>
            <Grid item xs={12} alignItems="flex-end">
              <Typography variant="h5">Vehicle Segregation</Typography>
            </Grid>

            <Grid item xs={12}>
              <VendorMasterDatatable />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}
