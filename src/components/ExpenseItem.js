import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaMinus, FaPlus } from 'react-icons/fa';
//import { FaPlus } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
          <td>{props.name}</td>
          <td>{Location}{props.cost}</td>
          
            <td onClick={event => increaseAllocation(props.name)}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'green' }}>
                <FaPlus color="white" />
              </div>
            </td>
          
            <td onClick={event => decreaseAllocation(props.name)}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'red' }}>
                <FaMinus color="white" />
              </div>
            </td>
          

          <td align="center"><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
      );

};

export default ExpenseItem;
