import styles from "./LoginUser.module.css";

export function LoginUser() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formWrapper}>
        <form action="">
          <input type="text" id="username" placeholder="Username" />
          <input type="password" id="password" placeholder="Password" />
          <button className={styles.loginBtn}>Log In</button>
          <p>Forget Password?</p>
          <div className={styles.createBtn}>
            <button>Create new account</button>
          </div>
        </form>
      </div>
    </div>
  );
}
