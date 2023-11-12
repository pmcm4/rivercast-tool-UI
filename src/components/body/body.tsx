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

function createData(
    time: string,
    m1: number,
    m2: number,
  ) {
    return { time, m1, m2};
  }
  const rows = [
    createData('6 AM', 0.3565, 6.0),
    createData('6 AM', 159, 6.0),
    createData('6 AM', 159, 6.0),
    createData('6 AM', 159, 6.0),
    createData('6 AM', 159, 6.0),
    createData('6 AM', 159, 6.0),
  ];


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
);


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
const SN_options = {
    responsive: true,
    plugins: {
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
            }
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

const SM_options = {
    responsive: true,
    plugins: {
        title: {
          display: true,
          text: 'San Mateo',
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
            }
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

const TM_options = {
    responsive: true,
    plugins: {
        title: {
          display: true,
          text: 'Tumana',
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
            }
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'January', 'February', 'March', 'April', 'May', 'June', 'July'];


const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Actual',
            data: [112, 323, 554, 755, 232, 255, 434, 555, 232, 255, 434, 555, 112, 323, 554, 755],
            borderColor: 'rgba(219, 179, 110, 1)',
            backgroundColor: 'rgba(219, 179, 110, 0.3)',
        },
        {
            fill: true,
            label: 'Predicted',
            data: [232, 255, 434, 555, 112, 323, 554, 755, 112, 323, 554, 755, 232, 255, 434, 555],
            borderColor: 'rgba(0, 206, 255, 1)',
            backgroundColor: 'rgba(24, 144, 255, 0.3)',
        },
    ],
};

export const Body = ({ className }: BodyProps) => {

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-body']}>
                <div className={styles['graph-results']}>
                    <div className={styles['selected-graph']} >
                        <div className={styles['inside-chart']}>
                            <Line options={SN_options} data={data} className={styles['graph-class']} />
                        </div>
                    </div>
                    <div className={styles['selection-graph']}>
                        <div className={styles['mini-results']} >
                        <div className={styles['graph-mini-class']}>
                            <Line options={SN_options} data={data} className={styles['graph-class']} /> 
                        </div>
                        </div>
                        <div className={styles['mini-results']} >
                        <div className={styles['graph-mini-class']}>
                            <Line options={SM_options} data={data} className={styles['graph-class']} /> 
                        </div>
                        </div>
                        <div className={styles['mini-results']} >
                        <div className={styles['graph-mini-class']}>
                            <Line options={TM_options} data={data} className={styles['graph--class']} /> 
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
                                    <span className={styles['station-name']}>Sto. Nino</span>
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
                                    <span className={styles['drop-down-text']}>LOREM IPSUM</span>
                                </div>
                                <div className={styles['dropdown-btn']}>
                                    <span className={styles['drop-down-text']}>ALL</span>
                                    <img
                                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699774226/Vector_1_qtppdt.png"
                                        alt=""
                                        className={styles['drop-down-vector']}
                                    />
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
                            />
                            <span className={styles['title-vf']}>Experimental Results</span>
                        </div>
                        <div className={styles.table}> 
                        <TableContainer component={Paper} sx={{backgroundColor: "transparent"}} >
                            <Table sx={{ width: 658, height: 443}} aria-label="customized table" >
                                <TableHead >
                                <TableRow >
                                    <StyledTableCell sx={{ width: 80, height: 84, border: 'none'}}>TIME</StyledTableCell>
                                    <StyledTableCell align="center" sx={{ width: 223, height: 84, border: 'none'}}>Vanilla Transformer by Jiaxing Xu, Hongxiang Fan, Minghan Luo et al. (2013)</StyledTableCell>
                                    <StyledTableCell align="center" sx={{ width: 223,  height: 84, border: 'none'}}>Transformer with Principal Component Analysis</StyledTableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody sx={{ border: 'none'}}>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.time} sx={{ border: 'none'}}>
                                    <StyledTableCell component="th" scope="row" sx={{ height: 10, border: 'none'}}>
                                        {row.time}
                                    </StyledTableCell>
                                    <StyledTableCell align="center" sx={{ height: 10, border: 'none'}}>{row.m1}</StyledTableCell>
                                    <StyledTableCell align="center" sx={{ height: 10, border: 'none'}}>{row.m2}</StyledTableCell>
                                    </StyledTableRow >
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
                        <div className={styles['center-bar-process']} />
                        <div className={styles['bottom-bar-process']}>
                            <div className={styles['left-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-1']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-2']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-3']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-4']} />
                                    Lorem Ipsum
                                </span>
                            </div>
                            <div className={styles['right-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-5']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-6']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-7']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-8']} />
                                    Lorem Ipsum
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.process}>
                        <div className={styles['topbar-process']}>
                            <span className={styles['number-process']}>2</span>
                            <span className={styles['process-1-title']}>Clean Dataset</span>
                        </div>
                        <div className={styles['center-bar-process']} />
                        <div className={styles['bottom-bar-process']}>
                            <div className={styles['left-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-1']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-2']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-3']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-4']} />
                                    Lorem Ipsum
                                </span>
                            </div>
                            <div className={styles['right-process-legends']}>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-5']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-6']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-7']} />
                                    Lorem Ipsum
                                </span>
                                <span className={styles['legends-process']}>
                                    <div className={styles['legend-8']} />
                                    Lorem Ipsum
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
                        <div className={styles['attention-scores']} />
                    </div>
                </div>
            </div>

        </div>
    );
};
