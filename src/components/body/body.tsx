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
                    <div className={styles['selection-graph']} />
                </div>
                <div className={styles['table-results']}>
                    <div className={styles['select-station']} />
                    <div className={styles['tabular-results']} />
                </div>
            </div>
            <div className={styles['bottom-body']}>
                <div className={styles['graph-process']}>
                    <div />
                    <div />
                </div>
            </div>
        </div>
    );
};
