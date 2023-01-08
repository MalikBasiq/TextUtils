
import React, { useState } from 'react';
import PropTypes from 'prop-types';




export default function TextForm(props) {

    //const[variable Name, Function to update peche wala variable ] = useState("Default value ider likhte")

    //++==text is a State variable++++++
    const [text, setText] = useState(''); //++==text is a State variable++++++

    //text =" basiq" //wrong way to update text humne function jiska naam yahan setText ha ko use karna ha text ko update karne k lliay

    //Correct way to update text
    //setText("basiq");


    function ConvertoUppercase() {

        setText(text.toUpperCase());
        props.showAlert("Converted to Uppercase!", "success");
    }

    function ConvertoLowercase() {

        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!", "success");
    }
    function cleartext() {
        let newtext = "";
        setText(newtext);
        props.showAlert("Text Cleared!", "success");
    }

    function Handleonchange(event) {
        //console.log("change clicked");

        setText(event.target.value);  //iski ki waja se ab hum new text likh sakte hain 

    }

    function handleCopy() {



        navigator.clipboard.writeText(text); //ye copy ho rha clipboard ma 


        props.showAlert("Text Copied to Clipboard!", "success");
    }

    return (
        <>


            <div style={{ color: props.mode === 'dark' || props.redmode === true ? 'white' : '#343a40' }}  > {/* agr props.mode == dark ha to body/heading ka color white kardo agr dark wali condition false ha to color #343a40 kardo*/}
                <h1 >{props.heading}</h1>
                <div className="mb-3">

                    {/* jab new text likhain ge hum input box ma to ye onchange call hoga har key press pe*/}

                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' || props.redmode === true ? '#979191' : 'white', color: props.mode === 'dark' || props.redmode === true ? 'white' : '#343a40' }} id="myBox" onChange={Handleonchange} rows="6" value={text}></textarea>


                </div>
                <button disabled={text.length === 0} type="button" className="btn btn-danger mx-1 my-1 " onClick={ConvertoUppercase}>Convert to Upper case</button>

                <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={ConvertoLowercase}>Convert to Lower case</button>


                <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={cleartext}>Clear text</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' || props.redmode === true ? 'white' : '#343a40' }}>
                <h1>Your text summary</h1>

                <p> <b> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> words and  <b>{text.length} </b> characters</p>

                <p>You will read this in approximately <b> {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> minutes </p>

                <hr />
                <h2 className="my-3"><u>Preview of text</u></h2>
                <p><i><strong>{text.length > 0 ? text : "Nothing to preview!"}</strong></i></p>
            </div>


        </>
    );
}



TextForm.propTypes = {

    heading: PropTypes.string.isRequired,


}

TextForm.defaultProps = {

    heading: 'Enter the text to Analyze below',

};