import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MainCard from 'components/MainCard';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';

export default function RoutePlanningPage() {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Typography variant="h5">Route Planning</Typography>
        </Grid>
      </Grid>
      <MainCard sx={{ mt: 6, padding: 2 }} content={true}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField label="Enter Volume" fullWidth />
          </Grid>

          <Grid item xs={4}>
            <TextField label="Choose Dealer" fullWidth />
          </Grid>

          <Grid item xs={4}>
            <TextField label="Vehicle Type" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                <FormControlLabel value="female" control={<Radio />} label="Distance Covered " />
                <FormControlLabel value="male" control={<Radio />} label="Time Taken" />
                <FormControlLabel value="disabled" control={<Radio />} label="Vehicle Type" />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={4}>
            <Button variant="contained" fullWidth>
              Plan Route
            </Button>
          </Grid>
        </Grid>
      </MainCard>
    </>
  );
}
