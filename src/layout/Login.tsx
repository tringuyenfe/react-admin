import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTypes, Field } from 'react-final-form';
import { useLocation } from 'react-router-dom';

import { Card, Checkbox,Grid } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import { Notification } from 'react-admin';
import { useTranslate, useLogin, useNotify } from  'ra-core';
import { lightTheme } from './themes';
import { Typo } from '../components/typo/Typo';
import { TextField } from '../components/formControl/TextField';
import { Button } from '../components/button/Button';

const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor:'#E5E5E5',
    },
    card: {
        padding: 30,
        position: 'absolute',
        left: '36.11%',
        right: '36.11%',
        bottom: '26.86%',
        background:'#FFFFFF',
        borderRadius: 15,
        boxShadow: '0px 0px 2px #888888',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
}));

const renderInput = ({
    meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps },
    ...props
}) => (
    <TextField
        error={!!(touched && error)}
        helperText={touched && error}
        {...inputProps}
        {...props}
        fullWidth
    />
);

interface FormValues {
    username?: string;
    password?: string;
}

const { Form } = withTypes<FormValues>();

const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();
    const classes = useStyles();
    const notify = useNotify();
    const login = useLogin();
    const location = useLocation<{ nextPathname: string } | null>();

    const handleSubmit = (auth: FormValues) => {
        setLoading(true);
        login(auth, location.state ? location.state.nextPathname : '/').catch(
            (error: Error) => {
                setLoading(false);
                notify(
                    typeof error === 'string'
                        ? error
                        : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                    'warning'
                );
            }
        );
    };

    const validate = (values: FormValues) => {
        const errors: FormValues = {};
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };

    return (
        <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <div className={classes.main}>
                        <Card className={classes.card}>
                            <Grid>
                                <Typo variant="h2">Login</Typo>
                            </Grid>

                            <Grid>
                                <Typo variant="subtitle2">Welcome to Turbo!</Typo>
                                <Typo variant="subtitle2">Please login to start using.</Typo>
                            </Grid>
                            <div className={classes.input}>
                                <Field
                                    autoFocus
                                    name="username"
                                    // @ts-ignore
                                    component={renderInput}
                                    label={translate('ra.auth.username')}
                                    disabled={loading}
                                />
                            </div>

                            <div className={classes.input}>
                                <Field
                                    name="password"
                                    // @ts-ignore
                                    component={renderInput}
                                    label={translate('ra.auth.password')}
                                    type="password"
                                    disabled={loading}
                                    helperText={[
                                        <Checkbox
                                            key="1"
                                            color="default"
                                        />,
                                        '   Remember Password',
                                    ]}
                                />
                            </div>
                            
                            <Button
                                type="submit"
                                variant="contained"
                                disabled={loading}
                            >
                                Login
                            </Button>
                            
                        </Card>
                        <Notification />
                    </div>
                    <Typo variant="body2">Privacy Policy & Term of service</Typo>

                </form>
            )}
        />
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

// We need to put the ThemeProvider decoration in another component
// Because otherwise the useStyles() hook used in Login won't get
// the right theme
const LoginWithTheme = (props: any) => (
    <ThemeProvider theme={createMuiTheme(lightTheme)}>
        <Login {...props} />
    </ThemeProvider>
);

export default LoginWithTheme;
