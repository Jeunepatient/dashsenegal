import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Box, Card, CardHeader } from '@mui/material';
import { useContext } from 'react';
import { Leftcontext } from '../Context/Leftcontext';
// utils

//
import  BaseOptionChart  from './BaseOptionChart';
import { makeStyles } from '@material-ui/core';
// ----------------------------------------------------------------------

const CHART_DATA = [{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }];
const useStyles = makeStyles({
    userchart : {
        boxShadow:' rgb(145, 158 ,171 , 24%) 0px 0px 2px 0px, rgb(145, 158, 171, 24%) 0px 16px 32px -4px',
         borderRadius: '16px'
    }
})

export default function Chartuser() {


    //light or dark
    const {islight, light, dark} = useContext(Leftcontext)
    const theme = islight ? light : dark

    const classe = useStyles()
  const chartOptions = merge(BaseOptionChart(), {
    // tooltip: {
    //   marker: { show: false },
    //   y: {
    //     formatter: (seriesName) => fNumber(seriesName),
    //     title: {
    //       formatter: (seriesName) => `#${seriesName}`
    //     }
    //   }
    // },
    plotOptions: {
      bar: { horizontal: true, barHeight: '28%', borderRadius: 2 }
    },
    xaxis: {
      categories: [
        'Italy',
        'Japan',
        'China',
        'Canada',
        'France',
        'Germany',
        'South Korea',
        'Netherlands',
        'United States',
        'United Kingdom'
      ]
    }
  });

  return (
    <Card className={classe.userchart} sx={{backgroundColor : theme.chart, color : theme.color}}>
      <CardHeader title="Conversion Rates" subheader="(+43%) than last year" />
      <Box sx={{ mx: 3 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
