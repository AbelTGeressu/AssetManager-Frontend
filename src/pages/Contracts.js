import React from "react";

import ContractDataTable from '../components/ContractDataTable';
import ContractDataGrid from '../components/ContractCrudComponent';


const Contracts =() => {

    return (


        <>
            <h1>Contracts</h1>
            <ContractDataGrid />

            {/* <ContractDataTable /> */}
        </>
    );
};

export default Contracts;