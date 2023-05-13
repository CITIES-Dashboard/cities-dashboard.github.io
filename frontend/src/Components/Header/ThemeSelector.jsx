// disable eslint for this file
/* eslint-disable */
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { MenuItem, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { LightMode, DarkMode, Contrast } from '@mui/icons-material';

import ThemePreferences from '../../ThemePreferences';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
    borderRadius: "0.5rem",
    background: theme.palette.background.paper,
    "& .MuiFormLabel-root, .MuiInputBase-root .MuiTypography-root, svg": {
        fontSize: "0.75rem"
    },
    "& svg": {
        marginRight: "0.25rem",
        verticalAlign: "middle"
    },
    "& .MuiInputBase-root": {
        borderRadius: "0.5rem",
        "&:before,:hover,:after": {
            borderBottom: "none !important"
        },
        "&:hover": {
            background: "rgba(0,0,0,0.25)"
        }
    },
    '& .MuiSelect-select': {
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
        "&:focus": {
            background: "none"
        }
    }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    "& .MuiTypography-root, svg": {
        fontSize: "0.75rem"
    },
    "& svg": {
        marginRight: theme.spacing(0.5),
        verticalAlign: "middle"
    }
}));

export default function ThemeSelector(props) {
    const { isFullWidth, setThemePreference } = props;
    const [themeValue, setThemeValue] = useState(localStorage.getItem('theme') || ThemePreferences.system);

    const handleChange = (event) => {
        localStorage.setItem('theme', event.target.value);
        setThemeValue(event.target.value);
    };

    const themeChangeHandler = ({ matches }) => {
        if (matches) {
            setThemePreference(ThemePreferences.dark);
        } else {
            setThemePreference(ThemePreferences.light);
        }
    };

    useEffect(() => {
        switch (themeValue) {
            case ThemePreferences.dark:
                setThemePreference(ThemePreferences.dark);
                break;

            case ThemePreferences.light:
                setThemePreference(ThemePreferences.light);
                break;

            case ThemePreferences.system:
                const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
                darkThemeMq.matches ? setThemePreference(ThemePreferences.dark) : setThemePreference(ThemePreferences.light);
                darkThemeMq.addEventListener('change', themeChangeHandler);

                return () => {
                    darkThemeMq.removeEventListener('change', themeChangeHandler);
                };

            default:
                break;
        }
    }, [themeValue]);

    return (
        <StyledFormControl sx={{ display: isFullWidth ? "grid" : "" }} variant="filled" size="small">
            <InputLabel id="select-filled-label">THEME</InputLabel>
            <Select
                labelId="select-filled-label"
                id="select-filled"
                value={themeValue}
                onChange={handleChange}
            >
                <StyledMenuItem value={ThemePreferences.system}>
                    <Typography color="text.primary">
                        <Contrast />
                        System
                    </Typography>
                </StyledMenuItem>

                <StyledMenuItem value={ThemePreferences.light}>
                    <Typography color="text.primary">
                        <LightMode />
                        Light
                    </Typography>
                </StyledMenuItem>

                <StyledMenuItem value={ThemePreferences.dark}>
                    <Typography color="text.primary">
                        <DarkMode />
                        Dark
                    </Typography>
                </StyledMenuItem>
            </Select>
        </StyledFormControl>
    );
};