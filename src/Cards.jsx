import React from "react";

function Card (props){
    return  (
      <> <div className="cards">
                      <div className="card">
                        <img src="https://picsum.photos/200/300" alt="mypic" className="card_img" />
                        <div className='card_info'>
                          <span className="card_category">A NetFlix Original Series </span>
                          <h3 className="card_title">DARK</h3>
                          <a href="https://github.com/HamidAli105?tab=repositories" target="blank"> <button>Watch Now </button> </a>
                        </div>
                       </div>
                      </div></>
    )
  }