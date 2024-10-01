function Button({ label }) {
    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };

    return (
        <button style={buttonStyle}>{label}</button>
    );
}

export default Button;
