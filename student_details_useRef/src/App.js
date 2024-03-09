import React, {useRef} from "react";  // useRef hook used

function StudentDetails()
{
    const rno = useRef();
    const sname = useRef();
    const marks = useRef();

    // Event = Submit Button
     const handleSubmitButton=()=>{
        alert("Student Details :- "+rno.current.value+" "+sname.current.value+" "+marks.current.value);
     }

    // Event = Clear Button
     const handleClearButton=()=>{
        rno.current.value = "";
        sname.current.value = "";
        marks.current.value = "";
     }

    // JSX code
     return(
        <div>
            <center>
                <h1>useRef Hook Demo</h1>
                <div style={{backgroundColor:"yellow", borderRadius:20, height:300, width:500, alignItems:"center" }}>
                   <center>
                    <table>
                        <tr>
                            <td>Roll No.</td>
                            <td>
                                <input type="text" ref={rno}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Student Name</td>
                            <td>
                                <input type="text" ref={sname}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Marks</td>
                            <td>
                                <input type="text" ref={marks}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" onClick={handleSubmitButton}>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" onClick={handleClearButton}>Clear</button>
                            </td>
                        </tr>
                    </table>
                   </center>
                </div>
            </center>
        </div>
     );

}
export default StudentDetails;