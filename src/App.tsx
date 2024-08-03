import './App.css'
import { FieldValues, useForm } from 'react-hook-form';


interface FormData {
  name:String,
  age:Number
}

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Name</label><br />
            <input type="text" id='name' {...register('name', { required: true, minLength: 3 })}  />
            { errors.name?.type === 'required' && <p>this filled is required</p>}
            { errors.name?.type === 'minLength' && <p>must be atlist morether 3 character</p>}
          </div>

          <div>
            <label htmlFor="">age</label><br />
            <input type="number"  {...register('age')} id="age" />
          </div>

          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>

    </>
  )
}

export default App
