import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  Button as Btn,
  ButtonProps,
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    contained: {
      height: 40,
      width: 140,
      color: 'white',
      textTransform: 'capitalize',
      marginTop: 10,
      background:
        'linear-gradient(296.58deg, #3CA6F2 3.98%, #64BEFF 97.41%), #57B8FF',
      borderRadius: 10,
      '&:hover': {
        background: 'linear-gradient(296.58deg, #5BB3F2 3.98%, #84CBFF 97.41%)',
        boxShadow: 'none',
      },
      '&:active': {
        background: 'linear-gradient(296.58deg, #1E7CC0 3.98%, #4CA0DD 97.41%)',
        boxShadow: 'none',
      },
    },
  });

class TurboButton extends React.Component<
  WithStyles<typeof styles> & ButtonProps
> {
  public render() {
    const {classes} = this.props;
    return (
      <Btn
        {...this.props}
        classes={{
          ...classes,
        }}
        style={{
          fontFamily: 'Asap',
        }}
      />
    );
  }
}

export const Button = withStyles(styles)(TurboButton);
