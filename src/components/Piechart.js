import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classe from './homepage.module.css'
import { Leftcontext } from '../Context/Leftcontext';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {
    const {islight, light, dark} = useContext(Leftcontext)
    const theme = islight ? light : dark
    const data = {
        labels : ['Jan','Feb','Mar'],
        datasets : [
            {
                label : 'sales for the 5 first months',
                data : [3, 2 , 2],
                backgroundColor: [
                    '#7fffd4',
                    'rgb(208, 242, 255)',
                    'rgb(255, 247, 205)',
                    
                  ],
                 
            },
            
        ]
    }

    const options = {
        title : {
            display : true,
            text : 'Line chart'
        }
    }
    return ( 
        <div style={{backgroundColor :theme.chart, color : theme.color }} className={classe.pie}>
            <div className={classe.title}>the overall managment</div>
            <Pie data={data} />
        </div>
     );
}
 
export default Piechart;