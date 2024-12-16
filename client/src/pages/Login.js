const Login = ()=>{
    return(
        <form action="http://127.0.0.1:3001/login" method="POST">
            <input type="email"/>
            <input type='password'/>
            <button>ENVIAR</button>
        </form>
    )
}

export default Login;