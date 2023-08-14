import { useRouter } from "next/router";
import style from '../styles/Login.module.css';

export default function Login() {
    const router = useRouter()
    return (
        <div className={style.wrapper}>
            <div className={style.formContent}>
                <h2>Login</h2>
                <form>
                    <input className={style.input} type='text' id='login' name='login' placeholder='Username' />
                    <input className={style.input} type='password' id='password' name='login' placeholder='Password' />
                    <button type='button' className={style.button} onClick={() => router.push('/')}>Log In</button>
                </form>
            </div>
        </div>
    )
}