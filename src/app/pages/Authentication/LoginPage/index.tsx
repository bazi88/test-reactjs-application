/* eslint-disable no-template-curly-in-string */
/**
 *
 * LoginPage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useLoginPageSlice } from './slice';
import { selectLoginPage } from './slice/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, InputNumber, Button, Checkbox } from 'antd';
import logo from '../../../../assets/images/logo.jpg';
interface Props {}

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export const LoginPage = memo((props: Props) => {
  const dispatch = useDispatch();
  const { actions } = useLoginPageSlice();
  const { token } = useSelector(selectLoginPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const onFinish = values => {
    const { user } = values;
    dispatch(actions.login(user));
  };

  return (
    <Div>
      <Warper>
        <img src={logo} alt="logo money forward" />
        <Form
          {...layout}
          name="nest-messages"
          initialValues={{
            user: {
              remember: true,
            },
          }}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'email']}
            label="Email"
            rules={[
              {
                type: 'email',
              },
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name={['user', 'password']}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name={['user', 'remember']}
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Warper>
    </Div>
  );
});

const Div = styled.div`
  background-color: #f4f6f7;
`;

const Warper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    padding: 20px;
    width: 500px;
    margin: 0 auto;
    border: 1px solid #eceaea;
  }
  img {
    margin: 0 auto;
    width: auto;
    height: 150px;
  }
`;
