import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { ModelProvider } from './ModelContext';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <ModelProvider>
            <Header />
            <Body />
            <Footer />
            </ModelProvider>
        </div>
    );
}

export default App;
