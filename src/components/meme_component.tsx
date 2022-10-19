import { MemeData } from "./meme_data";
import "./meme.css";
import React from "react";
import { useEffect, useState } from "react";
interface MemeProps {
    meme: MemeData;
}

export const Meme = ({ meme }: MemeProps) => {
    return (
        <div>
            <img className="meme-image" src={meme.url} alt="" />
            <h1 className="meme-content">{meme.name}</h1>
        </div>
    );
};

export const MemeComponent = ({ memes }: { memes: MemeData[] }) => {
    return (
        <div>
            {memes.map((meme) => (
                <Meme meme={meme} key={meme.id} />
            ))}
        </div>
    );
}
