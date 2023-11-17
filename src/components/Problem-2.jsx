import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [allContacts, setAllContacts] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/?format=json')
            .then(res => res.json())
            .then(data => console.log(data.results));
    }, []);
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleShow}>All Contacts</button>
                    <button className="btn btn-lg btn-outline-warning" type="button" >US Contacts</button>
                </div>

            </div>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" show={show} onHide={handleClose}>
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" closeButton>
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal"  onClick={handleClose}>Close</button>
                            <button type="button" class="btn btn-primary"  onClick={handleClose}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Problem2;