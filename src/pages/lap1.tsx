import React from 'react'
import { Flex, Layout } from 'antd';


function Lap1() {
    const { Header, Footer, Content } = Layout;
    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#4096ff',
    };
    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '820px',
        color: '#fff',
        backgroundColor: '#0958d9',
    };


    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: '80%',
        margin: '0 auto',
    };

    return (
        <div>
            <Flex gap="medium" wrap>
                <Layout style={layoutStyle}>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
            </Flex>
        </div>
    )
}
export default Lap1
