import { Colors } from 'core/CssVariables';

export type TThemeProps = {
  timesheet: {
    borderColor: string;
    backgroundColor: string;
  };
  avatar: {
    default: {
      color: string;
      backgroundColor: string;
    };
  };
  card: {
    default: {
      backgroundColor: string;
      border: string;
    };
    secondary: {
      backgroundColor: string;
    };
    primary: {
      backgroundColor: string;
    };
  };
  paragraph: {
    color: string;
  };
  editableText: {
    spinner: string;
    color: string;
  };
  scrollbar: {
    track: string;
    thumb: string;
  };
  color: string;
  secondaryColor: string;
  backButton: string;
  backgroundColor: string;
  secondaryBackgroundColor: string;
  radio: {
    label: string;
    backgroundColor: string;
  };
  input: {
    backgroundColor: string;
    placeholder: string;
    disabledPlaceholder: string;
    TextColorPrimary: string;
    borderColor: string;
  };
  sidebar: {
    backgroundColor: string;
    menuBackgroundColor: string;
    color: string;
  };
  switch: {
    handle: string;
    themeSwitch: {
      backgroundColor: string;
      lightModeColor: string;
      darkModeColor: string;
    };
  };
  table: {
    backgroundColor: string;
    borderColor: string;
    hoverTextColor: string;
    sortersColor: string;
    pagesizeBackgroundColor: string;
    hoverRowBackgroundColor: string;
    checkboxBorderColor: string;
    checkboxLabelColor: string;
    filterBackgroundColor: string;
    textColor: string;
    expendedMenu: string;
    expendedMenuIcon: string;
  };
  datePicker: {
    backgroundColor: string;
    borderColor: string;
    disabledBackgroundColor: string;
  };
  timeEntryTooltip: {
    backgroundColor: string;
  };
  timeEntryDetails: {
    item: {
      color: string;
    };
  };
  modal: {
    backgroundColor: string;
    backgroundOpacity: string;
  };
  dropdown: {
    backgroundColor: string;
    borderColor: string;
    boxShadowColor: string;
  };
  tooltip: {
    backgroundColor: string;
    color: string;
  };
  icon: {
    color: string;
  };
  normalWrapper: {
    backgroundColor: string;
  };
  noResult: {
    color: string;
  };
  select: {
    color: string;
  };
  selectableText: {
    backgroundColor: string;
  };
  profileMenu: {
    color: string;
  };
  weekDays: {
    backgroundColor: string;
  };
  uploadButton: {
    backgroundColor: string;
    borderColor: string;
    iconColor: string;
  };
  progress: {
    backgroundColor: string;
  };
  text: {
    color: string;
  };
  fileUploader: {
    color: string;
    backgroundColor: string;
    borderDashed: string;
    border: string;
    actionIcons: string;
  };
};

export const DarkTheme: TThemeProps = {
  timesheet: {
    borderColor: Colors.DarkBorderColor,
    backgroundColor: Colors.Dark,
  },
  avatar: {
    default: {
      color: Colors.Grey,
      backgroundColor: Colors.DarkGrey,
    },
  },
  card: {
    secondary: {
      backgroundColor: Colors.Dark,
    },
    primary: {
      backgroundColor: Colors.DarkGrey,
    },
    default: {
      backgroundColor: Colors.Dark,
      border: Colors.Dark,
    },
  },
  paragraph: {
    color: Colors.LightGrey,
  },
  editableText: {
    color: Colors.Dark,
    spinner: Colors.White,
  },
  scrollbar: {
    track: Colors.TextColorPrimary,
    thumb: Colors.Dark,
  },
  color: Colors.White,
  secondaryColor: Colors.LightGrey,
  backButton: Colors.Grey,
  switch: {
    handle: Colors.Dark,
    themeSwitch: {
      backgroundColor: Colors.PrimaryColor,
      lightModeColor: Colors.White,
      darkModeColor: Colors.PrimaryColor,
    },
  },
  backgroundColor: Colors.DarkGrey,
  secondaryBackgroundColor: Colors.Dark,
  radio: {
    label: Colors.LightGrey,
    backgroundColor: Colors.DarkGrey,
  },
  input: {
    backgroundColor: Colors.DarkBackground,
    placeholder: Colors.LightGrey,
    disabledPlaceholder: Colors.DisabledLightGrey,
    TextColorPrimary: Colors.LightGrey,
    borderColor: Colors.DarkBorderColor,
  },
  sidebar: {
    backgroundColor: Colors.DarkGrey,
    menuBackgroundColor: Colors.Dark,
    color: Colors.White,
  },
  table: {
    backgroundColor: Colors.DarkBackground,
    borderColor: Colors.DarkBorderColor,
    hoverTextColor: Colors.Dark,
    sortersColor: Colors.InfoColor,
    pagesizeBackgroundColor: Colors.Dark,
    hoverRowBackgroundColor: Colors.RowHover,
    checkboxBorderColor: Colors.LightGrey,
    checkboxLabelColor: Colors.LightGrey,
    filterBackgroundColor: Colors.DarkGrey,
    textColor: Colors.White,
    expendedMenu: Colors.White,
    expendedMenuIcon: Colors.Grey,
  },
  datePicker: {
    backgroundColor: Colors.DarkBackground,
    borderColor: Colors.DarkBorderColor,
    disabledBackgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  timeEntryTooltip: {
    backgroundColor: Colors.Dark,
  },
  timeEntryDetails: {
    item: {
      color: Colors.White,
    },
  },
  modal: {
    backgroundColor: Colors.Dark,
    backgroundOpacity: 'rgba(0, 0, 0, 0.7)',
  },
  dropdown: {
    backgroundColor: Colors.Dark,
    borderColor: Colors.DarkBorderColor,
    boxShadowColor: 'rgba(0, 0, 0, 0.3)',
  },
  tooltip: {
    backgroundColor: Colors.LightBackground,
    color: Colors.Grey,
  },
  icon: {
    color: Colors.DarkGrey,
  },
  normalWrapper: {
    backgroundColor: Colors.DarkBackground,
  },
  noResult: {
    color: Colors.LightGrey,
  },
  select: {
    color: Colors.LightGrey,
  },
  selectableText: {
    backgroundColor: Colors.DarkGrey,
  },
  profileMenu: {
    color: Colors.LightGrey,
  },
  weekDays: {
    backgroundColor: Colors.DarkBackground,
  },
  uploadButton: {
    backgroundColor: Colors.Dark,
    borderColor: Colors.DarkBorderColor,
    iconColor: Colors.Grey,
  },
  progress: {
    backgroundColor: Colors.DarkGrey,
  },
  text: {
    color: Colors.LightGrey,
  },
  fileUploader: {
    color: Colors.LightGrey,
    backgroundColor: Colors.Dark,
    borderDashed: Colors.Grey,
    border: Colors.DarkBorderColor,
    actionIcons: Colors.LightGrey,
  },
};

export const LightTheme: TThemeProps = {
  timesheet: {
    borderColor: Colors.LightBorderColor,
    backgroundColor: Colors.LightBackground,
  },
  avatar: {
    default: {
      color: Colors.LightGrey,
      backgroundColor: Colors.LightInput,
    },
  },
  card: {
    secondary: {
      backgroundColor: Colors.LightBackground,
    },
    primary: {
      backgroundColor: Colors.White,
    },
    default: {
      backgroundColor: 'transparent',
      border: Colors.LightBorderColor,
    },
  },
  paragraph: {
    color: Colors.Grey,
  },
  editableText: {
    spinner: Colors.InfoColor,
    color: Colors.Dark,
  },
  scrollbar: {
    thumb: Colors.LightGrey,
    track: Colors.LightBorderColor,
  },
  color: Colors.Dark,
  secondaryColor: Colors.Grey,
  backButton: Colors.Dark,
  switch: {
    handle: Colors.White,
    themeSwitch: {
      backgroundColor: Colors.InfoColor,
      lightModeColor: Colors.InfoColor,
      darkModeColor: Colors.Dark,
    },
  },
  backgroundColor: Colors.White,
  secondaryBackgroundColor: Colors.LightBackground,
  radio: {
    label: Colors.DarkGrey,
    backgroundColor: Colors.White,
  },
  input: {
    backgroundColor: Colors.LightInput,
    placeholder: Colors.Grey,
    disabledPlaceholder: Colors.DisabledLightGrey,
    TextColorPrimary: Colors.TextColorPrimary,
    borderColor: Colors.LightBorderColor,
  },
  sidebar: {
    backgroundColor: Colors.White,
    menuBackgroundColor: Colors.LightBackground,
    color: Colors.Dark,
  },
  table: {
    backgroundColor: Colors.White,
    borderColor: Colors.LightBorderColor,
    hoverTextColor: Colors.Dark,
    sortersColor: Colors.InfoColor,
    pagesizeBackgroundColor: Colors.LightBackground,
    hoverRowBackgroundColor: Colors.LightTableBackground,
    checkboxBorderColor: Colors.Grey,
    checkboxLabelColor: Colors.DarkBorderColor,
    filterBackgroundColor: Colors.White,
    textColor: Colors.TextColorPrimary,
    expendedMenu: Colors.Grey,
    expendedMenuIcon: Colors.White,
  },
  datePicker: {
    backgroundColor: Colors.LightInput,
    borderColor: Colors.LightBorderColor,
    disabledBackgroundColor: 'rgba(0, 0, 0, 0.06)',
  },
  timeEntryTooltip: {
    backgroundColor: Colors.White,
  },
  timeEntryDetails: {
    item: {
      color: Colors.Grey,
    },
  },
  modal: {
    backgroundColor: Colors.White,
    backgroundOpacity: 'rgba(0, 0, 0, 0.2)',
  },
  dropdown: {
    backgroundColor: Colors.White,
    borderColor: Colors.LightBorderColor,
    boxShadowColor: 'rgba(81, 81, 81, 0.12)',
  },
  tooltip: {
    backgroundColor: Colors.DarkBorderColor,
    color: Colors.White,
  },
  icon: {
    color: Colors.LightGrey,
  },
  normalWrapper: {
    backgroundColor: Colors.LightBackground,
  },
  noResult: {
    color: Colors.Grey,
  },
  select: {
    color: Colors.TextColorPrimary,
  },
  selectableText: {
    backgroundColor: Colors.LightInput,
  },
  profileMenu: {
    color: Colors.Grey,
  },
  weekDays: {
    backgroundColor: Colors.LightBorderColor,
  },
  uploadButton: {
    backgroundColor: Colors.LightBackground,
    borderColor: Colors.LightBorderColor,
    iconColor: Colors.LightGrey,
  },
  progress: {
    backgroundColor: Colors.LightGrey,
  },
  text: {
    color: Colors.Grey,
  },
  fileUploader: {
    color: Colors.Grey,
    backgroundColor: Colors.LightInput,
    borderDashed: Colors.LightGrey,
    border: Colors.LightBorderColor,
    actionIcons: Colors.LightInput,
  },
};
