import React, { useState } from 'react';
import axios from 'axios';

//form submit axios request to express API post to json.


function EntryForm() {

    const [ value, setValue ]= useState();

    function handleChange(evt){
			setValue(evt.target.value);
    }

    function submitForm(evt){
			console.log(value);
			evt.preventDefault();
			let data={'value': value.toLowerCase()};
			axios.post("http://localhost:3000/items/", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }


  return (
    <div className="entryForm">
        {/* form to add a value */}
				<div className="card">
					<div className="card-header">
						<h5 className="card-title">Value Converter</h5>
					</div>
					<form>
							<div className="card-body">
									<label htmlFor="number" className="form-label">Enter Value</label>
									<input type="value" onChange={handleChange} className="form-control" id="value" aria-describedby="value" placeholder="Example: 10M, 3B, .5M"/>
									<button onClick={submitForm} type="submit" className="submit-button btn btn-primary col-sm-12">Submit</button>
									<a href="/results">Go to Results </a>
							</div>
					</form>	
				</div>
    </div>
  );
}

export default EntryForm;
