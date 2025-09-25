// Função para mostrar o modal de confirmação
        function showConfirmationModal() {
            document.getElementById('confirmationModal').style.display = 'flex';
        }
        
        // Função para fechar o modal
        function closeConfirmationModal() {
            document.getElementById('confirmationModal').style.display = 'none';
        }
        
        // Event listeners
        document.getElementById('rsvpForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você normalmente enviaria os dados para um servidor
            // Como não temos backend, vamos apenas mostrar o modal
            showConfirmationModal();
            
            // Limpar o formulário
            this.reset();
        });
        
        document.getElementById('closeModal').addEventListener('click', closeConfirmationModal);
        document.getElementById('modalCloseBtn').addEventListener('click', closeConfirmationModal);
        
        // Fechar modal clicando fora dele
        window.addEventListener('click', function(e) {
            if (e.target === document.getElementById('confirmationModal')) {
                closeConfirmationModal();
            }
        });
        
        // Simular reserva de presentes (funcionalidade básica)
        document.querySelectorAll('.gift-item').forEach(item => {
            item.addEventListener('click', function() {
                const status = this.querySelector('.gift-status');
                if (status.classList.contains('available')) {
                    if (confirm('Deseja reservar este presente?')) {
                        status.textContent = 'Reservado (por você)';
                        status.classList.remove('available');
                        status.classList.add('reserved');
                    }
                } else if (status.textContent.includes('por você')) {
                    if (confirm('Deseja cancelar a reserva deste presente?')) {
                        status.textContent = 'Disponível';
                        status.classList.remove('reserved');
                        status.classList.add('available');
                    }
                }
            });
        });