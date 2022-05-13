import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)

        return () => {
            clearTimeout(timerId);
        }

    }, [text]);

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { //dobijamo ceo response, ali nas zanima samo data deo, zato radimo distructuring
                params: {  //jer data property sadrzi informacije koje dobijamo od google API-ja 
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        };
        doTranslation();
    }, [language, debouncedText]);

    /*useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, { //dobijamo ceo response, ali nas zanima samo data deo, zato radimo distructuring
                params: {  //jer data property sadrzi informacije koje dobijamo od google API-ja 
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        };
        doTranslation();
    }, [language, text]); */

    return (
        <div>
            <h1 className="ui header"> {translated} </h1>
        </div>
    );
};

export default Convert;