import { useFormik } from 'formik';
import img from '../logos/signup2.png'
import '../styles/signup.css'

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordconfirmation: ''
        },
        onSubmit: async (values, { resetForm }) => {
            let { firstname, lastname, email, password } = values;
            console.log(values);
            resetForm({ values: '' })
        }

    })

    return (
        <div className='col-md-5 offset-4 my-5'>
            <div className='bg-light '>
                <div className='text-center'>
                    <img src={img} style={{maxHeight:'200px', maxWidth:'200px'}}></img>
                </div>
                
                <div className='col-md-7 offset-3 my-3'>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='mt-3 '>
                            {/* <label>First Name</label> */}
                            <i className="fa-solid fa-user "></i><input className='form-control ' type='text' placeholder='Your Name'></input>
                        </div>

                        <div className='mt-3 '>
                            {/* <label>Email ID</label> */}
                            <i className="fa-solid fa-envelope"></i> <input className='form-control' type='text' placeholder='Your Email Id'></input>
                        </div>
                        <div className='mt-3 '>
                            {/* <label>Password</label> */}
                            <i className="fa-solid fa-lock"></i> <input className='form-control' type='text' placeholder='Enter Your Password'></input>
                        </div>
                        <div className='mt-3 '>
                            {/* <label>Re-type Your Password</label> */}
                            <i className="fa-solid fa-lock"></i> <input className='form-control' type='text' placeholder='Re-type Your Password '></input>
                        </div>
                        <div className='text-center'>
                            <button className=' bg-primary text-white mt-4 my-5 '>Signup</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    )
}