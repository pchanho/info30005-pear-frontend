/*TODO
*  1. Login feature
*  2. */

import { useState, useEffect } from "react";
import FormData from "form-data"

// const BASE_URL = "https://info30005-pear.herokuapp.com";

//Temporary base url before update heroku server
const BASE_URL = "https://info30005-pear.herokuapp.com";

function getConversations() {
    const endpoint = BASE_URL + '/conversation/readAll';
    console.log("getConversations");
    return fetch(endpoint).then(res => res.json());
}

// export function getConversation(id) {
//     const endpoint = BASE_URL + `/conversation/readOne/${id}`;
//     console.log("getConversation");
//     return fetch(endpoint).then(res => {
//         console.log(res);
//     });
// }

export function useConversations() {
    const [loading, setLoading] = useState(true);
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getConversations()
            .then(conversations => {
                setConversations(conversations);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        conversations,
        error
    };
}


export function addConversation(conversation) {
    const { topic, category, image } = conversation;
    if (!topic || !category) {
        alert("must include all required fields");
        return;
    }

    if (image == undefined){
        alert("no image detected, default image used in place")
    }

    const data = new FormData();
    data.append('topicImage', image);
    data.append('topic', topic);
    data.append('category', category);

    const endpoint = BASE_URL + `/conversation/create/`;
    console.log("addConversation");
    // console.log(author);
    return fetch(endpoint, {
        method: "POST",
        body: data
    }).then(res => window.location.reload());
}

export function addAccount(account) {
    const { firstName, lastName, email, birthday, password } = account;
    if (!firstName || !lastName || !email || !birthday || !password) {
        alert("must include all fields");
        return;
    }

    console.log({
        firstName,
        lastName
    });

    const endpoint = BASE_URL + `/account/create/`;
    console.log("addAccount");
    
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email, 
            birthday, 
            password
        })
    }).then(res => window.location.reload());
}

export function accountLogin(login) {
    const { email, password } = login;
    if (!email || !password) {
        alert("must include all fields");
        return;
    }

    console.log({
        email,
        password
    });

    const endpoint = BASE_URL + `/account/login/`;
    console.log("login");

    return fetch(endpoint, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(res => window.location.reload());
}



/*----------------
 Message API
----------------*/
export function addMessage(message) {
    const {conversationId, senderId, text, image, video } = message;
    if (!conversationId || !senderId || !text) {
        alert("must include all fields");
        return;
    }


    const endpoint = BASE_URL + `/message/create/`;
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            conversationId,
            senderId,
            text, 
            image, 
            video
        })
    }).then(res => window.location.reload());
}

function getSpecific(data) {        
    

    const conversationId  = data.conversationId;
    if (!conversationId) {
        alert("must include all fields");
        return;
    }

    const endpoint = BASE_URL + '/message/readSpecific';
    return fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            conversationId
        })
    }).then(res => res.json());
}

function getMessages() {
    const endpoint = BASE_URL + '/message/readAll';
    console.log("getMessages");
    return fetch(endpoint).then(res => res.json());
}

// export function getConversation(id) {
//     const endpoint = BASE_URL + `/conversation/readOne/${id}`;
//     console.log("getConversation");
//     return fetch(endpoint).then(res => {
//         console.log(res);
//     });
// }

export function useMessages(data) {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getSpecific(data)
            .then(messages => {
                setMessages(messages);
                setLoading(false);
            })
            .catch(e => {
                console.log(e);
                setError(e);
                setLoading(false);
            });
    }, []);

    return {
        loading,
        messages,
        error
    };
}
