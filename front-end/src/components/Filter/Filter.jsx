import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ToggleButton, Offcanvas, Spinner } from 'react-bootstrap';

const Filter = ({ categories }) => {

    const [show, setShow] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [filters, setFilters] = useState({ Gender: [], Brand: [], Colour: [] });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const selected = value => {
        for (const filterType in filters) {
            if (filters[filterType].includes(value)) return true;
        }
        return false;
    }

    const handleSelect = (key, value) => {
        if (!selected(value)) addFilter(key, value);
        else removeFilter(key, value);
    }

    const handleFilter = () => {
        setDisabled(true);
        applyFilter()
        setDisabled(false);
        setShow(false);
    };

    const applyFilter = () => {
        let currentUrlParams = new URLSearchParams(window.location.search);

        for (let [key, values] of Object.entries(filters)) {
            if (filters[key].length === 0) {
                continue;
            }

            key = key.toLowerCase();
            if (key === "colour") {
                key += "s";
                for (let i = 0; i < values.length; i++) {
                    values[i] = values[i].toLowerCase();
                }
            }
            currentUrlParams.set(key, values);
        }

        let newUrl = window.location.pathname + "?" + currentUrlParams.toString();
        navigate(newUrl, { replace: true });
        window.location.reload(false);
        console.log(`New url: ${newUrl}`);
    }

    const addFilter = (key, value) => {
        let newFilters = filters;
        newFilters[key].push(value);
        setFilters(newFilters);
    }

    const removeFilter = (key, value) => {
        let newFilters = filters;
        newFilters[key].splice(newFilters[key].indexOf(value), 1);
        setFilters(newFilters);
    }

    const showCategories = categoryType => {
        if (typeof categories === "undefined" || categories.length === 0) {
            return <p>No category data...</p>;
        }

        // highlight selected filters....

        return categories[categoryType].map((item, index) => {
            return (
                <ToggleButton
                    key={index}
                    disabled={disabled}
                    className={`m-1 ${categoryType === "Colour" ? categoryType.toLowerCase() + "s" : categoryType.toLowerCase()}`}
                    variant="outline-secondary"
                    type="checkbox"
                    checked={selected(item)}
                    onClick={() => handleSelect(categoryType, item)}
                >
                    {item}
                </ToggleButton>
            )
        });
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
                    {showCategories("Gender")}
                    <hr />

                    <h5>Brand</h5>
                    {showCategories("Brand")}
                    <hr />

                    <h5>Colour</h5>
                    {showCategories("Colour")}
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