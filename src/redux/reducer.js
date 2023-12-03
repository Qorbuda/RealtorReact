import React from "react";

const initialState = {
    currentPage: localStorage.getItem("currentPage") || "HomePage",
    locale: localStorage.getItem("localization") || "ka",

    mainPageList: [
        {
            name: "HomePage",
            link: "/",
            isActive: false,
        },
        {
            name: "AboutUs",
            link: "/about-us",
            isActive: false,
        },
        {
            name: "OurTeam",
            link: "/our-team",
            isActive: false,
        },
        {
            name: "BecomeAgent",
            link: "/become-agent",
            isActive: false,
        },
        {
            name: "Franchise",
            link: "/franchise",
            isActive: false,
        },
        {
            name: "Contact",
            link: "/contact",
            isActive: false,
        },
        {
            name: "PostProperty",
            link: "/post-property",
            isActive: false,
        },
    ],

};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "setCurrentPage":
            localStorage.setItem("currentPage", action.payload);
            return {...state, currentPage: action.payload};

        case "setLocale":
            localStorage.setItem("locale", action.payload)
            return {...state, locale: action.payload};
    };
};