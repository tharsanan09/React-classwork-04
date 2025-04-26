

const Contact = () => {
  return (
    <>
   

    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <form style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input type="text" name="name" style={styles.input} placeholder="Your Name" />

        <label style={styles.label}>Email:</label>
        <input type="email" name="email" style={styles.input} placeholder="your@email.com" />

        <label style={styles.label}>Message:</label>
        <textarea name="message" rows="5" style={styles.textarea} placeholder="Your message..." />

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>

    </>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginTop: '10px',
    marginBottom: '5px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Contact;
