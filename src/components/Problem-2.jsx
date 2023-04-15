import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [displayModal, setDisplayModal] = useState(false)
    const [data, setData] = useState([])
    const [contact, setContact] = useState([])
    const [checkBox, setCheckBox] = useState(true)

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setData(data.results))
    }, [])
    // console.log(data);

    const modalA = () => {
        setDisplayModal(true)
        setContact(data)

    }
    const modalB = () => {
        setDisplayModal(true)
        let temp = data
        temp = temp.filter(t => t.country.name === 'United States')
        setContact(temp)

    }

    const CheckBox = () => {
        setCheckBox(!checkBox)
        console.log(checkBox);
        if (checkBox === true) {
            let temp = contact
            temp = temp.filter(t => t.id % 2 == 0)
            setContact(temp)
        }
        else
            setContact(data)
    }
    console.log(contact);

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={modalA}>All Contacts</button>



                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={modalB}>US Contacts</button>
                </div>
                {
                    displayModal && <div>
                        <button className="btn btn-lg btn-outline-primary" type="button" style={{ color: '#46139f', border: '1px solid #46139f', marginRight: '20px' }} onClick={modalA}>All Contacts</button>
                        <button className="btn btn-lg btn-outline-primary" type="button" style={{ color: '#ff7f50', border: '1px solid #ff7f50', marginRight: '20px' }} onClick={modalB}>US Contacts</button>
                        <button className="btn btn-lg btn-outline-primary" type="button" style={{ color: '#46139f', border: '1px solid #46139f' }} onClick={() => setDisplayModal(false)}>Close</button>
                        {
                            contact.map(d => <div style={{ display: 'flex' }}>
                                <p>id: {d.id}</p>
                                <p style={{ marginRight: '10px' }}>phone: {d.phone}</p>
                                <p>country: {d.country.name}</p>
                            </div>)
                        }
                        <input type="checkbox" name="even" value="true" onClick={CheckBox}></input>
                    </div>
                }

            </div>
        </div>
    );
};

export default Problem2;