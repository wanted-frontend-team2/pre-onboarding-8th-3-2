import { useState } from "react";

export default function useModal(): [boolean, () => void, () => void] {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return [modalVisible, showModal, hideModal];
}
