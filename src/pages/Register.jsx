import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/register.css";

const Register = () => {

    const [id, idchange] = useState("");
    const [firstname, firstnamechange] = useState("");
    const [lastname, lastnamechange] = useState("");
    const [age, agechange] = useState("");
    const [email, emailchange] = useState("");
    const [password, passwordchange] = useState("");
    const [phone, phonechange] = useState("");
    const [address, addresschange] = useState("");
    const [gender, genderchange] = useState("male");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (id === null || id === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (firstname === null || firstname === '') {
            isproceed = false;
            errormessage += ' Firstname';
        }
        if (lastname === null || lastname === '') {
            isproceed = false;
            errormessage += ' Lastname';
        }

        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {

            } else {
                isproceed = false;
                toast.warning('A password contains at least eight characters, including at least one number and includes both lower and uppercase letters')
            }
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^\d{10}$/.test(phone)) {

            } else {
                isproceed = false;
                toast.warning('Please enter the valid phone number')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, firstname, lastname, age, email, password, phone, address, gender };
        if (IsValidate()) {



            fetch("http://localhost:8000/user", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }


    return (
        <div>
            <div className="offset-lg-3 col-lg-6" style={{ marginTop: '50px', marginBottom: '50px' }}>
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="user name">User Name <span className="errmsg">*</span></label>
                                        <input value={id} onChange={e => idchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>


                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="first name">First Name <span className="errmsg">*</span></label>
                                        <input value={firstname} onChange={e => firstnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="last name">Last Name <span className="errmsg">*</span></label>
                                        <input value={lastname} onChange={e => lastnamechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="age">Age <span className="errmsg"></span></label>
                                        <input value={age} pattern="[0-9]*" onChange={e => agechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="email">Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="password">Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label htmlFor="male">Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button>
                            <Link to={'/login'} className="btn btn-danger">Back</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;