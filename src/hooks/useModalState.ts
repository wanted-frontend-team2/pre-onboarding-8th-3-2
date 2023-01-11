import { useState } from "react";

/**
 * Returns a visible state of the modal, a function that shows the modal, and a function that hides the modal.
 */
export default function useModalState(): [boolean, () => void, () => void] {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  return [modalVisible, showModal, hideModal];
}
