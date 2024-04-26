import React from 'react';
import "./Accordion.css"
import { Link } from 'react-router-dom';

const Accordion = ({data}) => {
    
    return (
        <div className="accordion" id="accordionExample">
            {
                data.map((c)=>{
                    return <div key={c.mainCategory} className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${c.mainCategory}`} aria-expanded="false" aria-controls={`collapse${c.mainCategory}`}>
                            {c.mainCategory}
                        </button>
                    </h2>
                    <div id={`collapse${c.mainCategory}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                            {
                                c.categories.map((e)=>{
                                    return <li type="button" data-bs-dismiss="offcanvas" key={e}><Link to={`/category/${e.toLowerCase().replace(' ', '-')}`} className="dropdown-item dropdown-item-mobile">{e}</Link></li> 
                                })
                            }
                                <li type="button" data-bs-dismiss="offcanvas"><Link to={`/category/${c.mainCategory.toLowerCase()}`} className="dropdown-item dropdown-item-mobile-verTodo">Ver Todo</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                })
            }
        </div>
    );
}

export default Accordion;
