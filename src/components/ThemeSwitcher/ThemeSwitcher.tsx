import React from 'react';
import { Icon, EIconNames } from '../Base/Icon';
import Switch from '../Base/Switch/Switch';
import { Text, Title } from '../Base/Typography';

import SThemeSwitcher from './ThemeSwitcher.style';

export const ThemeSwitcher = () => {
  // const dispatch = useAppDispatch();
  // const { theme, user } = useAppSelector(state => ({
  //   theme: state.appSettings.theme,
  //   user: state.authSlice.user,
  // }));
  // const [changeTheme, { isLoading }] = useChangeThemeMutation();
  // useEffect(() => {
  //   if (user) {
  //     if (user.theme.toLocaleLowerCase() === 'dark') {
  //       dispatch(setTheme('dark'));
  //     } else {
  //       dispatch(setTheme('light'));
  //     }
  //   }
  // }, [user?.theme]);

  // const onChange = async (checked: boolean) => {
  //   const themeMode = checked ? 'dark' : 'light';
  //   if (user?.id) {
  //     await changeTheme({
  //       resourceId: user.id,
  //       theme: themeMode.toUpperCase(),
  //     });
  //     dispatch(setUser({ ...user, theme: themeMode }));
  //   }
  // };
  return (
    <SThemeSwitcher>
      <Title fontlevel={4} className="theme mb-4">
        Theme
      </Title>
      <Text fontlevel={6} className="light-mode">
        <Icon
          icon={EIconNames.SUN}
          // color={theme === 'light' ? Colors.WarningColor : Colors.LightGrey}
          size={16}
          className="mr-2"
        />
        Light
      </Text>
      <Switch
        className="switch"
        size="small"
        // onChange={onChange}
        // loading={isLoading}
        // checked={theme === 'dark'}
      />
      <Text className="dark-mode" fontlevel={6}>
        <Icon
          icon={EIconNames.MOON}
          // color={theme === 'dark' ? Colors.WarningColor : Colors.LightGrey}
          size={16}
          // sx={8}
          className="mr-2"
        />
        Dark
      </Text>
    </SThemeSwitcher>
  );
};
