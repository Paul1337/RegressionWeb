import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const ReportValue = ({ type, value }) => {
    const formatValue = (val) => {
        return new Intl.NumberFormat().format(val);
    };

    value = formatValue(value);

    return (
        <div
            style={{
                border: '1px solid black',
                display: 'inline-block',
                borderRadius: '6px',
                padding: '5px',
                margin: '5px',
            }}
        >
            <div style={{ fontSize: '20px', fontWeight: 700 }}>{type}</div>
            <div style={{ fontSize: '20px' }}>{value}</div>
        </div>
    );
};

const ReportView = () => {
    const containerStyles = {
        textAlign: 'center',
    };

    const reports = useSelector((state) => {
        const regression = state.regression;
        const data = state.data;

        const reports = {};

        reports.RSS = data.reduce((accum, cur) => {
            const funcVal = regression.a + regression.b * cur.salary;
            return accum + Math.pow(cur.creditSum - funcVal, 2);
        }, 0);

        const midY = data.reduce((accum, cur) => accum + cur.creditSum, 0) / data.length;
        reports.TSS = data.reduce((accum, cur) => {
            return accum + Math.pow(cur.creditSum - midY, 2);
        }, 0);

        reports.ESS = data.reduce((accum, cur) => {
            const funcVal = regression.a + regression.b * cur.salary;
            return accum + Math.pow(funcVal - midY, 2);
        }, 0);

        reports.R2 = reports.ESS / reports.TSS;
        reports.kPirson = Math.sqrt(reports.R2);

        return reports;
    });

    return (
        <div style={containerStyles}>
            {Object.keys(reports).map((reportKey) => (
                <ReportValue key={reportKey} type={reportKey} value={reports[reportKey]} />
            ))}
        </div>
    );
};

export default ReportView;
