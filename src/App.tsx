import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const notes = ["R", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#",
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"];

function App() {

    const [script, setScript] = useState('Empty');
    const [noteLen, setNoteLen] = useState('1/16');

    const pushToScript = (noteVal: number) => {
        alert(noteVal);
        alert(notes[noteVal]);
    };

    const noteLenSelected = (length: string) => {
        setNoteLen(length);
        alert(length);
    }

    const getNote = (noteNumber: number) => {
        return (
            <button onClick={() => pushToScript(noteNumber)}>{notes[noteNumber]}</button>
        );
    }

    return (
        <div className="App" style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 0, marginLeft: "100px" }}>
                {/* 63 */}
                <hr className='note-line-short' />
                <div className="single-note">
                    {getNote(63)}
                </div>

                {/* 61, 62 */}
                <div className="note-and-sharp">
                    {getNote(62)}
                    {getNote(61)}
                </div>
                {/* 60 */}
                <hr className='note-line-short' />
                <div className="single-note">
                    {getNote(60)}
                </div>
                {/* 58, 59 */}
                <div className="note-and-sharp">
                    {getNote(59)}
                    {getNote(58)}
                </div>
                <hr className='note-line-short' />
                {/* 56, 57 */}
                <div className="note-and-sharp">
                    {getNote(57)}
                    {getNote(56)}
                </div>
                {/* 55 */}
                <div className="single-note">
                    {getNote(55)}
                </div>
                <hr className='note-line-short' />
                {/* 53, 54 */}
                <div className="note-and-sharp">
                    {getNote(54)}
                    {getNote(53)}
                </div>
                {/* 51, 52 */}
                <div className="note-and-sharp">
                    {getNote(52)}
                    {getNote(51)}
                </div>
                <hr className='note-line-long' />
                {/* 49, 50 */}
                <div className="note-and-sharp">
                    {getNote(50)}
                    {getNote(49)}
                </div>
                {/* 48 */}
                <div className="single-note">
                    {getNote(48)}
                </div>
                <hr className='note-line-long' />
                {/* 46, 47*/}
                <div className="note-and-sharp">
                    {getNote(47)}
                    {getNote(46)}
                </div>
                {/* 44, 45 */}
                <div className="note-and-sharp">
                    {getNote(45)}
                    {getNote(44)}
                </div>
                {/* 43 */}
                <hr className='note-line-long' />
                <div className="single-note">
                    {getNote(43)}
                </div>
                {/* 41, 42 */}
                <div className="note-and-sharp">
                    {getNote(42)}
                    {getNote(41)}
                </div>
                <hr className='note-line-long' />
                {/* 39, 40 */}
                <div className="note-and-sharp">
                    {getNote(40)}
                    {getNote(39)}
                </div>
                {/* 37, 38 */}
                <div className="note-and-sharp">
                    {getNote(38)}
                    {getNote(37)}
                </div>
                <hr className='note-line-long' />
                {/* 36 */}
                <div className="single-note">
                    {getNote(36)}
                </div>
                {/* 34, 35 */}
                <div className="note-and-sharp">
                    {getNote(35)}
                    {getNote(34)}
                </div>
                {/* 32, 33 */}
                <div className="single-note">
                    <hr style={{ height: "5px", background: "#FFFFFF", border: "none", }} />
                </div>
                <hr className='note-line-short' />
                <div className="note-and-sharp">
                    {getNote(33)}
                    {getNote(32)}
                </div>
                <div>
                    <hr style={{ height: "5px", background: "#FFFFFF", border: "none", }} />
                </div>
                <div></div>
                {/* 31 */}
                <div className="single-note">
                    {getNote(31)}
                </div>
                <hr className='note-line-long' />
                {/* 30, 29 */}
                <div className="note-and-sharp">
                    {getNote(30)}
                    {getNote(29)}
                </div>
                {/* 28, 27 */}
                <div className="note-and-sharp">
                    {getNote(28)}
                    {getNote(27)}
                </div>
                <hr className='note-line-long' />
                {/* 26, 25 */}
                <div className="note-and-sharp">
                    {getNote(26)}
                    {getNote(25)}
                </div>
                {/* 24 */}
                <div className="single-note">
                    {getNote(24)}
                </div>
                <hr className='note-line-long' />
                {/* 23, 22 */}
                <div className="note-and-sharp">
                    {getNote(23)}
                    {getNote(22)}
                </div>
                {/* 21, 20 */}
                <div className="note-and-sharp">
                    {getNote(21)}
                    {getNote(20)}
                </div>
                <hr className='note-line-long' />
                {/* 19 */}
                <div className="single-note">
                    {getNote(19)}
                </div>
                {/* 18, 17 */}
                <div className="note-and-sharp">
                    {getNote(18)}
                    {getNote(17)}
                </div>
                <hr className='note-line-long' />
                {/* 16, 15 */}
                <div className="note-and-sharp">
                    {getNote(16)}
                    {getNote(15)}
                </div>
                {/* 14, 13 */}
                <div className="note-and-sharp">
                    {getNote(14)}
                    {getNote(13)}
                </div>
                <hr className='note-line-short' />
                {/* 12 */}
                <div className="single-note">
                    {getNote(12)}
                </div>
                {/* 11, 10 */}
                <div className="note-and-sharp">
                    {getNote(11)}
                    {getNote(10)}
                </div>
                <hr className='note-line-short' />
                {/* 9, 8 */}
                <div className="note-and-sharp">
                    {getNote(9)}
                    {getNote(8)}
                </div>
                {/* 7 */}
                <div className="single-note">
                    {getNote(7)}
                </div>
                <hr className='note-line-short' />
                {/* 6, 5 */}
                <div className="note-and-sharp">
                    {getNote(6)}
                    {getNote(5)}
                </div>
                {/* 4, 3 */}
                <div>
                    {getNote(4)}
                    {getNote(3)}
                </div>
                <hr className='note-line-short' />
                {/* 2, 1 */}
                <div >
                    {getNote(2)}
                    {getNote(1)}
                </div>
            </div>

            <div style={{ flex: 0 }} >
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", marginRight: "20px" }}>
                    <div>Note Length:</div>
                    <div><input type="radio" value="1/16" name="length" onChange={() => noteLenSelected('1/16')} checked={noteLen === '1/16'} /> 1/16</div>
                    <div><input type="radio" value="1/8" name="length" onChange={() => noteLenSelected('1/8')} checked={noteLen === '1/8'} /> 1/8</div>
                    <div><input type="radio" value="1/4" name="length" onChange={() => noteLenSelected('1/4')} checked={noteLen === '1/4'} /> 1/4</div>
                    <div><input type="radio" value="1/2" name="length" onChange={() => noteLenSelected('1/2')} checked={noteLen === '1/2'} /> 1/2</div>
                    <div><input type="radio" value="1/1" name="length" onChange={() => noteLenSelected('1/1')} checked={noteLen === '1/1'} /> 1/1</div>
                    <div><button style={{ width: "100px" }}>Add Rest</button></div>
                    <div><button style={{ width: "100px" }}>Remove Last</button></div>
                    <div><button style={{ width: "100px" }}>Export Script</button></div>
                </div>
            </div>
            <div style={{ flex: 0 }} >
                <textarea name="body">{script}</textarea>
            </div>
        </div>
    );
}



export default App;
