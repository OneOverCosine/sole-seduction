import React, { useState } from 'react';
import { useNavigate, redirect } from 'react-router-dom';
import { Button, ToggleButton, Offcanvas, Spinner } from 'react-bootstrap';


const Filter = () => {

    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [filters, setFilters] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const selected = value => {
        return filters.includes(value);
    }

    const handleSelect = value => {
        if (!filters.includes(value))
            setFilters([...filters, value]);
        else {
            setFilters(filters.toSpliced(filters.indexOf(value), 1));
        }
    }

    const handleFilter = () => {
        setDisabled(true);
        //applyFilter();

        setDisabled(false);
        setShow(false);
    };

    const applyFilter = () => {

        console.log(`filters: ${filters}`);
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set('colours', filters); // working on here now
        let newUrl = window.location.pathname + "?" + currentUrlParams.toString();
        //console.log(`new url: ${newUrl}`);

        navigate(newUrl, { replace: true });
        window.location.reload(false);
    }



    return (
        <>
            <Button className='mt-1' variant='secondary' onClick={handleShow}>
                Filters
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Filters</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h5>Gender</h5>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 gender'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Men')}
                        onClick={() => handleSelect('Men')}
                    >
                        Men
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 gender'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Women')}
                        onClick={() => handleSelect('Women')}
                    >
                        Women
                    </ToggleButton>
                    <hr />
                    <h5>Brand</h5>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 brand'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("Doc Marten's")}
                        onClick={() => handleSelect("Doc Marten's")}
                    >
                        Doc Marten's
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 brand'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Prada')}
                        onClick={() => handleSelect('Prada')}
                    >
                        Prada
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 brand'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Balenciaga')}
                        onClick={() => handleSelect('Balenciaga')}
                    >
                        Balenciaga
                    </ToggleButton>
                    <hr />
                    <h5>Colour</h5>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 colours'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("black")}
                        onClick={() => handleSelect("black")}
                    >
                        Black
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 colours'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('brown')}
                        onClick={() => handleSelect('brown')}
                    >
                        Brown
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1 colours'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('blue')}
                        onClick={() => handleSelect('blue')}
                    >
                        Blue
                    </ToggleButton>
                    <hr />

                    <Button disabled={disabled} className='m-1' onClick={handleFilter}>
                        Filter Products&nbsp;
                        {disabled &&
                            <Spinner variant='light' animation="border" role="status" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Filter