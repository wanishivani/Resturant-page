import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Modal.css';
const Backdrop =(props)=>{
    return<div className={classes.backdrop}></div>

    
}
const ModalOverlay=(props)=>{
    return( 
        <div className={classes.Modal}>
        <div className={classes.content}>{props.children}</div>
        </div>
        )
}
const Portal=document.getElementById('over-lays');

const Modal =(props)=>{
    return(
<Fragment>
    {ReactDOM.createPortal(<Backdrop/>,Portal)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,Portal)}

</Fragment>
 )   
};
export default Modal;