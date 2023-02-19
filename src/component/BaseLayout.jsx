import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Tag, Space, Table } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { findEmployeesApi } from '../services/employeeService';
import Login from './auth/Login';
import BasicForm from './BasicForm';
import './layout.css'

const { Header, Sider, Content } = Layout;

const BaseLayout = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployeeCallback = useCallback(
        apiResponse => {
            console.log('getEmployeeCallback.apiResponse', apiResponse);
            if (apiResponse && apiResponse.data) {
                const employeeFromAPI = [...apiResponse.data]
                setEmployees(employeeFromAPI);
            }
        },
        []
    );

    const errorCallback = () => {

    }
    
    useEffect(
        () => {
            findEmployeesApi(getEmployeeCallback, errorCallback);
        },
        [getEmployeeCallback]
    );

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '20%',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: '10%',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            width: '20%',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'blue' : 'red';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Detail {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Button type="primary" className='btn'>primary</Button>
                    <Button>secondary</Button>

                    <Table
                        columns={columns}
                        dataSource={employees}
                        pagination={{ 
                            position: ['topRight', 'bottomRight'],
                            pageSize: 5,
                            total: employees.length,
                            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
                        }}
                    />

                    <Login></Login>
                    <BasicForm></BasicForm>
                </Content>
            </Layout>
        </Layout>
    );
};
export default BaseLayout;