import * as React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../store";


export default function ControlledSwitches() {

    //calling custom hook to let app know when to re-render this component
    useAppSelector(state => state.theme)

    const test = JSON.parse(localStorage.getItem("theme")) || false;
    const dispatch = useAppDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("theme", JSON.stringify(!test))
        dispatch(themeActions.setTheme(!test))
    };

    return (
        <FormControlLabel
            control={<Switch
                checked={test}
                onChange={handleChange}
                color="primary"
                inputProps={{'aria-label': 'controlled'}}
            />}
            label="Dark Mode"
            labelPlacement="top"
        />
    );
}
