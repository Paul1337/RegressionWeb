import { useState } from 'react';
import DataPresentation from './components/DataPresentation/DataPresentation.jsx';
import Graphic from './components/Graphic/Graphic.jsx';
import ReportView from './components/ReportView/ReportView.jsx';
import Controls from './components/Controls/Controls.jsx';
import EstimationControls from './components/EstimationControls/EstimationControls.jsx';

const App = () => {
    return (
        <>
            <h1>Regression task</h1>
            <DataPresentation />
            <Controls />
            <Graphic />
            <ReportView />
            <EstimationControls />
        </>
    );
};

export default App;
