import React, { useState } from 'react';
import AccessibleModal from './components/Modal';
import AccessibleForm from './components/Form';
import './styles/global.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Erişilebilir Uygulama</h1>
        <p className="app-description">
          Erişilebilirlik özellikleri ile geliştirilmiş ve css kullanılmış bir form ve modal örneği.
        </p>
      </header>



      <AccessibleModal isOpen={isModalOpen} onClose={closeModal} title="Bilgilendirme">
        <p>
          Klavye ve ekran okuyucu kullanıcıları için optimize edilmiştir.
        </p>
      </AccessibleModal>

      <section className="form-section">
        <h2>Bilgi Formu</h2>
        <AccessibleForm onSubmitSuccess={openModal} />
      </section>
    </div>
  );
};

export default App;

