import {
    home,
    flight,
    report,
    settings,
    statistics,
    wallet,
    british,
    qatar,
    lufthansa,
    emirates,
    profile1,
} from "../src/assets/icons";


export const menuItems = [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: home,
    },
    {
        label: "Flights",
        path: "/flights",
        icon: flight,

    },
    {
        label: "wallet",
        path: "/wallet",
        icon: wallet,

    },
    {
        label: "reports",
        path: "/reports",
        icon: report,

    },
    {
        label: "statistics",
        path: "/statistics",
        icon: statistics,

    },
    {
        label: "settings",
        path: "/settings",
        icon: settings,

    },
];

export const flightsArray = [
    {
        destination: {
            airport: 'BOM',
            time: '14:20',
        },
        takeoff: {
            airport: 'JFK',
            time: '13:00',
        },
        airline: {
            name: 'Emirates',
            logo: emirates,
            price: 1572,
        },
        duration: '11h 20m',
    },
    {
        destination: {
            airport: 'BOM',
            time: '14:20',
        },
        takeoff: {
            airport: 'JFK',
            time: '13:00',
        },
        airline: {
            name: 'British Airways',
            logo: british,
            price: 1500,
        },
        duration: '11h 20m',
    },
    {
        destination: {
            airport: 'BOM',
            time: '14:20',
        },
        takeoff: {
            airport: 'JFK',
            time: '13:00',
        },
        airline: {
            name: 'Qatar Airways',
            logo: qatar,
            price: 2072,
        },
        duration: '11h 20m',
    },
    {
        destination: {
            airport: 'BOM',
            time: '14:20',
        },
        takeoff: {
            airport: 'JFK',
            time: '13:00',
        },
        airline: {
            name: 'Lufthansa',
            logo: lufthansa,
            price: 1872,
        },
        duration: '11h 20m',
    },
];

export const imageArray = [
    {
        id: 1,
        image_url: profile1,
    },
    {
        id: 2,
        image_url: profile1,
    },
    {
        id: 3,
        image_url: profile1,
    },
    {
        id: 4,
        image_url: profile1,
    },
]