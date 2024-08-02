// import React from "react";

const Cards = ({ title, content, icon: Icon }) => {
    return (
        <div className="p-4 rounded-lg shadow-md div w-bg-white">
            <div className="flex items-start justify-between div">
                <div className="flex-shrink-0 div">{Icon && <Icon className="text-2xl" />}</div>
            </div>
            <span className="block mb-1 font-semibold">{title}</span>
            <span className="mb-2 text-xl font-semibold">{content}</span>
        </div>
    );
};

export default Cards;
