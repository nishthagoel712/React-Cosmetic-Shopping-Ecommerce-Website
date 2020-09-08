import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useFormik} from "formik";
const ValidationCustomer=customerData=>{
  const errors={};
  if(!customerData.Name){
    errors.Name="please enter name";
  }
  else if(customerData.Name.length>20){
    errors.Name="please enter name in valid length";
  }
  if(!customerData.Phone){
    errors.Phone="please enter valid phone";
  }
  else if(!/^[6-9]\d{9}$/.test(customerData.Phone))
  {
	errors.Phone="please enter valid phone no.";
  }
  if(!customerData.Address){
    errors.Address="please enter Address";
  }
  if(!customerData.Postcode){
    errors.Postcode="please enter Postcode";
  }
  if(!customerData.Emailid){
    errors.Emailid="please enter Emailid";
  }
  else if(!/^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,8}$/.test(customerData.Emailid))
  {
	errors.Emailid="please enter valid Emailid";
  }
  return errors;
}
export default function Checkout() {
	let formik=useFormik(
		{
		  initialValues:{
			Name:"",
			Phone:"",
			Address:"",
			Postcode:"",
			Emailid:""
		  },
		  validate:ValidationCustomer,
		  },
		
	  );
	
		return (
			<Form className='container' onSubmit={formik.handleSubmit} >
				<form method='get' className='detail-form text-center'>
					<label>Name</label>
					<input id="Name" name="Name" type='text' className='name' required='required' value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					{formik.touched.Name && formik.errors.Name?<span style={{color:"lightblue"}}>{formik.errors.Name}</span>:null}
					<br></br>
					<label>PhoneNo.</label>
					<input id="Phone" name="Phone" type='tel' className='phone' required='required' value={formik.values.Phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					{formik.touched.Phone && formik.errors.Phone?<span style={{color:"lightblue"}}>{formik.errors.Phone}</span>:null}
					<br></br>
					<label>Address</label>
					<input id="Address" name="Address" type='text' className='address' required='required' value={formik.values.Address} onChange={formik.handleChange} onBlur={formik.handleBlur} />
					{formik.touched.Address && formik.errors.Address?<span style={{color:"lightblue"}}>{formik.errors.Address}</span>:null}
					<br></br>
					<label>Postcode</label>
					<input id="Postcode" name="Postcode" type='text' className='postcode' required='required' value={formik.values.Postcode} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
					{formik.touched.Postcode && formik.errors.Postcode?<span style={{color:"lightblue"}}>{formik.errors.Postcode}</span>:null}
					<br></br>
					<label>Email id</label>
					<input id="Emailid" name="Emailid" type='email' className='email' required='required'value={formik.values.Emailid} onChange={formik.handleChange} onBlur={formik.handleBlur} />
					{formik.touched.Emailid && formik.errors.Emailid?<span style={{color:"lightblue"}}>{formik.errors.Emailid}</span>:null}
					<br></br>
					<input type='radio' id='cash' name='paytype' defaultChecked/>
					<label htmlFor='cash' className='payment' >
						Cash on Delivery
					</label>
					<br></br>

					<input type='radio' id='online' name='paytype' />
					<label htmlFor='online' className='payment'>
						Online payment
					</label>
					<br />
					<Link to='/orderplaced'>
						<input type='submit' value='Place order' disabled={!(formik.isValid&&formik.dirty)} />
					</Link>
				</form>
			</Form>
		);
	
}

const Form = styled.div`
	label {
		font-family: 'Fredoka one',cursive;
		font-size: 1.5rem;
		margin-top: 40px;
	}

	input {
		border-radius: 4px;
		padding: 10px;
		margin-left: 70px;
		width: 270px;
		border-color: black;
		border-width: 0.1rem;
		font-family: 'Fredoka-one', cursive;

	}
	.payment {
		font-family: 'Fredoka one',cursive;
		font-size: 20px;
		margin: 15px;
		margin-left: 0.1rem;

	}

	input[type='radio'] {
		display: none;
	}

	input[type='radio'] + label:before {
		align-items: center;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		margin-right: 1.5rem;
		margin-top: 0.4rem;
		position: relative;
		background-color: #dfdfdf;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 2px solid white;
		cursor: pointer;
	}

	input[type='radio']:checked + label:before {
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		margin-right: 1.5rem;
		margin-top: 0.4rem;
		position: relative;
		background-color: #ffa500;
		content: '';
		display: inline-block;
		visibility: visible;
		border: 2px solid white;
	}

	input[type='radio'] + label {
		margin-top: 0.4rem;
	}

	input[type='submit'] {
		background: var(--mainBlue);
		font-size: 1.4rem;
		font-family: 'Fredoka One', cursive;
		color: white;
		text-transform: uppercase;
		border: white 3px;
		border-radius: 0.4rem;
		padding: 0.2rem;
		cursor: pointer;
		display: inline-block;
		transition: all 0.4s ease-in-out;
		width: 26rem;
		&:hover {
			background: var(--lightBlue);
		}
		&:focus {
			outline: none;
		}
	}
`;
