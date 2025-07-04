document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    try {
        const response = await fetch('http://localhost:3000/usuarios/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Salvar token e user completo no localStorage
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('user', JSON.stringify(data.user));

            // **Salvar também o ID do usuário separadamente**
            localStorage.setItem('userId', data.user.id);

            alert('Login realizado com sucesso!');
            window.location.href = '../dashboard/dashboard.html';
        } else {
            alert(`Erro: ${data.message || 'Credenciais inválidas'}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
});
