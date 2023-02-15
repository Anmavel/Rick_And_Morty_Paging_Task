import React from "react";


export type Character ={
    id:number,
    name:string,
    status:string,
    species:string,
    type:string,
    gender:string,
    origin:Origin,
    location:LocationC,
    image:string,
    episode:string[],
    url:string,
    created:string
}

type Origin={
    name:string,
    url:string
}

type LocationC={
    name:string,
    url:string
}