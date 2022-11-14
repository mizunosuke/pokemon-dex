import "./PokemonCard.css";
import pokeball from "../images/pokeball_black.png";
import { Modal } from "./Modal";
import { useState } from "react";

export const PokemonCard = ({
    id,
    image,
    name,
    type,
    weight,
    height,
    stats,
    statsName
}) => {

    const [ isShown, setIsShown ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const openModalHandler = () => {
        setIsModalOpen(true);
    }

    const closeModalHandler = () => {
        setIsModalOpen(false);
    }

    console.log(stats);
    console.log(statsName);
    

    return (
        <div className="container">
            {isShown && (
            <div className="show">
                <div className="stats-container-title">
                    <img src={image} alt={name} className="image-title" />
                    <p style={{width:"180px",color:"black"}}>No.{id}</p>
                    <p>{name}</p>
                    <img src={pokeball} alt="pokeball" className="pokeball-title" />
                </div>
                <img src={image} alt={name} />
                <div style={{display:"flex",width:"100%"}}>
                    <div style={{background:"#dbdbd9",textAlign:"center"}} className="stats-left">
                        <p>タイプ</p>
                        <p>たかさ</p>
                        <p>おもさ</p>
                    </div>
                    <div className="stats-right" style={{background:"#ffffff"}}>
                        <p>{type}</p>
                        <p>{height}0 cm</p>
                        <p>{weight} lbs</p>
                    </div>
                </div>

                <div className="base-stats">
                    <div>
                        {statsName.map((statName) => (
                            <p className="stats">{statName}</p>
                        ))}
                    </div>
                    <div>
                        {stats.map((statsnum) => {
                            <p className="stats">{statsnum}</p>
                        })}
                    </div>
                </div>
            </div>
            )}

            <div className="right"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={openModalHandler}
            >
                <img src={image} alt={name} style={{maxHeight:"50px",marginRight:"10px",width:"50px"}} />
                <p style={{width:"270px"}}>No.{id}</p>
                <p>{name}</p>
                <img src={pokeball} alt="pokeball" style={{marginLeft:"auto",width:"40px"}} />
            </div>
                {isModalOpen && (
                    <Modal s
                    id={id}
                    name={name}
                    image={image}
                    height={height}
                    weight={weight}
                    stats={stats}
                    statsName={statsName}
                    type={type}
                    onClick={closeModalHandler}
                    />
                )}
        </div>
    )
}

