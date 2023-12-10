import classNames from 'classnames';
import styles from './body.module.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
} from 'chart.js';
import { styled } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import 'chartjs-plugin-zoom';
import Zoom from 'chartjs-plugin-zoom';
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import DropDownCall from './Dropdown_call';
import { useModelContext } from '../../ModelContext';
import LoadingModal from '../../LoadingModal';
import { MyCalendar } from '../calendar/calendar';



export interface BodyProps {
    className?: string;
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: 'rgba(51, 204, 204, 1)',
        fontFamily: 'PublicSansSemiBold'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'PublicSansMedium'
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableRowMetrics = styled(TableRow)(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0)',
}));




ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Zoom
);


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const NangkaOptions = {
    responsive: true,
    scales: {
        y: {
            border: {
                color: 'rgba(79, 240, 255, 1)',
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            title: {
                display: true,
                text: 'Water Level (meters)',
                color: 'white',
                font: {
                    size: 13
                }
            },
            suggestedMin: 15,  // Set the minimum value for the y-axis
            suggestedMax: 16.5,  // Set the maximum value for the y-axis
        },
        x: {
            border: {
                color: 'rgba(79, 240, 255, 1)'
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            title: {
                display: true,
                text: 'TIME/DATE (LOCAL TIME)',
                color: 'white',
                font: {
                    size: 13
                }
            },
        },

    },
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'xy',
            },
            zoom: {
                wheel: {
                    enabled: true,
                },
                pinch: {
                    enabled: true,
                },
                mode: 'xy',
                minZoom: 100, // adjust this value based on your needs
                maxZoom: 100,
            },
        },
    },
};

const MiniNangkaOptions = {
    responsive: true,
    scales: {
        y: {
            border: {
                color: 'rgba(79, 240, 255, 1)',
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            ticks: {
                display: false, // Set to false to hide y-axis data point values
            },
            suggestedMin: 15,  // Set the minimum value for the y-axis
            suggestedMax: 16.5,  // Set the maximum value for the y-axis 
        },
        x: {
            border: {
                color: 'rgba(79, 240, 255, 1)'
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            ticks: {
                display: false, // Set to false to hide y-axis data point values
            },
        },

    },
    plugins: {
        title: {
            display: true,
            text: 'Nangka',
        },
    },
};

const StoNinoOptions = {
    responsive: true,
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'xy',
            },
            zoom: {
                wheel: {
                    enabled: true,
                },
                pinch: {
                    enabled: true,
                },
                mode: 'xy',
                minZoom: 100, // adjust this value based on your needs
                maxZoom: 100,
            },
        },
    },
    scales: {
        y: {
            border: {
                color: 'rgba(79, 240, 255, 1)',
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            title: {
                display: true,
                text: 'Water Level (meters)',
                color: 'white',
                font: {
                    size: 13
                }
            },
            suggestedMin: 9.5,  // Set the minimum value for the y-axis
            suggestedMax: 14,  // Set the maximum value for the y-axis 
        },
        x: {
            border: {
                color: 'rgba(79, 240, 255, 1)'
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            title: {
                display: true,
                text: 'TIME/DATE (LOCAL TIME)',
                color: 'white',
                font: {
                    size: 13
                }
            }
        },

    },
};

const MiniStoNinoOptions = {
    responsive: true,
    scales: {
        y: {
            border: {
                color: 'rgba(79, 240, 255, 1)',
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            ticks: {
                display: false, // Set to false to hide y-axis data point values
            },
            suggestedMin: 9.5,  // Set the minimum value for the y-axis
            suggestedMax: 14,  // Set the maximum value for the y-axis 
        },
        x: {
            border: {
                color: 'rgba(79, 240, 255, 1)'
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            ticks: {
                display: false, // Set to false to hide y-axis data point values
            },
        },

    },
    plugins: {
        title: {
            display: true,
            text: 'Sto Nino',
        },
    },
};

const MontalbanOptions = {
    responsive: true,
    plugins: {
        zoom: {
            pan: {
                enabled: true,
                mode: 'xy',
            },
            zoom: {
                wheel: {
                    enabled: true,
                },
                pinch: {
                    enabled: true,
                },
                mode: 'xy',
                minZoom: 100, // adjust this value based on your needs
                maxZoom: 100,
            },
        },
    },
    scales: {
        y: {
            border: {
                color: 'rgba(79, 240, 255, 1)',
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            title: {
                display: true,
                text: 'Water Level (meters)',
                color: 'white',
                font: {
                    size: 13
                }
            },
            suggestedMin: 20,  // Set the minimum value for the y-axis
            suggestedMax: 23,  // Set the maximum value for the y-axis 
        },
        x: {
            border: {
                color: 'rgba(79, 240, 255, 1)'
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            title: {
                display: true,
                text: 'TIME/DATE (LOCAL TIME)',
                color: 'white',
                font: {
                    size: 13
                }
            }
        },

    },
};

const MiniMontalbanOptions = {
    responsive: true,
    scales: {
        y: {
            border: {
                color: 'rgba(79, 240, 255, 1)',
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            ticks: {
                display: false, // Set to false to hide y-axis data point values
            },
            suggestedMin: 20,  // Set the minimum value for the y-axis
            suggestedMax: 23,  // Set the maximum value for the y-axis 
        },
        x: {
            border: {
                color: 'rgba(79, 240, 255, 1)'
            },
            grid: {
                color: 'rgba(79, 240, 255, 1)',
                drawOnChartArea: false,
            },
            ticks: {
                display: false, // Set to false to hide y-axis data point values
            },
        },

    },
    plugins: {
        title: {
            display: true,
            text: 'Montalban',
        },
    },
};




interface rivercastTrueVal {
    DateTime: Date;
    'T.Waterlevel': number;
    'T.Waterlevel-1': number;
    'T.Waterlevel-2': number;
    'T.Waterlevel-3': number;
}
interface rivercastPredVal {
    DateTime: Date;
    'P.Waterlevel': number;
    'P.Waterlevel-1': number;
    'P.Waterlevel-2': number;
    'P.Waterlevel-3': number;
}
interface rivercastDateRange {
    Datetime: Date;
}


interface bidirectionalDateRange {
    Datetime: Date;
}


interface bidirectionalTrueVal {
    DateTime: Date;
    'T.Waterlevel': number;
    'T.Waterlevel-1': number;
    'T.Waterlevel-2': number;
    'T.Waterlevel-3': number;
}

interface bidirectionalPredVal {
    DateTime: Date;
    'P.Waterlevel': number;
    'P.Waterlevel-1': number;
    'P.Waterlevel-2': number;
    'P.Waterlevel-3': number;
}
function formatDate(dateTimeString: string | number | Date) {
    const options = { month: 'short', day: 'numeric', hour: 'numeric', hour12: true };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
    return formattedDate;
}

interface rivercastMAE {
    Date: Date;
    'MAE': number;
}

interface bidirectionalMAE {
    Date: Date;
    'MAE': number;
}

interface rivercastTotMAE{
    index: number;
    'aMAE': number;
    'std': number;
}

interface bidirectionalTotMAE{
    index: number;
    'aMAE': number;
    'std': number;
}
interface pvalData{
    index: number;
    'pvalue': number;
}

interface paramsData{
    'RF-Intensity': number;
    'RF-Intensity.1': number;
    'RF-Intensity.2': number;
}
interface WBparamsData{
    'loc1_temp': number;
    'loc1_humidity': number;
    'loc1_precipitation': number;

    'loc2_temp': number;
    'loc2_humidity': number;
    'loc2_precipitation': number;

    'loc3_temp': number;
    'loc3_humidity': number;
    'loc3_precipitation': number;
}




export const Body = ({ className }: BodyProps) => {
    const [rivercastTrueValData, setrivercastTrueValData] = useState<rivercastTrueVal[]>([]);
    const [rivercastPredData, setrivercastPredData] = useState<rivercastPredVal[]>([]);


    const [bidirectionalTrueValData, setbidirectionalTrueValData] = useState<bidirectionalTrueVal[]>([]);
    const [bidirectionalPredData, setbidirectionalPredData] = useState<bidirectionalPredVal[]>([]);
    const [selectedChart, setSelectedChart] = useState('nangka');
    const [getDateRangeLabels, setgetDateRangeLabels] = useState('False');

    const [rivercastMAE_Data, setrcMAEDATA] = useState<rivercastMAE[]>([]);
    const [bidirectionalMAE_Data, setbiMAEDATA] = useState<bidirectionalMAE[]>([]);

    const [pValue_Data, setpValue] = useState<pvalData[]>([]);

    const [rcTotMAE, setrcTotMAE] = useState<rivercastTotMAE[]>([]);
    const [biTotMAE, setbiTotMAE] = useState<bidirectionalTotMAE[]>([]);

    const [params, setParams] = useState<paramsData[]>([]);
    const [Addedparams, setAddedParams] = useState<WBparamsData[]>([]);

    const { selectedModel, setSelectedModel} = useModelContext();

    const [rivercastDateRangeData, setrivercastDateRangeData] = useState<rivercastDateRange[]>([]);
    const [bidirectionalDateRangeData, setbidirectionalDateRangeData] = useState<bidirectionalDateRange[]>([]);

    


    const [loading, setLoading] = useState(true);


    const handleDataFetchComplete = () => {
      setLoading(false);
    };

    useEffect(() => {
        // Fetch data for Rivercast Model
        const fetchLatestData = async () => {
          try {
            setLoading(true);
      
            const response = await fetch('http://127.0.0.1:5000/updateModelData');
      
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
      
            const updateModelData = await response.json();
      
            // Process updateModelData as needed
            // ...
      
          } catch (error) {
            console.error('Error fetching or parsing Rivercast Model data:', error);
          } finally {
            setLoading(false);
            handleDataFetchComplete
          }
        };
      
        fetchLatestData();
      }, []);


      useEffect(() => {
        // Fetch data for Rivercast Model
        const fetchParamsData = async () => {
            try {
                const paramsResponse = await fetch('http://localhost:3001/api/params/parameters');
                const AddedParamsResponse = await fetch('http://localhost:3001/api/addedparams/added_parameters');

                const paramsData = await paramsResponse.json();

                const AddedparamsData = await AddedParamsResponse.json();
                
                setParams(paramsData);
                setAddedParams(AddedparamsData);

            } catch (error) {
                console.error('Error fetching Parameters data:', error);
            }
        };

        // Execute both fetch functions
        fetchParamsData();
    }, []);
    
  

    
    useEffect(() => {
        // Fetch data for Rivercast Model
        const fetchRivercastData = async () => {
            try {
                const trueValuesResponse = await fetch('http://localhost:3001/api/data/rivercast_waterlevel_obs');
                const predictedValuesResponse = await fetch('http://localhost:3001/api/data/rivercast_waterlevel_prediction');
                const rc_MAE = await fetch('http://localhost:3001/api/rcmae/rivercast_df_with_MAE');
                const rc_tot_MAE = await fetch('http://localhost:3001/api/totrcmae/rivercast_overall_MAEs');

                const trueValuesData = await trueValuesResponse.json();
                const predictedValuesData = await predictedValuesResponse.json();
                const rc_MAE_Data = await rc_MAE.json();
                const rc_tot_MAE_Data = await rc_tot_MAE.json()
                
                setrivercastTrueValData(trueValuesData);
                setrivercastPredData(predictedValuesData);
                setrcMAEDATA(rc_MAE_Data);
                setrcTotMAE(rc_tot_MAE_Data);

            } catch (error) {
                console.error('Error fetching Rivercast Model data:', error);
            }
        };

        // Fetch data for Bidirectional Model
        const fetchBidirectionalData = async () => {
            try {
                const trueValuesResponse = await fetch('http://localhost:3001/api/data/bidirectional_waterlevel_obs');
                const predictedValuesResponse = await fetch('http://localhost:3001/api/data/bidirectional_waterlevel_prediction');
                const bi_MAE = await fetch('http://localhost:3001/api/bimae/bidirectional_df_with_MAE');
                const bi_tot_MAE = await fetch('http://localhost:3001/api/totbimae/bidirectional_overall_MAEs');


                const trueValuesData = await trueValuesResponse.json();
                const predictedValuesData = await predictedValuesResponse.json();
                const bi_MAE_Data = await bi_MAE.json();
                const bi_tot_MAE_Data = await bi_tot_MAE.json()

                setbiMAEDATA(bi_MAE_Data);
                setbidirectionalTrueValData(trueValuesData);
                setbidirectionalPredData(predictedValuesData);
                setbiTotMAE(bi_tot_MAE_Data);
                
            } catch (error) {
                console.error('Error fetching Bidirectional Model data:', error);
            }
        };

        const fetchpValue = async () => {
            try {
                const pValRes = await fetch('http://localhost:3001/api/pval/pvalue');
                const pVal_Data = await pValRes.json();

                setpValue(pVal_Data);

                
            } catch (error) {
                console.error('Error fetching Bidirectional Model data:', error);
            }
        };

        // Execute both fetch functions
        fetchRivercastData();
        fetchBidirectionalData();
        fetchpValue();
    }, []);
    
    const fetchMetrics = async () => {
        try {
            const bi_MAE = await fetch('http://localhost:3001/api/bimae/bidirectional_df_with_MAE');
            const bi_tot_MAE = await fetch('http://localhost:3001/api/totbimae/bidirectional_overall_MAEs');
            const rc_MAE = await fetch('http://localhost:3001/api/rcmae/rivercast_df_with_MAE');
            const rc_tot_MAE = await fetch('http://localhost:3001/api/totrcmae/rivercast_overall_MAEs');

            const bi_MAE_Data = await bi_MAE.json();
            const bi_tot_MAE_Data = await bi_tot_MAE.json()
            const rc_MAE_Data = await rc_MAE.json();
            const rc_tot_MAE_Data = await rc_tot_MAE.json()

            setbiMAEDATA(bi_MAE_Data);
            setbiTotMAE(bi_tot_MAE_Data);
            setrcMAEDATA(rc_MAE_Data);
            setrcTotMAE(rc_tot_MAE_Data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const fetchRivercastData = async () => {
        try {
            const trueValuesResponse = await fetch('http://localhost:3001/api/data/rivercast_waterlevel_obs');
            const rc_MAE = await fetch('http://localhost:3001/api/rcmae/rivercast_df_with_MAE');
            const rc_tot_MAE = await fetch('http://localhost:3001/api/totrcmae/rivercast_overall_MAEs');

            const trueValuesData = await trueValuesResponse.json();
            const rc_MAE_Data = await rc_MAE.json();
            const rc_tot_MAE_Data = await rc_tot_MAE.json()
            
            setrivercastTrueValData(trueValuesData);
            setrcMAEDATA(rc_MAE_Data);
            setrcTotMAE(rc_tot_MAE_Data);
            console.log('Fetch RC True Success')
        } catch (error) {
            console.error('Error fetching Rivercast Model data:', error);
        }
    };

    // Fetch data for Bidirectional Model
    const fetchBidirectionalData = async () => {
        try {
            const trueValuesResponse = await fetch('http://localhost:3001/api/data/bidirectional_waterlevel_obs');
            const bi_MAE = await fetch('http://localhost:3001/api/bimae/bidirectional_df_with_MAE');
            const bi_tot_MAE = await fetch('http://localhost:3001/api/totbimae/bidirectional_overall_MAEs');


            const trueValuesData = await trueValuesResponse.json();
            const bi_MAE_Data = await bi_MAE.json();
            const bi_tot_MAE_Data = await bi_tot_MAE.json()

            setbiMAEDATA(bi_MAE_Data);
            setbidirectionalTrueValData(trueValuesData);
            setbiTotMAE(bi_tot_MAE_Data);
            console.log('Fetch Bi True Success')
        } catch (error) {
            console.error('Error fetching Bidirectional Model data:', error);
        }
    };

    const fetchRivercastDataPred = async () => {
        try {

            const predictedValuesResponse = await fetch('http://localhost:3001/api/data/rivercast_waterlevel_prediction');
            const predictedValuesData = await predictedValuesResponse.json();

            setrivercastPredData(predictedValuesData);
            console.log('Fetch RC True Success')
        } catch (error) {
            console.error('Error fetching Rivercast Model data:', error);
        }
    };

    // Fetch data for Bidirectional Model
    const fetchBidirectionalDataPred = async () => {
        try {
                const predictedValuesResponse = await fetch('http://localhost:3001/api/data/bidirectional_waterlevel_prediction');



                const predictedValuesData = await predictedValuesResponse.json();


                setbidirectionalPredData(predictedValuesData);
            console.log('Fetch Bi True Success')
        } catch (error) {
            console.error('Error fetching Bidirectional Model data:', error);
        }
    };

    const fetchDateRange = async (formattedStartDate: string, formattedEndDate: string) => {
        try {
          // Use the received parameters directly
          const sDate = formattedStartDate;
          const eDate = formattedEndDate;
      
          console.log(sDate, eDate);
      
          const rc_DR = await fetch(`http://localhost:3001/api/data/rivercast_daterange_data/${sDate}/${eDate}`);
          const rc_DR_Data = await rc_DR.json();
      
          const bi_DR = await fetch(`http://localhost:3001/api/data/bidirectional_daterange_data/${sDate}/${eDate}`);
          const bi_DR_Data = await bi_DR.json();
      
          setrivercastTrueValData(rc_DR_Data);
          setrivercastPredData(rc_DR_Data);
          setbidirectionalTrueValData(bi_DR_Data);
          setbidirectionalPredData(bi_DR_Data);
          setrivercastDateRangeData(rc_DR_Data);
          setbidirectionalDateRangeData(bi_DR_Data);
          setgetDateRangeLabels('True')

          console.log(rc_DR_Data)
          
        } catch (error) {
          console.error(error);
        }
      };

    const [selectedFilter, setSelectedFilter] = useState('All');
    // data values for rivercast
    const rivercast_nangkaChart = {
        labels: getDateRangeLabels === 'False' ? rivercastPredData.map((item) => formatDate(item.DateTime)) : rivercastDateRangeData.map((item) => formatDate(item.Datetime)),
        datasets: [
          selectedFilter === 'All' || selectedFilter === 'Actual'
            ? {
                fill: true,
                label: 'Actual',
                data: rivercastTrueValData.map((item) => item['T.Waterlevel']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
              }
            : null,
          selectedFilter === 'All' || selectedFilter === 'Predicted'
            ? {
                fill: true,
                label: 'Predicted',
                data: rivercastPredData.map((item) => item['P.Waterlevel']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
              }
            : null,
        ].filter(Boolean), // Remove null entries from the array
      };

    const rivercast_stoninoChart = {
        labels: getDateRangeLabels === 'False' ? rivercastPredData.map((item) => formatDate(item.DateTime)) : rivercastDateRangeData.map((item) => formatDate(item.Datetime)),
        datasets: [
          selectedFilter === 'All' || selectedFilter === 'Actual'
            ? {
                fill: true,
                label: 'Actual',
                data: rivercastTrueValData.map((item) => item['T.Waterlevel-1']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
              }
            : null,
          selectedFilter === 'All' || selectedFilter === 'Predicted'
            ? {
                fill: true,
                label: 'Predicted',
                data: rivercastPredData.map((item) => item['P.Waterlevel-1']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
              }
            : null,
        ].filter(Boolean), // Remove null entries from the array
    };

    const rivercast_montalbanChart = {
        labels: getDateRangeLabels === 'False' ? rivercastPredData.map((item) => formatDate(item.DateTime)) : rivercastDateRangeData.map((item) => formatDate(item.Datetime)),
        datasets: [
          selectedFilter === 'All' || selectedFilter === 'Actual'
            ? {
                fill: true,
                label: 'Actual',
                data: rivercastTrueValData.map((item) => item['T.Waterlevel-3']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
              }
            : null,
          selectedFilter === 'All' || selectedFilter === 'Predicted'
            ? {
                fill: true,
                label: 'Predicted',
                data: rivercastPredData.map((item) => item['P.Waterlevel-3']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
              }
            : null,
        ].filter(Boolean), // Remove null entries from the array
    };

    // data values for bidirectional
    const bidirectional_nangkaChart = {
        labels: getDateRangeLabels === 'False' ? bidirectionalPredData.map((item) => formatDate(item.DateTime)) : bidirectionalDateRangeData.map((item) => formatDate(item.Datetime)),
        datasets: [
          selectedFilter === 'All' || selectedFilter === 'Actual'
            ? {
                fill: true,
                label: 'Actual',
                data: bidirectionalTrueValData.map((item) => item['T.Waterlevel']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
              }
            : null,
          selectedFilter === 'All' || selectedFilter === 'Predicted'
            ? {
                fill: true,
                label: 'Predicted',
                data: bidirectionalPredData.map((item) => item['P.Waterlevel']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
              }
            : null,
        ].filter(Boolean), // Remove null entries from the array
      };

    const bidirectional_stoninoChart = {
        labels: getDateRangeLabels === 'False' ? bidirectionalPredData.map((item) => formatDate(item.DateTime)) : bidirectionalDateRangeData.map((item) => formatDate(item.Datetime)),
        datasets: [
          selectedFilter === 'All' || selectedFilter === 'Actual'
            ? {
                fill: true,
                label: 'Actual',
                data: bidirectionalTrueValData.map((item) => item['T.Waterlevel-1']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
              }
            : null,
          selectedFilter === 'All' || selectedFilter === 'Predicted'
            ? {
                fill: true,
                label: 'Predicted',
                data: bidirectionalPredData.map((item) => item['P.Waterlevel-1']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
              }
            : null,
        ].filter(Boolean), // Remove null entries from the array
      };

    const bidirectional_montalbanChart = {
        labels: getDateRangeLabels === 'False' ? bidirectionalPredData.map((item) => formatDate(item.DateTime)) : bidirectionalDateRangeData.map((item) => formatDate(item.Datetime)),
        datasets: [
          selectedFilter === 'All' || selectedFilter === 'Actual'
            ? {
                fill: true,
                label: 'Actual',
                data: bidirectionalTrueValData.map((item) => item['T.Waterlevel-3']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
              }
            : null,
          selectedFilter === 'All' || selectedFilter === 'Predicted'
            ? {
                fill: true,
                label: 'Predicted',
                data: bidirectionalPredData.map((item) => item['P.Waterlevel-3']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
              }
            : null,
        ].filter(Boolean), // Remove null entries from the array
      };

    const stationName = () => {
        switch (selectedChart) {
            case 'nangka':
                return 'Nangka';
            case 'stonino':
                return 'Sto. Nino';
            case 'montalban':
                return 'Montalban';
            default:
                return '';
        }
    };
     // Check if data is available
  if (!rivercastMAE_Data || !bidirectionalMAE_Data) {
    // Render loading state or return null
    return <p>Loading...</p>;
  }
    

    function createData(
        time: Date,
        m1: number,
        m2: number,
    ) {
        return { time, m1, m2};
    }


    function createData2(
        m3: number,
        m4: number,
        m5: number,
        m6: number,
    ) {
        return {m3, m4, m5, m6};
    }

    function createData3(
        m1: number,
    ) {
        return {m1}
    }

    function createData4(
        m1: number,
        m2: number,
        m3: number,
    ) {
        return {m1, m2, m3};
    }

    function createData5(
        m1: number,
        m2: number,
        m3: number,

        m4: number,
        m5: number,
        m6: number,

        m7: number,
        m8: number,
        m9: number,
    ) {
        return {m1, m2, m3, m4, m5, m6, m7, m8, m9};
    }



  // Map the data and create rows
  const rows = rivercastMAE_Data.map((item, index) =>
    createData(
      new Date(item['DateTime']),
      item['MAE'],
      bidirectionalMAE_Data[index] ? bidirectionalMAE_Data[index]['MAE'] : 0,
    )

  );

  const totMAEsRow = rcTotMAE.map((item, index) =>
    createData2(
        item['aMAE'],
        biTotMAE[index] ? biTotMAE[index]['aMAE'] : 0,
        item['std'],
        biTotMAE[index] ? biTotMAE[index]['std'] : 0,
    )
    );

    const getParameters = params.map((item, index) =>
    createData4(
        item['RF-Intensity'],
        item['RF-Intensity.1'],
        item['RF-Intensity.2'],
    )
    );

    const getAddedParams = Addedparams.map((item, index) =>
    createData5(
        item['loc1_temp'],
        item['loc1_humidity'],
        item['loc1_precipitation'],

        item['loc2_temp'],
        item['loc2_humidity'],
        item['loc2_precipitation'],

        item['loc3_temp'],
        item['loc3_humidity'],
        item['loc3_precipitation'],
    )
    );


    console.log(getParameters)
    const pValsRow = pValue_Data.map((item, index) =>
    createData3(
        item['pvalue'],
    )
    );
    

    const checkForNewData = () => {
        // Fetch data for Rivercast Model
        const fetchTrueValRC = async () => {
            try {
                const updateTrueRC = await fetch('http://127.0.0.1:5000/addRCTrueValuesToDB');
                const updateTrueRCRes = await updateTrueRC.json()
                

                console.log(updateTrueRCRes)
                fetchRivercastData()
            } catch (error) {
                console.error('Error fetching Forecast Rivercast Model data:', error);
            }
        };
        const fetchTrueValBi = async () => {
            try {
                const updatePredictionBi = await fetch('http://127.0.0.1:5000/addBiTrueValuesToDB');
                const updateTrueValuesBiRes = await updatePredictionBi.json()
                console.log(updateTrueValuesBiRes)
                fetchBidirectionalData()
            } catch (error) {
                console.error('Error fetching Forecast Bidirectional Model data:', error);
            }
        };
        {selectedModel === 'rivercast' ? fetchTrueValRC() : fetchTrueValBi()}
    }

    const checkForNewDataPred = () => {
        // Fetch data for Rivercast Model
        const fetchPredValRC = async () => {
            try {
                const updatePredRC = await fetch('http://127.0.0.1:5000/addRCPredictionToDB');
                const updatePredRCRes = await updatePredRC.json()

                console.log(updatePredRCRes)
                fetchRivercastDataPred()
            } catch (error) {
                console.error('Error fetching Forecast Rivercast Model data:', error);
            }
        };
        const fetchPredValBi = async () => {
            try {
                const updatePredictionBi = await fetch('http://127.0.0.1:5000/addBiPredictionToDB');
                const updatePredValuesBiRes = await updatePredictionBi.json()
                console.log(updatePredValuesBiRes)
                fetchBidirectionalDataPred()
            } catch (error) {
                console.error('Error fetching Forecast Bidirectional Model data:', error);
            }
        };
        {selectedModel === 'rivercast' ? fetchPredValRC() : fetchPredValBi()}
    }

    const getMetrics = () => {
        // Fetch data for Rivercast Model
        const fetchTrueValRC = async () => {
            try {
                const updateRCMae = await fetch('http://127.0.0.1:5000/getrivercastMAE');
                const updateRCMaeRes = await updateRCMae.json()

                const updateBiMae = await fetch('http://127.0.0.1:5000/getBidirectionalMAE');
                const updateBiMaeRes = await updateBiMae.json()

                console.log(updateRCMaeRes)
                console.log(updateBiMaeRes)
                fetchMetrics()
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTrueValRC()
    }


    const sortedRows = [...rows].sort((a, b) => b.time - a.time);


    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.headersss}>
            <div className={styles.left}>
                <img
                    className={styles.logo}
                    src={
                        'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1695638696/logo-rivercast_tjxykb.png'
                    }
                />
                <span className={styles.navbar_title}>RIVERCAST</span>
            </div>
            <div className={styles.center}>
            <h4
                className={classNames(styles.header_models, {
                    [styles.selected]: selectedModel === 'rivercast',
                })}
                onClick={() => setSelectedModel('rivercast')}
                >
                RiverCast
                </h4>
                <h4
                className={classNames(styles.header_models, {
                    [styles.selected]: selectedModel === 'bidirectional',
                })}
                onClick={() => setSelectedModel('bidirectional')}
                >
                Bidirectional
            </h4>
            </div>
            <div className={styles.right}>
                <img
                    src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699599675/fi-bs-target_yyiify.png"
                    alt=""
                    className={styles.mae_logo}
                    onClick={checkForNewData}
                />
                <img
                    src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1700649214/fi-bs-target_yyiify_1_copy_a9e2qy.png"
                    alt=""
                    className={styles.mae_logo1}
                    onClick={checkForNewDataPred}
                />
                 <LoadingModal loading={loading} />
                        {!loading && (
                <div className={styles.text_mae}>
               
                    <span className={styles.mae_title}>Mean Absolute Error</span>
                    {totMAEsRow.map((row, index) => (
                        <span key={index} className={styles.mae_result}>
                            
                            {selectedModel === 'rivercast' ? row.m3 : row.m4}
                        
                        </span>
                        
                    ))}
                    
                </div>
                )}           
            </div>
            </div>
            <div className={styles['top-body']}>
                <div className={styles['graph-results']}>
            <div className={styles['selected-graph']}>
                            <div className={styles['station-container']}>
                            <div className={styles['station-legend']}>
                                    <span className={styles['station-span']}>Station</span>
                                    <span className={styles['station-name']}>{stationName()}</span>
            </div>
            <div className={styles['color-legends']}>
                                    <span className={styles['f-legend']}>
                                        <img
                                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699772426/bob_r5at7s.png"
                                            alt=""
                                            className={styles['blob-blue']}
                                        />
                                        Actual
                                    </span>
                                    <span className={styles['f-legend']}>
                                        <img
                                            src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699772425/bob_1_qj5e3p.png"
                                            alt=""
                                            className={styles['blob-yellow']}
                                        />
                                        Predicted
                                    </span>
                                </div>
                                
                            <div className={styles['drop-down']}>
                                <div className={styles['dd-title']}>
                                    <span className={styles['drop-down-text']}>FILTER</span>
                                </div>
                                <DropDownCall setSelectedFilter={setSelectedFilter} />

                            </div>

                            </div>

            <LoadingModal loading={loading} />
                {!loading && (
                <div className={styles['inside-chart']}>
                {selectedChart === 'nangka' ? (
                    <Line options={NangkaOptions} data={selectedModel === 'rivercast' ? rivercast_nangkaChart : bidirectional_nangkaChart} className={styles['graph-class']} />
                ) : null}
                {selectedChart === 'stonino' ? (
                        <Line options={StoNinoOptions} data={selectedModel === 'rivercast' ? rivercast_stoninoChart : bidirectional_stoninoChart} className={styles['graph-class']} />
                ) : null}
                {selectedChart === 'montalban' ? (
                        <Line options={MontalbanOptions} data={selectedModel === 'rivercast' ? rivercast_montalbanChart : bidirectional_montalbanChart} className={styles['graph-class']} />
                ) : null}
                
                </div>
                )}
            </div>
            
                <div className={styles['selection-graph']}>
                
                <div
                    className={classNames(styles['mini-results'], {
                        [styles['selected']]: selectedChart === 'nangka',
                    })}
                    onClick={() => setSelectedChart('nangka')}
                >
                    <LoadingModal loading={loading} />
                {!loading && (
                    <div className={styles['graph-mini-class']}>
                        <Line options={MiniNangkaOptions} data={selectedModel === 'rivercast' ? rivercast_nangkaChart : bidirectional_nangkaChart} className={styles['graph-class']} />
                    </div>
                    )}
                </div>
                  
                <div
                    className={classNames(styles['mini-results'], {
                        [styles['selected']]: selectedChart === 'stonino',
                    })}
                    onClick={() => setSelectedChart('stonino')}
                ><LoadingModal loading={loading} />
                {!loading && (
                    <div className={styles['graph-mini-class']}>
                        <Line options={MiniStoNinoOptions} data={selectedModel === 'rivercast' ? rivercast_stoninoChart : bidirectional_stoninoChart} className={styles['graph-class']} />
                    </div>
                     )}
                </div>
                <div
                    className={classNames(styles['mini-results'], {
                        [styles['selected']]: selectedChart === 'montalban',
                    })}
                    onClick={() => setSelectedChart('montalban')}
                ><LoadingModal loading={loading} />
                {!loading && (
                    
                    <div className={styles['graph-mini-class']}>
                        <Line options={MiniMontalbanOptions} data={selectedModel === 'rivercast' ? rivercast_montalbanChart : bidirectional_montalbanChart} className={styles['graph--class']} />
                    </div>
                    )}
                </div>
                
            </div>
                        </div>
                <div className={styles['table-results']}>
                    <div className={styles['select-station']}>
                        <div className={styles.stations}>
                            <div className={styles['rangesContainer']}>
                            <div className={styles['date-range']}>
                                <div className={styles['dd-title']}>
                                    <span className={styles['drop-down-text']}>DATE RANGE</span>
                                </div>
                                <div className={styles['date-range-div']}>
                                    <MyCalendar onDateRangeChange={fetchDateRange}/>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles['tabular-results']}>
                        <div className={styles['title-bar-visualize']}>
                            <img
                                src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699771433/icon_urry4k.png"
                                alt=""
                                className={styles['icon-title-bar']}
                                onClick={getMetrics}
                            />
                            <span className={styles['title-vf']}>Weather Highlights</span>
                        </div>
                            <div className={styles['params-main-container']}>
                            <span className={styles['station-title']}>
                                    Nangka
                            </span>
                        
                            <div className={styles['inner-params-container']}>
                            <div className={styles['params']}>
                                <div className={styles['params-title-container']}>
                                
                                <span className={styles['params-title']}>Temperature</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-temp']}>{row.m1.toFixed(2)} °C</span>
                                ))}
                                </div>

                                <div className={styles['params-icon-temp']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175889/Vector_tspz8j.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Rainfall-1</span>
                                {getParameters.map((row, index) => (
                                <span className={styles['params-value-preci1']}>{row.m2.toFixed(2)} mm</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-preci1']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Vector_1_cs5hdn.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Humidity</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-humi']}>{row.m2.toFixed(2)} g</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-humi']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Group_3127_sbtbsa.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Rainfall-2</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-preci2']}>{row.m3.toFixed(2)} mm</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-preci2']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Vector_2_nthhsh.png"}/>
                                </div>
                            </div>

                            </div>
                            


                            </div>
                            <div className={styles['params-main-container']}>
                            <span className={styles['station-title']}>
                                    Sto. Nino
                            </span>
                            <div className={styles['inner-params-container']}>
                            <div className={styles['params']}>
                                <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Temperature</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-temp']}>{row.m4.toFixed(2)}°C</span>
                                ))}
                                </div>

                                <div className={styles['params-icon-temp']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175889/Vector_tspz8j.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                            
                                <span className={styles['params-title']}>Rainfall-1</span>
                                {getParameters.map((row, index) => (
                                <span className={styles['params-value-preci1']}>{row.m1.toFixed(2)} mm</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-preci1']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Vector_1_cs5hdn.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Humidity</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-humi']}>{row.m5.toFixed(2)} g</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-humi']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Group_3127_sbtbsa.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Rainfall-2</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-preci2']}>{row.m6.toFixed(2)} mm</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-preci2']}>
                                    <img src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Vector_2_nthhsh.png"}/>
                                </div>
                            </div>

                            </div>

                            


                            </div>
                            

                            <div className={styles['params-main-container']}>
                            <span className={styles['station-title']}>
                                    Montalban
                            </span>
                            <div className={styles['inner-params-container']}>
                            <div className={styles['params']}>
                                <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Temperature</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-temp']}>{row.m7.toFixed(2)}°C</span>
                                ))}
                                </div>

                                <div className={styles['params-icon-temp']}>
                                    <img className={styles['params-icon']} src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175889/Vector_tspz8j.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Rainfall-1</span>
                                {getParameters.map((row, index) => (
                                <span className={styles['params-value-preci1']}>{row.m3.toFixed(2)} mm</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-preci1']}>
                                    <img className={styles['params-icon']} src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Vector_1_cs5hdn.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Humidity</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-humi']}>{row.m8.toFixed(2)} g</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-humi']}>
                                    <img className={styles['params-icon']} src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Group_3127_sbtbsa.png"}/>
                                </div>
                            </div>
                            <div className={styles['params']}>
                            <div className={styles['params-title-container']}>
                                <span className={styles['params-title']}>Rainfall-2</span>
                                {getAddedParams.map((row, index) => (
                                <span className={styles['params-value-preci2']}>{row.m9.toFixed(2)} mm</span>
                                ))}
                                </div>
                                <div className={styles['params-icon-preci2']}>
                                    <img className={styles['params-icon']} src={"https://res.cloudinary.com/dgb2lnz2i/image/upload/v1702175888/Vector_2_nthhsh.png"}/>
                                </div>
                            </div>

                            </div>


                            </div>
                           
                            
                    </div>
                </div>
            </div>

        </div>
    );
};
