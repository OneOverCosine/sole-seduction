import React, { useState } from 'react'
import { Button, ToggleButton, Offcanvas } from 'react-bootstrap'

const Filter = () => {

    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Men')}
                        onClick={() => handleSelect('Men')}
                    >
                        Men
                    </ToggleButton>
                    <ToggleButton
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
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("Doc Marten's")}
                        onClick={() => handleSelect("Doc Marten's")}
                    >
                        Doc Marten's
                    </ToggleButton>
                    <ToggleButton
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Prada')}
                        onClick={() => handleSelect('Prada')}
                    >
                        Prada
                    </ToggleButton>
                    <ToggleButton
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
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("Black")}
                        onClick={() => handleSelect("Black")}
                    >
                        Black
                    </ToggleButton>
                    <ToggleButton
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Brown')}
                        onClick={() => handleSelect('Brown')}
                    >
                        Brown
                    </ToggleButton>
                    <ToggleButton
                        className='m-1'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected('Blue')}
                        onClick={() => handleSelect('Blue')}
                    >
                        Blue
                    </ToggleButton>
                    <hr />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Filter