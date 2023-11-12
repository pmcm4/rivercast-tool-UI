import classNames from 'classnames';
import styles from './body.module.scss';

export interface BodyProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Body = ({ className }: BodyProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-body']}>
                <div className={styles['graph-results']}>
                    <div className={styles['selected-graph']} />
                    <div className={styles['selection-graph']}>
                        <div className={styles['mini-results']} />
                        <div className={styles['mini-results']} />
                        <div className={styles['mini-results']} />
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
                        <div className={styles.table} />
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
