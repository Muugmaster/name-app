import React from 'react'
import { names } from '../../data/names';

import './styles.css';

const Totalnames = () => {
    let totalNames = names.names.map(name => name.amount).reduce((acc, name) => name + acc);
    return (
        <h3>
            {`Total amount of all the names: ${totalNames}`}
        </h3>
    )
}

export default Totalnames
