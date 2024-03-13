import styles from "./RegisterUser.module.css";

export function RegisterUser() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.formWrapper}>
        <form className={styles.form}>
          <div className={styles.headerWrapper}>
            <h2>Create a new account</h2>
            <p>it's quick and easy</p>
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="username" />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="role">Role:</label>
            <input type="text" id="role" placeholder="role" disabled />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="email" />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.formInputWrapper}>
            <label htmlFor="Confirm_password">Confirm Password:</label>
            <input type="Confirm_password" id="password" />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
