'use client';

import { Button, Flex, Form, InputNumber, Modal } from "antd";
import { DataType } from "./Table";

interface AddModalProps {
  open: boolean;
  onClose: () => void;
  coinData: DataType | null;
}

export default function AddModal({ open, onClose, coinData }: AddModalProps) {
    const [form] = Form.useForm();
    const handleSubmit = (values: {coinName: number}) => {
    console.log(values);
    form.resetFields();
    onClose();
  }
  return <Modal centered width={400} open={open}  title={'Buy ' + coinData?.coinName} onCancel={onClose} footer={null}>
       <Flex vertical align="center" gap="middle">
        <Form layout="inline" onFinish={handleSubmit} form={form}>
     <Form.Item name="coinName" label="Quantity" rules={[{ required: true, type: 'number', message: 'Please input your quantity!' }]}>
      <InputNumber min={0} changeOnWheel/>
    </Form.Item>
    <Button type="primary" htmlType="submit" className="w-48" style={{ marginTop: 10 }}>
      Add
    </Button>
     </Form>
        </Flex>  
   </Modal>
};
