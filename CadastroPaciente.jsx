import './CadastroPaciente.css';
import Sidebar from './Sidebar.jsx';
import { useState } from 'react';

function CadastroPaciente() {
  const [mostrarCurso, setMostrarCurso] = useState(false);

  const toggleCurso = () => {
    setMostrarCurso(!mostrarCurso);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="form-container">
        <form>
          <fieldset>
            <h3>Cadastro de Paciente</h3>

            <label><span className="negrito">Nome Completo</span><span className="obrigatorio">*</span>
              <input type="text" name="nome" placeholder="Insira o nome do paciente" required />
            </label>

            <label><span className="negrito">Matrícula ou CPF</span><span className="obrigatorio">*</span>
            <input type="text" name="matricula_ou_CPF" placeholder="Insira a matrícula ou o CPF"/>
            </label>

            <label><span className="negrito">Data de Nascimento</span><span className="obrigatorio">*</span>
              <input type="date" name="data_nascimento" required />
            </label>

            <label><span className="negrito">Nome do Responsável </span><span className="obrigatorio">*</span>
              <input type="text" name="NomeResponsavel" placeholder="Nome do Responsável (caso seja menor de idade)" required />
            </label>

            <label><span className="negrito">Telefone </span><span className="obrigatorio">*</span>
              <input type="tel" name="telefone" placeholder="(99)99999-9999" required />
            </label>

            <label><span className="negrito">E-mail</span><span className="obrigatorio">*</span>
              <input type="email" name="email" placeholder="Insira seu e-mail" required />
            </label>
            
            <label><span className="negrito">Tipo de Vínculo</span><span className="obrigatorio">*</span>
              <select name="TipoDeVinculo">
                <option>Aluno</option>
                <option>Profissinal do Cesar</option>
                <option>Outros</option>
              </select>
              <textarea name="mensagem" placeholder="Se a escolha for a opção outros, informe o tipo de vínculo." required></textarea>
            </label>

            <label><span className="negrito">Cursos</span></label>
            <small><span className="obrigatorio" style={{ color: 'red' }}>(Caso seja aluno do Cesar, marcar uma das opções)*</span></small>
            <br />
            <br />
            <button type="button" className="toggle-btn" onClick={toggleCurso}>Mostrar / Ocultar</button>

            {mostrarCurso && (
              <div className="toggle-content" id="cursoDiv">
                <select name="curso" multiple size="5">
                  <option>Análise e Desenvolvimento de Sistemas</option>
                  <option>Design Gráfico</option>
                  <option>Ciência da Computação</option>
                  <option>Sistemas de Informação</option>
                  <option>Tecnologia em Banco de Dados</option>
                </select>
                <br />
              </div>
            )}

            <label>
              <p className="negrito">Possui alguma neurodivergência?</p>
            </label>
            <div className="inline-radio">
              <label><input type="radio" name="possui" value="Sim" defaultChecked /> Sim</label> 
              <label><input type="radio" name="possui" value="Não" /> Não</label>
            </div>

            <div className="inline-radio">
              <label><span className="negrito">Turno das Sessões</span><span className="obrigatorio">*</span></label> |
              <label><input type="checkbox" name="turno" value="manha" /> Manhã</label> |
              <label><input type="checkbox" name="turno" value="tarde" /> Tarde</label> |
              <label><input type="checkbox" name="turno" value="noite" /> Noite</label>
            </div>

            <label><span className="negrito">Horário de Atendimento</span>
              <input type="time" name="horario" />
              <small><span className="negrito">(O horário está sujeito a alterações conforme disponibilidade do terapeuta e/ou do paciente)</span></small>
            </label>

            <br /><br />
            <button type="submit">Enviar</button>
            <button type="reset">Limpar</button>
            <p><span className="obrigatorio">*</span>Campos Obrigatórios</p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default CadastroPaciente;
