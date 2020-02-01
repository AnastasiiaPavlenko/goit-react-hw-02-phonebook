import React from 'react';

export default function Filter({ value, onChangeFilter }) {
    return (
        <div>
            <label htmlFor="filter">Find contacts by name</label>
            <input id="filter" type="text" name="filter" value={value} className="input" onChange={e => onChangeFilter(e.target.value)} />
        </div>
    );
};