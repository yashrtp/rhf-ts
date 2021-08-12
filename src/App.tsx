import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';

type Inputs = {
  preferredname: string
  emailaddress: string
  subject: string
  description: string
}

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> =(data) => {
    alert(JSON.stringify(data))
  }

  return (
    <main>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
       <label htmlFor="preferredname">Preferred Name</label>
       <input id="preferredname" type="text" {...register('preferredname', {required: true, maxLength: 200})}/>
       {
         errors.preferredname && <div className="error"> Enter your name</div>
       }
      </div>
      <div>
       <label htmlFor="emailaddress">Email Address</label>
       <input id="emailaddress" type="text" {...register('emailaddress' , {required: true, maxLength: 200})}/>
       {
         errors.emailaddress && <div className="error"> Enter your Email Address</div>
       }
      </div>
      <div>
       <label htmlFor="subject">Subject</label>
       <input id="subject" type="text"{...register('subject', {required: true, maxLength: 200})}/>
       {
         errors.subject && <div className="error"> Enter the Subject</div>
       }
      </div>
      <div>
       <label htmlFor="description">Description</label>
       <input id="description" type="text"{...register('description', {required: true, maxLength: 200})}/>
       {
         errors.description && <div className="error"> Enter the description </div>
       }
      </div>
      <button type ="submit">Submit</button>

    </form>
    </main>
   
  );
}

export default App;
