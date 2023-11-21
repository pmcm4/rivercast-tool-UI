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
        title: {
            display: true,
            text: 'Nangka',
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
        title: {
            display: true,
            text: 'Sto. Nino',
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
        title: {
            display: true,
            text: 'Montalban',
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
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
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

export const Body = ({ className }: BodyProps) => {
    const [rivercastTrueValData, setrivercastTrueValData] = useState<rivercastTrueVal[]>([]);
    const [rivercastPredData, setrivercastPredData] = useState<rivercastPredVal[]>([]);

    const [bidirectionalTrueValData, setbidirectionalTrueValData] = useState<bidirectionalTrueVal[]>([]);
    const [bidirectionalPredData, setbidirectionalPredData] = useState<bidirectionalPredVal[]>([]);
    const [selectedChart, setSelectedChart] = useState('nangka');

    const [rivercastMAE_Data, setrcMAEDATA] = useState<rivercastMAE[]>([]);
    const [bidirectionalMAE_Data, setbiMAEDATA] = useState<bidirectionalMAE[]>([]);
    
    
    useEffect(() => {
        // Fetch data for Rivercast Model
        const fetchRivercastData = async () => {
            try {
                const trueValuesResponse = await fetch('http://localhost:3001/api/data/rivercast_waterlevel_obs');
                const predictedValuesResponse = await fetch('http://localhost:3001/api/data/rivercast_waterlevel_prediction');
                const rc_MAE = await fetch('http://localhost:3001/api/rcmae/rivercast_df_with_MAE');
                const trueValuesData = await trueValuesResponse.json();
                const predictedValuesData = await predictedValuesResponse.json();
                const rc_MAE_Data = await rc_MAE.json();

                setrcMAEDATA(rc_MAE_Data);
                setrivercastTrueValData(trueValuesData);
                setrivercastPredData(predictedValuesData);
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
                const trueValuesData = await trueValuesResponse.json();
                const predictedValuesData = await predictedValuesResponse.json();
                const bi_MAE_Data = await bi_MAE.json();

                setbiMAEDATA(bi_MAE_Data);
                setbidirectionalTrueValData(trueValuesData);
                setbidirectionalPredData(predictedValuesData);
            } catch (error) {
                console.error('Error fetching Bidirectional Model data:', error);
            }
        };

        // Execute both fetch functions
        fetchRivercastData();
        fetchBidirectionalData();
    }, []);
    const [selectedFilter, setSelectedFilter] = useState('All');
    // data values for rivercast
    const rivercast_nangkaChart = {
        labels: rivercastPredData.map((item) => formatDate(item.DateTime)),
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
        labels: rivercastPredData.map((item) => formatDate(item.DateTime)),
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
        labels: rivercastPredData.map((item) => formatDate(item.DateTime)),
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
        labels: bidirectionalPredData.map((item) => formatDate(item.DateTime)),
        datasets: [
            {
                fill: true,
                label: 'Actual',
                data: bidirectionalTrueValData.map((item) => item['T.Waterlevel']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
            },
            {
                fill: true,
                label: 'Predicted',
                data: bidirectionalPredData.map((item) => item['P.Waterlevel']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
            },
        ],

    };

    const bidirectional_stoninoChart = {
        labels: bidirectionalPredData.map((item) => formatDate(item.DateTime)),
        datasets: [
            {
                fill: true,
                label: 'Actual',
                data: bidirectionalTrueValData.map((item) => item['T.Waterlevel-1']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
            },
            {
                fill: true,
                label: 'Predicted',
                data: bidirectionalPredData.map((item) => item['P.Waterlevel-1']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
            },
        ],

    };

    const bidirectional_montalbanChart = {
        labels: bidirectionalPredData.map((item) => formatDate(item.DateTime)),
        datasets: [
            {
                fill: true,
                label: 'Actual',
                data: bidirectionalTrueValData.map((item) => item['T.Waterlevel-3']),
                borderColor: 'rgba(0, 206, 255, 1)',
                backgroundColor: 'rgba(24, 144, 255, 0.3)',
            },
            {
                fill: true,
                label: 'Predicted',
                data: bidirectionalPredData.map((item) => item['P.Waterlevel-3']),
                borderColor: 'rgba(219, 179, 110, 1)',
                backgroundColor: 'rgba(219, 179, 110, 0.3)',
            },
        ],

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
        return { time, m1, m2 };
    }
  // Map the data and create rows
  const rows = rivercastMAE_Data.map((item, index) =>
    createData(
      new Date(item['DateTime']),
      item['MAE'],
      bidirectionalMAE_Data[index] ? bidirectionalMAE_Data[index]['MAE'] : 0
    )
  );

  const sortedRows = [...rows].sort((a, b) => b.time - a.time);

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-body']}>
                <div className={styles['graph-results']}>
            <div className={styles['selected-graph']}>
                <div className={styles['inside-chart']}>
                    {selectedChart === 'nangka' && (
                        <Line options={NangkaOptions} data={rivercast_nangkaChart} className={styles['graph-class']} />
                    )}
                    {selectedChart === 'stonino' && (
                        <Line options={StoNinoOptions} data={rivercast_stoninoChart} className={styles['graph-class']} />
                    )}
                    {selectedChart === 'montalban' && (
                        <Line options={MontalbanOptions} data={rivercast_montalbanChart} className={styles['graph-class']} />
                    )}
                </div>
            </div>
                <div className={styles['selection-graph']}>
                <div
                    className={classNames(styles['mini-results'], {
                        [styles['selected']]: selectedChart === 'nangka',
                    })}
                    onClick={() => setSelectedChart('nangka')}
                >
                    <div className={styles['graph-mini-class']}>
                        <Line options={MiniNangkaOptions} data={rivercast_nangkaChart} className={styles['graph-class']} />
                    </div>
                </div>
                <div
                    className={classNames(styles['mini-results'], {
                        [styles['selected']]: selectedChart === 'stonino',
                    })}
                    onClick={() => setSelectedChart('stonino')}
                >
                    <div className={styles['graph-mini-class']}>
                        <Line options={MiniStoNinoOptions} data={rivercast_stoninoChart} className={styles['graph-class']} />
                    </div>
                </div>
                <div
                    className={classNames(styles['mini-results'], {
                        [styles['selected']]: selectedChart === 'montalban',
                    })}
                    onClick={() => setSelectedChart('montalban')}
                >
                    <div className={styles['graph-mini-class']}>
                        <Line options={MiniMontalbanOptions} data={rivercast_montalbanChart} className={styles['graph--class']} />
                    </div>
                </div>
            </div>

                        </div>
                <div className={styles['table-results']}>
                    <div className={styles['select-station']}>
                        <div className={styles['title-bar-visualize']}>
                            <img
                                src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699771433/icon_urry4k.png"
                                alt=""
                                className={styles['icon-title-bar']}
                            />
                            <span className={styles['title-vf']}>Visualize Forecast</span>
                        </div>
                        <div className={styles.stations}>
                            <div className={styles.legends}>
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
                            </div>
                            <div className={styles['drop-down']}>
                                <div className={styles['dd-title']}>
                                    <span className={styles['drop-down-text']}>FILTER</span>
                                </div>
                                <DropDownCall setSelectedFilter={setSelectedFilter} />

                            </div>
                        </div>
                    </div>
                    <div className={styles['tabular-results']}>
                        <div className={styles['title-bar-visualize']}>
                            <img
                                src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699771433/icon_urry4k.png"
                                alt=""
                                className={styles['icon-title-bar']}
                            />
                            <span className={styles['title-vf']}>Experimental Results</span>
                        </div>
                        <div className={styles.table}>
                        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent', overflow:'hidden' }}>
                            <Table sx={{ width: 658, height: 443 }} aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <StyledTableCell sx={{ width: 80, height: 84, border: 'none' }}>
                                    TIME
                                    </StyledTableCell>
                                    <StyledTableCell
                                    align="center"
                                    sx={{ width: 223, height: 84, border: 'none' }}
                                    >
                                    Vanilla Transformer by Jiaxing Xu, Hongxiang Fan, Minghan Luo et al. (2013)
                                    </StyledTableCell>
                                    <StyledTableCell
                                    align="center"
                                    sx={{ width: 223, height: 84, border: 'none' }}
                                    >
                                    Transformer with Principal Component Analysis
                                    </StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody sx={{ border: 'none' }}>
                                {sortedRows.map((row) => (
                                    <StyledTableRow key={row.time.toISOString()} sx={{ border: 'none' }}>
                                    <StyledTableCell
                                        component="th"
                                        scope="row"
                                        sx={{ width: 120,height: 10, border: 'none'}}
                                    >
                                        {row.time.toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                        })}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                        sx={{ height: 10, border: 'none' }}
                                    >
                                        {row.m1}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="center"
                                        sx={{ height: 10, border: 'none' }}
                                    >
                                        {row.m2}
                                    </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['bottom-body']}>
                <h3 className={styles['h3-title']}>Process</h3>
                <div className={styles['graph-process']}>
                    <div className={styles.process}>
                        <div className={styles['topbar-process']}>
                            <span className={styles['number-process']}>1</span>
                            <span className={styles['process-1-title']}>Raw Dataset</span>
                        </div>
                        <div className={styles['center-bar-process']}>
                            <img
                                src="/src/assets/rivercastImages/RawData.png"
                                alt="Raw Dataset Image"
                                className={styles['image-bar-process']}
                            />
                        </div>
                        <div className={styles['bottom-bar-process']}>
                        <div className={styles['left-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-1']} />
                                    Waterlevel
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-2']} />
                                    Waterlevel.1
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-3']} />
                                    Waterlevel.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-4']} />
                                    Waterlevel.3
                                </span>
                            </div>
                            <div className={styles['right-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-5']} />
                                    RF-Intensity
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-6']} />
                                    RF-Intensity.1
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-7']} />
                                    RF-Intensity.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-8']} />
                                    RF-Intensity.3
                                </span>
                            </div>
                            <div className={styles['right-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-9']} />
                                    Precipitation
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-10']} />
                                    Precipitation.1
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-11']} />
                                    Precipitation.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-12']} />
                                    Humidity
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-13']} />
                                    Humidity.1
                                </span>
                            </div>
                            <div className={styles['right-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-14']} />
                                    Humidity.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-15']} />
                                    Temperature
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-16']} />
                                    Temperature.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-17']} />
                                    Temperature.3
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.process}>
                        <div className={styles['topbar-process']}>
                            <span className={styles['number-process']}>2</span>
                            <span className={styles['process-1-title']}>Clean Dataset</span>
                        </div>
                        <div className={styles['center-bar-process']}>
                            <img
                                src="/src/assets/rivercastImages/cleanData.png"
                                alt="Clean Dataset Image"
                                className={styles['image-bar-process']}
                            />
                        </div>
                        <div className={styles['bottom-bar-process-clean']}>
                            <div className={styles['left-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-1']} />
                                    Waterlevel
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-2']} />
                                    Waterlevel.1
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-3']} />
                                    Waterlevel.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-4']} />
                                    Waterlevel.3
                                </span>
                            </div>
                            <div className={styles['right-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-5']} />
                                    RF-Intensity
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-6']} />
                                    RF-Intensity.1
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-7']} />
                                    RF-Intensity.2
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-8']} />
                                    RF-Intensity.3
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heat_map_process}>
                        <div className={styles['topbar-process']}>
                            <span className={styles['number-process']}>3</span>
                            <span className={styles['process-1-title']}>
                                Visualize Attention Scores
                            </span>
                        </div>
                        <div className={styles['attention-scores']} >
                            <CCarousel controls className={styles['image-bar-process-attn-container']} interval>
                                <CCarouselItem className={styles['image-bar-process-attn-item']}>
                                    <CImage className={styles['image-bar-process-attn']} src={"/src/assets/rivercastImages/output1-removebg-preview.png"} alt="slide 1" />
                                    <CCarouselCaption className={styles['image-bar-process-attn-caption']}>
                                        <h5>Nangka Attention Score</h5>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem>
                                    <CImage className={styles['image-bar-process-attn']} src={"/src/assets/rivercastImages/output2-removebg-preview.png"} alt="slide 2" />
                                    <CCarouselCaption className={styles['image-bar-process-attn-caption']}>
                                        <h5>Sto Nino Attention Score</h5>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem className={styles['image-bar-process-attn-item']}>
                                    <CImage className={styles['image-bar-process-attn']} src={"/src/assets/rivercastImages/output3-removebg-preview.png"} alt="slide 3" />
                                    <CCarouselCaption className={styles['image-bar-process-attn-caption']}>
                                        <h5>Sto Nino Attention Score</h5>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem className={styles['image-bar-process-attn-item']}>
                                    <CImage className={styles['image-bar-process-attn']} src={"/src/assets/rivercastImages/output4-removebg-preview.png"} alt="slide 3" />
                                    <CCarouselCaption className={styles['image-bar-process-attn-caption']}>
                                        <h5>Montalban Attention Score</h5>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            </CCarousel>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
