import React from 'react';
import {
  Typography,
  Theme,
  createStyles,
  WithStyles,
  withStyles,
} from '@material-ui/core';
import {TypographyProps} from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
  createStyles({
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
      lineHeight: '37px',
      color: '#222222',
      textTransform: 'capitalize',
    },
    h2: {
      fontFamily: 'Asap',
      fontSize: '32px',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontStretch: 'normal',
      lineHeight: '50px',
      letterSpacing: 'normal',
      textAlign: 'initial',
      color: '#57B8FF',
    },
    subtitle1: {
      color: '#A1A9B4',
      fontSize: 12,
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: 'Asap',
      fontSize: 16,
      textAlign: 'initial',
      color: '#000000',
      fontWeight: 500,
      lineHeight: '18px',
      paddingBottom: 8,
    },
    body1: {
      paddingBottom: 40,
    },
    body2: {
      position: 'absolute',
      top: 776,
      width:'100%',
      fontFamily: 'Asap',
      fontStyle: 'normal',
      fontZize: 10,
      textAlign: 'center',
      textTransform: 'capitalize',
      color: '#A1A9B4',
    },
  });

class TurboTypo extends React.Component<
  TypographyProps & WithStyles<typeof styles>
> {
  public render() {
    const {classes} = this.props;
    return (
      <Typography
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

export const Typo = withStyles(styles)(TurboTypo);
