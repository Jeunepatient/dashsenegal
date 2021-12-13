import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
import { useContext } from 'react';
import { Leftcontext } from '../Context/Leftcontext';
// material
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
import { makeStyles } from '@material-ui/core'
//
import  BaseOptionChart  from './BaseOptionChart';;
;
// ----------------------------------------------------------------------


const useStyles = makeStyles({
    userscatter : {
        boxShadow:' rgb(145, 158 ,171 , 24%) 0px 0px 2px 0px, rgb(145, 158, 171, 24%) 0px 16px 32px -4px',
         borderRadius: '16px'
    }
})

const CHART_HEIGHT = 392;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(2),
  '& .apexcharts-canvas svg': {
    height: CHART_HEIGHT
  },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible'
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`
  }
}));

// ----------------------------------------------------------------------

const CHART_DATA = [
  { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
  { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
  { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] }
];



export default function Chartscatter() {

const {islight, light, dark} = useContext(Leftcontext)
const themeui = islight ? light : dark
  const theme = useTheme();
  const classe = useStyles()

  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2 },
    fill: { opacity: 0.48 },
    legend: { floating: true, horizontalAlign: 'center' },
    xaxis: {
      categories: ['Dakar', 'Conakry', 'Accra', 'Abijan', 'Newyork', 'rabba'],
      labels: {
        style: {
          colors: [
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary,
            theme.palette.text.secondary
          ]
        }
      }
    }
  });

  return (
    <Card className={classe.userscatter} sx={{backgroundColor : themeui.chart, color : themeui.color}}>
      <CardHeader title="hanbour situation" />
      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="radar" series={CHART_DATA} options={chartOptions} height={340} />
      </ChartWrapperStyle>
    </Card>
  );
}
