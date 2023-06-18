import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ToggleButton, Offcanvas, Spinner } from 'react-bootstrap';

const FilterNew = ({ categories }) => {

    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [filters, setFilters] = useState({ Gender: [], Brand: [], Colour: [] });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const selected = value => {
        // logic to determine whether a filter button has been pressed
        // should ideally return true or false
        Object.keys(filters).forEach(key => {
            if (filters[key].includes(value)) {
                console.log(`${value} was selected`)
                return true;
            }
        });

        console.log(`${value} was not selected`)
        return false;
    }

    const handleSelect = (key, value) => {
        console.log(`Button with the value ${value} was pressed`)
        if (!selected(value)) {
            console.log("add the value to filters")
        }
        else {
            // remove the value from filters
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
                    {/* show the filter options here */}

                    <ToggleButton
                        disabled={disabled}
                        className='m-1 gender'
                        variant="outline-secondary"
                        type="checkbox"
                        checked={selected("Men")}
                        onClick={() => handleSelect("Gender", "Men")}
                    ></ToggleButton>

                    {/* <Button disabled={disabled} className='m-1' onClick={handleFilter}>
                        Filter Products&nbsp;
                        {disabled &&
                            <Spinner variant='light' animation="border" role="status" size="sm">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        }
                    </Button> */}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default FilterNew