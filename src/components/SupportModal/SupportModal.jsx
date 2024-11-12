import React from 'react';
import './SupportModal.css';

const SupportModal = ({ onClose }) => {
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Download de Software de Suporte</h2>
                <p>Escolha uma das opções para baixar o software de suporte:</p>
                <div className="btns">
                    <button onClick={() => window.location.href = '/pt/downloads/thank-you?dv=win_exe'}>
                        <img src="https://www.teamviewer.com/etc.clientlibs/teamviewer/clientlibs/clientlib-resources/resources/favicon.png" alt="" srcset="" style={{ width: "32px" }} />
                        Baixar TeamViewer

                    </button>
                    <button onClick={() => window.location.href = "https://download.anydesk.com/AnyDesk.exe"}>
                        <img src="https://anydesk.com/_static/img/favicon/favicon-32x32.png" alt="" srcset="" />
                        Baixar AnyDesk
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SupportModal;
