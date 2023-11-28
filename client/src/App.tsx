// App.tsx

import React, { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Footer } from './components/footer/footer';
import { ModelProvider } from './ModelContext';
import LoadingModal from './LoadingModal'; // Adjust the import path accordingly
import { MyCalendar } from './components/calendar/calendar';

function App() {
    const [loading, setLoading] = useState(true);

    const handleDataFetchComplete = () => {
      setLoading(false);
    };
  

    return (
        <div className={styles.App}>
          <ModelProvider>
            <Body/>
            <Footer/>
          </ModelProvider>
        </div>
      );
    }
    

export default App;
