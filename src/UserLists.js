import React from "react";
import ListComponent from "./ListComponent";

export default function UserLists(){
    return (
        <div>
            <ListComponent listName={'Minha lista'} />
            <ListComponent listName={'Minha lista 2'} />
        </div>
    );
};