import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.left}>
                <img
                    className={styles.logo}
                    src={
                        'https://res.cloudinary.com/dgb2lnz2i/image/upload/v1695638696/logo-rivercast_tjxykb.png'
                    }
                />
                <h1 className={styles.navbar_title}>RIVERCAST</h1>
            </div>
            <div className={styles.center}>
                <h4 className={styles.header_models}>STL</h4>
                <h4 className={styles.header_models}>PCA</h4>
                <h4 className={styles.header_models}>VANILLA</h4>
            </div>
            <div className={styles.right}>
                <img
                    src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1699599675/fi-bs-target_yyiify.png"
                    alt=""
                    className={styles.mae_logo}
                />
                <div className={styles.text_mae}>
                    <span className={styles.mae_title}>Mean Absolute Error</span>
                    <span className={styles.mae_result}>0.000000000000000</span>
                </div>
            </div>
        </div>
    );
};
