import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const EstimationType = {
    SalaryToCredit: 0,
    CreditToSalary: 1,
};

const EstimationControl = ({ data, regression }) => {
    const [estimationType, updateEstimationType] = useState(EstimationType.SalaryToCredit);
    const [argumentValue, updateArgumentValue] = useState(0);
    const [resultValue, updateResultValue] = useState(0);

    const updateResult = (val) => {
        val = Math.round(val);
        if (val < 0) val = 0;
        updateResultValue(val);
    };

    useEffect(() => {
        if (estimationType == EstimationType.SalaryToCredit) {
            updateResult(argumentValue * regression.b + regression.a);
        } else if (estimationType == EstimationType.CreditToSalary) {
            updateResult((argumentValue - regression.a) / regression.b);
        }
    }, [argumentValue, estimationType]);

    const toggleEstimationType = () => {
        updateEstimationType((type) => {
            if (type == EstimationType.SalaryToCredit) return EstimationType.CreditToSalary;
            return EstimationType.SalaryToCredit;
        });
    };

    const formatResult = (result) => {
        return new Intl.NumberFormat().format(result);
    };

    const typeBtnStyle = {
        fontWeight: 700,
        minWidth: 200,
    };

    const inputStyle = {
        padding: '6px',
        borderRadius: '6px',
        margin: '4px',
        fontSize: 16,
    };

    const resultStyle = {
        margin: '4px',
        fontSize: '20px',
        color: 'darkblue',
        fontWeight: 700,
        display: 'inline-block',
    };
    return (
        <>
            <button style={typeBtnStyle} onClick={toggleEstimationType}>
                {estimationType == EstimationType.SalaryToCredit
                    ? 'Зарплата -> кредит'
                    : 'Кредит -> Зарплата'}
            </button>
            <input
                value={argumentValue}
                onChange={(e) => {
                    updateArgumentValue(Number(e.target.value).toString());
                }}
                type='number'
                style={inputStyle}
            />
            <div style={resultStyle}>{formatResult(resultValue)}</div>
        </>
    );
};

const EstimationControls = () => {
    const data = useSelector((state) => state.data);
    const regression = useSelector((state) => state.regression);
    return (
        <>
            <h1 className='part-heading'>Estimation Controls</h1>
            <EstimationControl data={data} regression={regression} />
        </>
    );
};

export default EstimationControls;
