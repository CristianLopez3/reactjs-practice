import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CrudApi from "../components/CrudApi.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CrudApi">
                <CrudApi/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews