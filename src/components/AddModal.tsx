'use client';

import { Modal } from "antd";
import { DataType } from "./Table";

interface AddModalProps {
  open: boolean;
  onClose: () => void;
  coinData: DataType | null;
}

export default function AddModal({ open, onClose, coinData }: AddModalProps) {
  return <Modal open={open} onCancel={onClose} title={coinData?.coinName}/>;
}