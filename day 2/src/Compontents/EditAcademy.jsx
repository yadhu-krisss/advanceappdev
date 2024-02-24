// import './EditCourse2.css';
// import { useState } from 'react';
// // import Select from 'react-select';

// function EditCourse2() {
//     const [isActive, setIsActive] = useState(false);

//     const handleButtonClick = () => {
//         setIsActive((prev) => !prev);
//     };

//     return (
//         <div>
//             <div className="modal-containeru">
//                 <div className="modal-contentu">
//                     <div className="evnt-create-boxu">
//                         <div className=''>
//                             <br></br>
//                             {/* <a href="All"><img className="eb-imgu" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a> */}
//                             <h1 className='eb-h1u'>Add Academy</h1><br></br>
//                             <form className='event-detailsu'>
//                                 <div className="evetu">
//                                 <div className='event-itemsu'>
//                                     {/* <label className='eb-labelu'>Event Type</label> */}
//                                     <input className="eb-inputu" type="text" placeholder="Enter academy name"/>
//                                     {/* <label className='eb-labelu'>Event Description</label> */}
//                                     <input className="eb-inputu" type="text" placeholder="Enter the academy email"  required/>
//                                     {/* <label className='eb-labelu'>Charges</label> */}
//                                     {/* <input className="eb-inputu" type="text" placeholder="Enter the academy location"  required/> */}
//                                 </div>
//                                 <div  className='event-itemsu'>
//                                 {/* <label className='eb-labelu'>Event Package</label> */}
//                                     {/* <input className="eb-inputu" type="text" placeholder="Enter the Contact number" required /> */}
//                                     {/* <label className='eb-labelu'>Participants Count</label> */}
//                                     <input className="eb-inputu" type="text" placeholder="Enter the academy place"  required/>
//                                     {/* <input className="eb-inputu" type="text" placeholder="Enter the academy description"  required/> */}
//                                 </div>
//                                 </div>
//                                 <div  className='event-itemsu'>
//                                     <div className={`wrapperu ${isActive ? 'active' : ''}`}>
//                                         <button className={`custom-buttonu ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
//                                             <span>Update</span>
//                                             <div className="success">
//                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
//                                                     <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
//                                                 </svg>
//                                             </div>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default EditCourse2;



import './EditCourse2.css';
import { useState } from 'react';
import axios from 'axios';

function EditCourse2() {
    const [isActive, setIsActive] = useState(false);
    const [academyName, setAcademyName] = useState('');
    const [academyEmail, setAcademyEmail] = useState('');
    const [academyPlace, setAcademyPlace] = useState('');

    const handleButtonClick = async () => {
        setIsActive((prev) => !prev);

        try {
            const response = await axios.post('http://localhost:8080/chess/putacademy', {
                academyName,
                academyEmail,
                academyPlace
            });

            // Handle successful response
            console.log('Data sent successfully:', response.data);
        } catch (error) {
            // Handle error
            console.error('Error sending data:', error);
        }
    };

    return (
        <div>
            <div className="modal-containeru">
                <div className="modal-contentu">
                    <div className="evnt-create-boxu">
                        <div className=''>
                            <br></br>
                            <h1 className='eb-h1u'>Add Academy</h1><br></br>
                            <form className='event-detailsu'>
                                <div className="evetu">
                                    <div className='event-itemsu'>
                                        <input className="eb-inputu" type="text" placeholder="Enter academy name" value={academyName} onChange={(e) => setAcademyName(e.target.value)} />
                                        <input className="eb-inputu" type="text" placeholder="Enter the academy email" value={academyEmail} onChange={(e) => setAcademyEmail(e.target.value)} required />
                                    </div>
                                    <div className='event-itemsu'>
                                        <input className="eb-inputu" type="text" placeholder="Enter the academy place" value={academyPlace} onChange={(e) => setAcademyPlace(e.target.value)} required />
                                    </div>
                                </div>
                                <div className='event-itemsu'>
                                    <div className={`wrapperu ${isActive ? 'active' : ''}`}>
                                        <button className={`custom-buttonu ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
                                            <span>Update</span>
                                            <div className="success">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756">
                                                    <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditCourse2;
