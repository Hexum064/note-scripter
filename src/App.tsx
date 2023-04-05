import { stringify } from 'querystring';
import { useState } from 'react';
import './App.css';
import { noteBar, bars } from './notes';

const middleCIndex = 32;

type scriptEntry = {
    name: string,
    length: string,
    id: number
}

const restBar: noteBar = {
    noteName: 'R',
    octave: 0,
    lineType: 'none',
    hasSharp: false
}

function App() {

    const [script, setScript] = useState<scriptEntry[]>([]);
    const [noteLen, setNoteLen] = useState('1/16');
    const [scriptName, setScriptName] = useState('');

    const pushToScript = (bar: noteBar, id: number) => {
        console.log(bar.noteName + bar.octave + ":" + id);
        const entry: scriptEntry = { name: bar.noteName + bar.octave, length: noteLen, id: id };
        const tempScript = Array.from(script);
        tempScript.push(entry);
        setScript(tempScript);

    };

    const removeLastScriptEntry = () => {
        const tempScript = Array.from(script);
        tempScript.pop();
        setScript(tempScript);
    }

    const removeScriptEntry = (entry: scriptEntry) => {

        const tempScript: scriptEntry[] = [];

        script.forEach(element => {
            if (element !== entry)
                tempScript.push(element);
        });

        setScript(tempScript);
    }

    const noteLenSelected = (length: string) => {
        setNoteLen(length);
    }

    const generateEncodedScripts = () => {
        const noteScript = generateNoteScripts();
        const extLenScript = generateLengthExtensionScript();
        const noteText = generateNotesToText();
        const blob = new Blob([noteScript + '\n', extLenScript + '\n',noteText], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = (scriptName ? scriptName + '-' : '') + 'notes.txt';
        link.href = url;
        link.click();

        console.log(noteScript);
        console.log(extLenScript);
        console.log(noteText);
    }

    const generateNotesToText = () => {
        let noteText: string = '';
        script.forEach((element, index) => {
            noteText += index + ": " + element.length + " " + element.name + "\n";
        })

        return noteText;
    }

    const generateNoteScripts = () => {
        let noteScript: string = '{';
        let noteVal: number;


        script.forEach(element => {

            switch (element.length) {

                case '1/1':
                    noteVal = 0;
                    break;
                case '1/2':
                    noteVal = 48;
                    break;
                case '1/4':
                    noteVal = 32;
                    break;
                case '1/8':
                    noteVal = 16;
                    break;
                case '1/16':
                default:
                    noteVal = 0;
                    break;
            }



            noteVal += element.id;

            noteScript += "0x" + noteVal.toString(16) + ",";

        })

        return cleanEncodedScript(noteScript);
    }

    const generateLengthExtensionScript = () => {
        let lenExtScript: string = '{';
        let lengthExt: number = 0;
        let bitPos: number = 0;

        script.forEach(element => {

            console.log("bit pos: " + bitPos);
            if (element.length === '1/1') {
                console.log("add " + Math.pow(2, bitPos));
                lengthExt += Math.pow(2, bitPos);
                console.log(lengthExt);
            }

            bitPos++;

            if (bitPos >= 8) {
                lenExtScript += "0x" + lengthExt.toString(16) + ",";
                bitPos = 0;
                lengthExt = 0;
            }
        });

        //Get whatever is left
        if (bitPos > 0) {
            lenExtScript += "0x" + lengthExt.toString(16) + ",";
            bitPos = 0;
        }

        return cleanEncodedScript(lenExtScript);

    }

    const cleanEncodedScript = (encodedScript: string) => {

        if (encodedScript.endsWith(',')) {
            encodedScript = encodedScript.slice(0, encodedScript.length - 1);
        }

        return encodedScript + '}';

    }

    const generateNotes = () => {
        let id = 1;

        return (
            <div style={{ display: "flex", flexDirection: "column", flex: 0, marginLeft: "100px" }}> {
                bars.map((bar: noteBar) => {
                    const barComp = generateBar(bar, id);
                    id += bar.hasSharp ? 2 : 1;
                    return barComp;
                })
            }
            </div>);
    }

    const generateBar = (bar: noteBar, id: number) => {

        const className = bar.hasSharp ? 'note-and-sharp' : 'single-note';

        return (
            <>
                {id === middleCIndex &&
                    <div className="single-note">
                        <hr style={{ height: "5px", background: "#FFFFFF", border: "none", }} />
                    </div>
                }
                {bar.lineType === 'short' && <hr className='note-line-short' />}
                {bar.lineType === 'long' && <hr className='note-line-long' />}
                <div className={className}>
                    {bar.hasSharp && <button onClick={() => pushToScript(bar, id)}>{bar.noteName}#{bar.octave}</button>}
                    <button onClick={() => pushToScript(bar, id + (bar.hasSharp ? 1 : 0))}>{bar.noteName + bar.octave}</button>
                </div>
                {id === middleCIndex &&
                    <div className="single-note">
                        <hr style={{ height: "5px", background: "#FFFFFF", border: "none", }} />
                    </div>
                }
            </>
        );
    }

    return (
        <div className="App" style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>

            <>{generateNotes()}</>

            <div style={{ flex: 0 }} >
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "20px", marginRight: "20px" }}>
                    <div>Note Length:</div>
                    <div><input type="radio" value="1/16" name="length" onChange={() => noteLenSelected('1/16')} checked={noteLen === '1/16'} /> 1/16</div>
                    <div><input type="radio" value="1/8" name="length" onChange={() => noteLenSelected('1/8')} checked={noteLen === '1/8'} /> 1/8</div>
                    <div><input type="radio" value="1/4" name="length" onChange={() => noteLenSelected('1/4')} checked={noteLen === '1/4'} /> 1/4</div>
                    <div><input type="radio" value="1/2" name="length" onChange={() => noteLenSelected('1/2')} checked={noteLen === '1/2'} /> 1/2</div>
                    <div><input type="radio" value="1/1" name="length" onChange={() => noteLenSelected('1/1')} checked={noteLen === '1/1'} /> 1/1</div>
                    <div><button style={{ width: "100px" }} onClick={() => pushToScript(restBar, 0)}>Add Rest</button></div>
                    <div><button style={{ width: "100px" }} onClick={removeLastScriptEntry}>Remove Last</button></div>
                    <div><button style={{ width: "100px" }} onClick={generateEncodedScripts}>Export Script</button></div>
                </div>
            </div>
            <div style={{ flex: 0, minWidth: '140px' }} >
                Script Name:
                <input name='script-name' onChange={(event) => setScriptName(event.target.value)}/>
                <text>Note Script:</text>
                {
                    script.map((entry: scriptEntry, index: number) => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', width: '120px' }}>
                                    <div style={{ width: '40px' }}>
                                        {index}:
                                    </div>
                                    <div style={{ width: '40px' }}>
                                        {entry.name}
                                    </div>
                                    <div>
                                        {entry.length}
                                    </div>
                                </div>
                                <button style={{ width: '20px' }} onClick={() => removeScriptEntry(entry)}>x</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}



export default App;
