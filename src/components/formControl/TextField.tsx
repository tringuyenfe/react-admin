import React from 'react';
import {
  Theme,
  createStyles,
  WithStyles,
  withStyles,
  TextField as TextF,
  TextFieldProps,
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      paddingBottom: 20,
    },
  });

class TurboTextField extends React.Component<
  WithStyles<typeof styles> & TextFieldProps
> {
  public render() {
    const {classes} = this.props;
    return (
      <TextF
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

export const TextField = withStyles(styles)(TurboTextField);
