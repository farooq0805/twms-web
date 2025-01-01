import PropTypes from 'prop-types';

// material-ui
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project import
import MainCard from 'components/MainCard';

// assets
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import FallOutlined from '@ant-design/icons/FallOutlined';
import { TruckOutlined } from '@ant-design/icons';

const iconSX = { fontSize: '0.75rem', color: 'inherit', marginLeft: 0, marginRight: 0 };

export default function AnalyticEcommerce({ color = 'primary', title, count, percentage, isLoss, extra }) {
  return (
<MainCard contentSX={{ p: 2.25 }}>
  <Grid container alignItems="center" spacing={2}>
    {/* Icon on the left */}
    <Grid item>
      <TruckOutlined style={{ fontSize: '36px', color: '#08c' }} />
    </Grid>
    {/* Label and count on the right */}
    <Grid item xs>
      <Stack spacing={0.5} sx={{ textAlign: 'right' }}>
        <Typography variant="h6" color="text.secondary">
          {title}
        </Typography>
        <Typography variant="h4" color="inherit" fontWeight="bold">
          {count}
        </Typography>
      </Stack>
    </Grid>
  </Grid>
</MainCard>
  );
}

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.string
};
