import { Button, Form, Input, message } from 'antd'
import axios from 'axios';

// import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()
    const onFinish = (values) => {
        axios({
            url:'https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin',
            method:'POST',
            data:values,
        })
        .then((res)=>{
          if(res.data.success===true){
            localStorage.setItem("Mirjalol", res.data.data.tokens.accessToken.token);
            message.success("kirildi")
            navigate('/city')
          }
        }).catch((err)=>{
          message.error("kirilmadi")
        })
      };
  return (
    <div className='login'>
        <Form
        name='basic'
        onFinish={onFinish}
        autoComplete="off"
        layout='vertical'

  >
    <Form.Item
      label="Telefon raqam"
      name="phone_number"
      rules={[
        {
          required: true,
          message: 'Please input your username!',  
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        }
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item>
      <Button  type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login