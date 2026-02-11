import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ id: null, nome: '', email: '' });
  const [leads, setLeads] = useState([]);
  const [status, setStatus] = useState({ mensagem: '', tipo: '' });
  const [carregando, setCarregando] = useState(false);

  const urlAPI = 'https://cadastrarlead-941157102046.southamerica-east1.run.app';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    
    try {
      const response = await fetch(urlAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        if (formData.id) {
          // Lógica de Edição local
          setLeads(leads.map(l => l.id === formData.id ? formData : l));
          setStatus({ mensagem: 'Lead atualizado!', tipo: 'sucesso' });
        } else {
          // Lógica de Cadastro local
          const novoLead = { ...formData, id: Date.now() };
          setLeads([...leads, novoLead]);
          setStatus({ mensagem: 'Lead salvo na nuvem!', tipo: 'sucesso' });
        }
        setFormData({ id: null, nome: '', email: '' });
      }
    } catch (err) {
      setStatus({ mensagem: 'Erro na conexão.', tipo: 'erro' });
    } finally {
      setCarregando(false);
    }
  };

  const removerLead = async (id) => {
    if (window.confirm("Deseja realmente remover este lead?")) {
      try {
        await fetch(urlAPI, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
        setLeads(leads.filter(lead => lead.id !== id));
      } catch (err) {
        console.error("Erro ao remover");
      }
    }
  };

  return (
    <div className="app-container">
      <div className="main-layout">
        <div className="form-card">
          <h1>Cloud Leads</h1>
          <p className="subtitulo">{formData.id ? 'Editando Registro' : 'Novo Cadastro Cloud'}</p>
          
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Nome do Lead" 
              value={formData.nome} 
              onChange={e => setFormData({...formData, nome: e.target.value})} 
              required 
            />
            <input 
              type="email" 
              placeholder="E-mail" 
              value={formData.email} 
              onChange={e => setFormData({...formData, email: e.target.value})} 
              required 
            />
            <button type="submit" disabled={carregando} className="btn-enviar">
              {carregando ? 'Processando...' : (formData.id ? 'Salvar Alterações' : 'Cadastrar agora')}
            </button>
            {formData.id && (
              <button type="button" onClick={() => setFormData({id:null, nome:'', email:''})} className="btn-cancelar">
                Cancelar
              </button>
            )}
          </form>
          {status.mensagem && <div className={`status-msg ${status.tipo}`}>{status.mensagem}</div>}
        </div>

        <div className="list-card">
          <h2>Leads Recém-Cadastrados</h2>
          <ul className="leads-lista">
            {leads.map(lead => (
              <li key={lead.id} className="lead-item">
                <div className="lead-info">
                  <strong>{lead.nome}</strong>
                  <span>{lead.email}</span>
                </div>
                <div className="acoes">
                  <button onClick={() => setFormData(lead)} className="btn-edit" title="Editar">✏️</button>
                  <button onClick={() => removerLead(lead.id)} className="btn-del" title="Excluir">🗑️</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;