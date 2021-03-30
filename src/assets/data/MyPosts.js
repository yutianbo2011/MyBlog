import img1 from '../image/1.png';
import img2 from '../image/2.png';
import React from "react";

export const MyPosts = [
    {
        id: 0, 
        title: 'The 5 Types Of React Application State', 
        subtitle: 'Data Communication Control Session Location', 
        content:'Data state covers information which your application temporarily stores about the big wide world. That is, it covers your business data. Now let’s say you’re building something hip and cool like an invoicing application. Examples of the Data state for you application will include things received from the server — invoices, contacts, receipts, etc. And, as all of your data comes from the outside world, it is probably going to have some sort of identifier which you use to request i.This fact makes it easy to design a Redux store for our data; at minimum, it is going to include a way to map a type and id to a received object. It will also include actions to update the store with received objects.And this is awesome, because now we have a data store which can be accessed from anywhere within the application using connect. Also, as long as your data follows the rule of data state, you can spice things up with indexes and custom higher order components too.',
        imageUrl: img2,
    },
    {
        id: 1,
        title: "Redux Basic",
        subtitle: "A JavaScript library for managing application state",
        content:'Redux is a pattern and library for managing and updating application state, using events called actions. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion. \n The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.\n Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There is more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It iss a trade-off between short term and long term productivity.',
        imageUrl: img1,
    },
    

];