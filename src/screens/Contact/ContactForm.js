import { useState } from "react";
import styles from './form.module.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        founders: false,
        angels: false,
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.heading}>Identify as</h2>

                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="founders"
                            checked={formData.founders}
                            onChange={handleChange}
                            className={styles.hiddenCheckbox}
                        />
                        <span className={styles.foundersText}>Founders</span>
                        <span className={`${styles.checkbox} ${formData.founders ? styles.checked : ""}`}>
                            {formData.founders && "✔"}
                        </span>
                    </label>

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="angels"
                            checked={formData.angels}
                            onChange={handleChange}
                            className={styles.hiddenCheckbox}
                        />
                        <span className={styles.angelsText}>Angels</span>
                        <span className={`${styles.checkbox} ${formData.angels ? styles.checked : ""}`}>
                            {formData.angels && "✔"}
                        </span>
                    </label>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                />

                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                />

                <div className={styles.line}></div> 
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
}
