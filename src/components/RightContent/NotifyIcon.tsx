import {
    LoadingOutlined,
    ShakeOutlined,
    ThunderboltOutlined,
} from '@ant-design/icons';
import { useModel, useRequest } from '@umijs/max';
import { useMount } from 'ahooks';
import { Badge, Button, Tooltip } from 'antd';
import { ReactElement, useEffect, useState } from 'react';
import { history } from 'umi';

export type queueItem = {
    queueId?: string;
    label: string;
    children: ReactElement;
    color?: string;
    dot?: ReactElement;
    count: number;
    studentId?: string;
    studentName: string;
    creationtime?: string;
};

const NotifyIcon = () => {

    const { connectionSuccess, connectionClose, connect } = useModel('signalRHub', (ret) => ({
        connectionSuccess: ret.connectionSuccess,
        connectionClose: ret.connectionClose,
        connect: ret.connect
    }));

    return (
        <div style={{ fontSize: 13, color: 'red' }}>
            {!connectionSuccess && !connectionClose &&
                <>
                    <LoadingOutlined /> 正在重连...
                    <Tooltip title="点击重连">
                        <Button danger size='small' style={{ marginLeft: 5 }} icon={<ThunderboltOutlined />}
                        >
                        </Button>
                    </Tooltip>
                </>
            }
            {connectionClose &&
                <>
                    连接失败
                    <Tooltip title="点击重连">
                        <Button danger size='small' style={{ marginLeft: 5 }} onClick={() => {
                            connect();
                        }}
                            icon={<ThunderboltOutlined />}
                        >
                        </Button>
                    </Tooltip>
                </>
            }
            {connectionSuccess &&
                <Tooltip title="SignalR已连接">
                    <Badge>
                        <ThunderboltOutlined />
                    </Badge>
                </Tooltip >
            }
        </div>
    );
};

export default NotifyIcon;
