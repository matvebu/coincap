'use client';

import { Form, Input, Modal } from "antd";
import { DataType } from "./Table";

interface AddModalProps {
  open: boolean;
  onClose: () => void;
  coinData: DataType | null;
}

export default function AddModal({ open, onClose, coinData }: AddModalProps) {
  return <Modal open={open} onCancel={onClose} title={'Add ' + coinData?.coinName}>
    <Form.Item name="coinName" label="Coin quantity">
      <Input />
    </Form.Item>
  </Modal>
  ;
}