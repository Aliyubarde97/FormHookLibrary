import './App.css'
import { FieldValues, useForm } from 'react-hook-form';

function App() {

  const {register, handleSubmit} = useForm( );
 

  const onSubmit = (data:FieldValues) => console.log(data)

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="">Name</label><br />
            <input type="text" id='name' {...register('name')} />
          </div>

          <div>
            <label htmlFor="">age</label><br />
            <input type="number"  {...register('age')}  id="age" />
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
