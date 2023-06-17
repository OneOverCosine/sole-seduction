import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ToggleButton, Offcanvas, Spinner } from 'react-bootstrap';

const FilterNew = () => {

    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const [gender, setGender] = useState([]);
    const [brand, setBrand] = useState([]);
    const [colours, setColours] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    return (
        <div>FilterNew</div>
    )
}

export default FilterNew