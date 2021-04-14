import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Results() {

	const [ data, setData ] = useState();


	useEffect(() => {
    const getItems = async () => {
        try {
            let mounted = true;
            if(mounted){
              const res = await axios.get('http://localhost:3000/items/');
							console.log("*****",res);
							setData(res.data);
							
            }
        } catch (err) {
        
        }
    }
    getItems();
	},[]);

	let values=[];
	let results=[];


	function formatData(data){
		let dict ={ 'k': 1000, 'm': 100000000, 'b': 100000000000 }
		for(let item of data) {
			console.log(item.value)
			let str = item.value;
			let num = parseFloat(str);
			let id = str.match(/[a-zA-Z]+/g);
			values.push([num,id[0]]);
			console.log(values);
		}
		for(let item of values){
			console.log("item",item);
			results.push(item[0]* dict[item[1]]);
		}
		console.log(results);
	}

	if(data){
		formatData(data);
	}
	

	//consolidate data
	for (let index = 0; index < values.length; index++) {
		values[index].push(results[index]);
	}
	console.log("->",values);
	

  return (
    <div className="Results">
      <h5>Results</h5>
			{/* display data with value entered and value translated */}
			<div className="container lista">
				{values.map(item => (
					<li key={item[0]+item[1]+Math.random()}>
						<div className="card">
							<div className="card-body">
								<h5 className="card-title">{item[0]+item[1]}</h5>
								<p className="card-text">{item[2]}</p>
							</div>
						</div>
					</li>
				))}
			</div>
			<div>
				<a href="/entry">Return to Entry Form </a>
			</div>
    </div>
  );
}

export default Results;
