import React, { useState } from 'react'
import ItemsDisplay from './ItemsDisplay'
import PreviewOrder from './PreviewOrder'
import ShippingDetails from './ShippingDetails'
import Success from './Success'
import FailedOrder from './FailedOrder'

const MainCart = () => {

    const [viewState, setViewState] = useState('step1')

    const ChangeViewState=(data)=>{
        setViewState(data)
    }


    return (
        <React.Fragment>
            {viewState === 'step1' && <ItemsDisplay Change={ChangeViewState} /> }
            {viewState === 'step2' && <ShippingDetails Change={ChangeViewState} /> }
            {viewState === 'step3' && <PreviewOrder Change={ChangeViewState} /> }
            {viewState === 'step4' && <Success Change={ChangeViewState} /> }
            {viewState === 'step5' && <FailedOrder Change={ChangeViewState} /> }
        </React.Fragment>              
    )
}

export default MainCart
