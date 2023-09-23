
import './Form.css'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Form(){
    const [state, setState] = useState('');
    const navigate = useNavigate();

    const stateAbbreviations = [
        'AK', 'AL', 'AR', 'AZ','CA', 'CO', 'CT', 'DC', 'DE',  'FL',   'GA',   'HI',   'IA',   'ID',   'IL',   'IN',   'KS',   'KY',   'LA',   'MA', 
        'MD',  'ME',   'MI',  'MN',   'MO',    'MS',    'MT',   'NC',  'ND',  'NE',   'NH',  'NJ',  'NM',   'NV',   'NY',  'OH',  'OK',  'OR',   'PA', 'RI',  'SC',  'SD',  'TN',  'TX',   'UT',  'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

        const dropdownList = stateAbbreviations.map(state => {
            return (
              <option className='dropdown-item' key={state} value={state}>
                {state}
              </option>
            );
          });
          
   function gatherParkData(stateID){
            navigate(`/states/${stateID}`)
        }
    


    return (
        <div className='form-container'>
            <select
            id='dropdown'
            name='state'
            className='dropdown'
            value={state}
            onChange={(e) => {
                setState(e.target.value);
                gatherParkData(e.target.value)
            }}
            >
            <option className='dropdown-item' key={'select-state'}>
                {' '}
                Select State{' '}
            </option>
            {dropdownList}
            </select>
        
        </div> 

    )
}


export default Form