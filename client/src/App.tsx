import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
