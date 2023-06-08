import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ToggleButton, Offcanvas, Spinner } from 'react-bootstrap'

const Filter = () => {

    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const [filters, setFilters] = useState([]);

    const selected = value => {
        return filters.includes(value)
    }

    const handleSelect = value => {
        if (!filters.includes(value))
            setFilters([...filters, value]);
        else {
            setFilters(filters.toSpliced(filters.indexOf(value), 1))
        }
    }

    const filterProducts = () => {
        // set the url here...
        setDisabled(true);

        console.log(`filters[0]: ${filters[0]}`);
        let currentUrlParams = new URLSearchParams(window.location.search);
        currentUrlParams.set('brand', filters[0]);
        let newUrl = window.location.pathname + "?" + currentUrlParams.toString();
        console.log(`new url: ${newUrl}`);

        navigate(newUrl);

        setDisabled(false);
        setShow(false);
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
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Men')}
                        onClick={() => handleSelect('Men')}
                    >
                        Men
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1'
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
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("Doc Marten's")}
                        onClick={() => handleSelect("Doc Marten's")}
                    >
                        Doc Marten's
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Prada')}
                        onClick={() => handleSelect('Prada')}
                    >
                        Prada
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1'
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
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("black")}
                        onClick={() => handleSelect("black")}
                    >
                        Black
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('brown')}
                        onClick={() => handleSelect('brown')}
                    >
                        Brown
                    </ToggleButton>
                    <ToggleButton
                        disabled={disabled}
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('blue')}
                        onClick={() => handleSelect('blue')}
                    >
                        Blue
                    </ToggleButton>
                    <hr />

                    <Button disabled={disabled} className='m-1' onClick={filterProducts}>
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