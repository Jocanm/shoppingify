import { FormatListBulleted, InsertChartOutlined, Replay } from "@mui/icons-material";

export interface RouteItem {
    path: string;
    name: string;
    icon: JSX.Element;
}

export const routesList: RouteItem[] = [

    {
        path: '/',
        name: 'items',
        icon: <FormatListBulleted />
    },
    {
        path: '/history',
        name: 'history',
        icon: <Replay />
    },
    {
        path: '/statistics',
        name: 'statistics',
        icon: <InsertChartOutlined />
    }

]