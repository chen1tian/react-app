import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
    pwa?: boolean;
    logo?: string;
} = {
    "title": "React App",
    "navTheme": "light",
    "colorPrimary": "#1890ff",
    "layout": "top",
    "contentWidth": "Fluid",
    "fixedHeader": false,
    "fixSiderbar": true,
    "pwa": true,
    "logo": "/logo.svg",
    "token": {},
    "splitMenus": false,
    "footerRender": false
};

export default Settings;
