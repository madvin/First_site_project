
    let sum = 0;
    function addValue() {

        const value = Number(document.getElementById('valueInput').value);
      
        sum += value; 
        console.log(sum);
        
    
        const sumEl = document.getElementById("sum");
        sumEl.innerText = sum;
    
     
        if (value) {
            const listItem = document.createElement('li');
            listItem.textContent = value;
            document.getElementById('valueList').appendChild(listItem);
    
    
            document.getElementById('valueInput').value = '';
        } else {
            alert('Please enter a value!');
        }
    }

