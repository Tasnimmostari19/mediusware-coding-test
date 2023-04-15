import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [value, setValue] = useState([])
    const [name, setName] = useState()
    const [status, setStatus] = useState()
    const [content, setContent] = useState([])

    const sort = ['active', 'completed']

    const handleClick = (val) => {
        setShow(val);
        let comp = []
        let other = []
        let temp = []
        if (val === 'all') {

            temp = (value.filter(v => v.status === 'active'))
            comp = (value.filter(v => v.status === 'completed'))
            other = (value.filter(v => v.status !== 'completed' && v.status !== 'active'))
            console.log(temp);
            temp.push(...comp)
            temp.push(...other)
            console.log(temp);
            setContent(temp)

        }

        else {
            // console.log(val);

            let temp = value
            // console.log(temp);
            temp = temp.filter(v => v.status === val)
            setContent(temp)
            // console.log(temp);
        }

    }
    // console.log(content);
    const handleName = e => {
        setName(e.target.value)
        // console.log(e.target.value)
    }

    const handleStatus = e => {
        setStatus(e.target.value)
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {

        const temp = value
        temp.push({ 'name': name, 'status': status })
        console.log(temp);

        setValue(temp)
        // console.log(value);
        e.preventDefault();
    }



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Name" name='name' onChange={handleName} />
                        </div>
                        <div className="col-auto">
                            <input type="text" className="form-control" placeholder="Status" name='status' onChange={handleStatus} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                content.map(v => <tr>
                                    <th scope="col">{v.name}</th>
                                    <th scope="col">{v.status}</th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;