import { useFormik } from 'formik';
import img from '../logos/signup2.png'
import '../styles/signup.css'

export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, { resetForm }) => {
            let { email, password } = values;
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
                            {/* <label>Email ID</label> */}
                            <i className="fa-solid fa-envelope"></i> <input className='form-control' type='text' placeholder='Your Email Id'></input>
                        </div>
                        <div className='mt-3 '>
                            {/* <label>Password</label> */}
                            <i className="fa-solid fa-lock"></i> <input className='form-control' type='text' placeholder='Enter Your Password'></input>
                        </div>
                        <div className='text-center'>
                            <button className=' bg-primary text-white mt-4 my-5 '>Login</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    )
}