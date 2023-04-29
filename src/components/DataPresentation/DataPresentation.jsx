import React from 'react';
import { useSelector } from 'react-redux';

const DataComponent = ({ data, heading = false }) => {
    // const salaryUpdated = (e) => {
    //     console.log(e.target.textContent);
    // };

    const creditUpdated = () => {};
    return (
        <div className='data-present__component'>
            <div className='data-present__component__arg'>{heading ? 'Salary' : data.salary}</div>
            <div className='data-present__component__func'>{heading ? 'Credit' : data.creditSum}</div>
        </div>
    );
};

const DataPresentation = () => {
    const people = useSelector((state) => state.data);
    return (
        <div className='data-present-container'>
            {[
                <DataComponent heading={true} key={-1} />,
                ...people.map((man, index) => {
                    return <DataComponent data={man} key={index} />;
                }),
            ]}
        </div>
    );
};

export default DataPresentation;
