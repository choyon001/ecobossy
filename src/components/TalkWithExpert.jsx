import  { useEffect, useState } from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');

const TalkWithExpert = ({ expertId, serviceType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const checkBusinessHours = () => {
    const now = new Date();
    const currentHour = now.getHours();
    return currentHour >= 10 && currentHour < 20;
  };

  useEffect(() => {
    if (checkBusinessHours()) {
      let meetLink = "https://meet.google.com/new";

      if (expertId) {
        meetLink = `https://meet.google.com/${expertId}`;
      } else if (serviceType) {
        meetLink = `https://meet.google.com/${serviceType}-support`;
      }

      window.open(meetLink, '_blank');
    } else {
      setIsModalOpen(true);
    }
  }, [expertId, serviceType]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center rounded-lg">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Expert Availability"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#fff',
            maxWidth: '400px',
            width: '90%',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-800">Expert Unavailable</h2>
          <p className="text-gray-600 mb-4">
            Our experts are available from <strong>10:00 AM - 8:00 PM (Monday to Saturday)</strong>. Please try again during these hours.
          </p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TalkWithExpert;
