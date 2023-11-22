import classNames from 'classnames';
import styles from './header.module.scss';
import { useEffect, useState } from 'react';
import { useModelContext } from '../../ModelContext';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

interface rivercastTotMAE{
    index: number;
    'aMAE': number;
    'tMAE': number;
}

interface bidirectionalTotMAE{
    index: number;
    'aMAE': number;
    'tMAE': number;
}

export const Header = ({ className }: HeaderProps) => {

    const { selectedModel, setSelectedModel } = useModelContext();
    const [rcTotMAE, setrcTotMAE] = useState<rivercastTotMAE[]>([]);
    const [biTotMAE, setbiTotMAE] = useState<bidirectionalTotMAE[]>([]);

    const checkForNewData = () => {
        // Fetch data for Rivercast Model
        const fetchLatestData = async () => {
            try {
                const updateModelData = await fetch('http://127.0.0.1:5000/updateModelData');
                const updateModelDataRes = await updateModelData.json()
                console.log(updateModelDataRes)

                const updateTrueValuesRC = await fetch('http://127.0.0.1:5000/addRCTrueValuesToDB');
                const updateTrueValuesRCRes = await updateTrueValuesRC.json()
                console.log(updateTrueValuesRCRes)

                const updateTrueValuesBi = await fetch('http://127.0.0.1:5000/addBiTrueValuesToDB');
                const updateTrueValuesBiRes = await updateTrueValuesBi.json()
                console.log(updateTrueValuesBiRes)

                const updateMAErivercast = await fetch('http://127.0.0.1:5000/getrivercastMAE');
                const updateMAErivercastRes = await updateMAErivercast.json()
                console.log(updateMAErivercastRes)

                const updateMAEbidirectional = await fetch('http://127.0.0.1:5000/getBidirectionalMAE');
                const updateMAEbidirectionalRes = await updateMAEbidirectional.json()
                console.log(updateMAEbidirectionalRes)

            } catch (error) {
                console.error('Error fetching Rivercast Model data:', error);
            }
        };
        fetchLatestData();
    }

    const checkForNewPrediction = () => {
        // Fetch data for Rivercast Model
        const fetchPredictionDataRc = async () => {
            try {
                const updatePredictionRC = await fetch('http://127.0.0.1:5000/addRCPredictionToDB');
                const updatePredictionRCRes = await updatePredictionRC.json()
                console.log(updatePredictionRCRes)
            } catch (error) {
                console.error('Error fetching Forecast Rivercast Model data:', error);
            }
        };
        const fetchPredictionDataBi = async () => {
            try {
                const updatePredictionBi = await fetch('http://127.0.0.1:5000/addBiPredictionToDB');
                const updateTrueValuesBiRes = await updatePredictionBi.json()
                console.log(updateTrueValuesBiRes)
            } catch (error) {
                console.error('Error fetching Forecast Bidirectional Model data:', error);
            }
        };
        {selectedModel === 'rivercast' ? fetchPredictionDataRc() : fetchPredictionDataBi()}
        
    }
    


    useEffect(() => {
        // Fetch data for Rivercast Model
        const fetchRivercastData = async () => {
            try {
                const rc_tot_MAE = await fetch('http://localhost:3001/api/totrcmae/rivercast_overall_MAEs');

                const rc_tot_MAE_Data = await rc_tot_MAE.json()
                
                setrcTotMAE(rc_tot_MAE_Data);

            } catch (error) {
                console.error('Error fetching Rivercast Model data:', error);
            }
        };

        // Fetch data for Bidirectional Model
        const fetchBidirectionalData = async () => {
            try {
                const bi_tot_MAE = await fetch('http://localhost:3001/api/totbimae/bidirectional_overall_MAEs');

                const bi_tot_MAE_Data = await bi_tot_MAE.json()
                setbiTotMAE(bi_tot_MAE_Data);
                
            } catch (error) {
                console.error('Error fetching Bidirectional Model data:', error);
            }
        };

        // Execute both fetch functions
        fetchRivercastData();
        fetchBidirectionalData();
    }, []);

    function createData(
        m3: number,
        m4: number,
    ) {
        return {m3, m4};
    }

    const totMAEsRow = rcTotMAE.map((item, index) =>
    createData(
        selectedModel === 'rivercast' ? item['tMAE'] : 0,
        selectedModel === 'bidirectional' && biTotMAE[index] ? biTotMAE[index]['tMAE'] : 0,
    )
    );



    return (
        <div className={classNames(styles.root, className)}>
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
                    onClick={checkForNewPrediction}
                />
                <div className={styles.text_mae}>
                    <span className={styles.mae_title}>Mean Absolute Error</span>
                    {totMAEsRow.map((row, index) => (
                        <span key={index} className={styles.mae_result}>
                            {selectedModel === 'rivercast' ? row.m3 : row.m4}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
