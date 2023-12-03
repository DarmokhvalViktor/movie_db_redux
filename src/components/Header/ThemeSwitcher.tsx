import * as React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../store";


export default function ControlledSwitches() {

    const {theme} = useAppSelector(state => state.theme)

    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(themeActions.setTheme(!theme))
    };

    return (
        <FormControlLabel
            control={<Switch
                checked={theme}
                onChange={handleChange}
                color="primary"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="Dark Mode"
            labelPlacement="top"
        />
    );
}
