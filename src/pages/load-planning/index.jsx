import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';
export default function LoadPlanningPage() {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Trips</Typography>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 6, padding: 2 }} content={true}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6} alignItems="flex-end">
                <FormControl variant="outlined" fullWidth>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={'text'}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton edge="start">{<SearchOutlined />}</IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={4}>
                <Button variant="contained">Search Part</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              Scan part
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose Part</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={10} label="Age">
                <MenuItem value={10}>Monthly</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField label="Enter Quantity" fullWidth />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Choose Dealer</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={10} label="Age">
                <MenuItem value={10}>Monthly</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">Create Plan</Button>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
}
