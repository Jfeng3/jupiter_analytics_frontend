// material-ui
import { Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import {BarChartOutlined} from "@ant-design/icons";

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <MainCard title="Sample Card">
    <BarChartOutlined></BarChartOutlined>
  </MainCard>
);

export default SamplePage;
