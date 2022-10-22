import styles from './Modal.module.css'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom"
import {useEffect} from "react";
import PropTypes from "prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

function Modal({ closeModal, children}) {
    const modalRoot = document.getElementById('react-modals')

    useEffect(() => {
        const closeModalPressEsc = (e) => {
            if (e.key === 'Escape') {
                closeModal()
            }
        }
            document.addEventListener('keyup', closeModalPressEsc)
            return () => {
                document.removeEventListener('keyup', closeModalPressEsc)
            
        }
    }, [closeModal])


    return ReactDOM.createPortal(
        
        <>
                <>
                    <ModalOverlay toggleModal={closeModal}/>
                    <div className={styles.modal} onClick={event => event.stopPropagation()}>
                        <button className={styles.button} type={"button"} onClick={closeModal}>
                            <CloseIcon type="primary"/>
                        </button>
                        {children}
                    </div>
                </>
        </>
        ,
        modalRoot
    )
}

Modal.propTypes = {
    toggleModal: PropTypes.func.isRequired,
    children: PropTypes.element,
    overlay: PropTypes.element,
};

export default Modal
