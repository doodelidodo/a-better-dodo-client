import React from 'react';
import './Diary.css';
import image from  './macdo.jpeg'

export default function Diary(props) {
    return(
        <div className="card">
           <div className="card-header">
               <div className="card-day">13</div>
               <div className="card-title">
                   <div>Ich bin ein Diary-Titel</div>
               </div>
           </div>
            <div>
                <img className="card-img" src={image} />
            </div>
            <div className="card-body">
                Das ist eine vorschau vom Text, der in einem Diary-Eintrag steht, er sollte nach einer gewissen länge abgeschnitten werden und mit 3 Punkten ergänzt werden. Somit ist es ein Teaser vom Modal, dass man aufmachen kann...
            </div>
        </div>
    )
}