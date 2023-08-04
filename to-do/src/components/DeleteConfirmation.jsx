import React from 'react';

const DeleteConfirmation = ({ isOpen, onCancel, onConfirm , text}) => {
    if (!isOpen) return null;

    return (
        <div className="confirmation">
            <div className="confirmation-content">
                <div className="content-modal">
                <h2>Confirmar exclusão</h2>
                <p>Tem certeza que deseja excluir esta tarefa "{text}" ?</p>
                <div className="confirmation-buttons">
                    <button onClick={onCancel}>Cancelar</button>
                    <button onClick={onConfirm}>Confirmar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;