import { Form, Input, Button, Select, Row, Col } from 'antd';
import { ReactNode, useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import { server } from '../utils/server';
import styles from '../styles/login.module.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const configUsername = {
    rules: [
        {
            required: true,
            message: 'Vui lòng nhập tên đăng nhập',
        },
    ],
};
const configPassword = {
    rules: [
        {
            required: true,
            message: 'Vui lòng nhập mật khẩu',
        },
    ],
};
const Login = () => {
    const router = useRouter();
    if (typeof window !== 'undefined') {
        if (localStorage.getItem("accessToken")) {
            router.replace("/order");
        }
    }

    const [loginFail, setLoginFail] = useState("");
    const [form] = Form.useForm();

    const onFinish = async (values: any) => {
        const result = await axios.post(`${server}/api/user/login`, values);
        if (result.status === 400) {
            console.log(result);
            return;
        }
        if (!result.data.success) {
            setLoginFail("Tên đăng nhập hoặc mật khẩu sai !!!")
            return;
        }
        localStorage.setItem("accessToken", result.data.data);
        router.replace("/order");
    };

    return (
        <Row justify="center">
            <Col span={17}>
                <img src="images/login.jpg" className={styles.imageBackground} />
            </Col>
            <Col span={7} className={styles.loginPath}>
                <div className={styles.form}>
                    <Form form={form} name="control-hooks" onFinish={onFinish}>
                        <h1 className='textCenter title'>Đăng nhập</h1>
                        <Form.Item name="username" {...configUsername}>
                            <Input size="large" placeholder='Tên đăng nhập' prefix={<UserOutlined />} />
                        </Form.Item>
                        <Form.Item name="password" {...configPassword}>
                            <Input.Password size="large" placeholder='Mật khẩu' prefix={<LockOutlined />} />
                        </Form.Item>
                        <Form.Item className='textCenter'>
                            <Button type="primary" htmlType="submit" size="large">
                                Đăng nhập
                            </Button>
                        </Form.Item>
                        <p className='textCenter red'>{loginFail}</p>
                    </Form>
                </div>
            </Col>
        </Row>

    );
};

Login.isDefaultLayout = function isDefaultLayout() {
    return true;
}
export default Login;